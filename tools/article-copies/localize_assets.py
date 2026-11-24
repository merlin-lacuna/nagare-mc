"""Copy the stylesheets, scripts, images and fonts of archived articles to this site.

Usage:
    python localize_assets.py <slug> [<slug> ...]     # folders in ./out/
    python localize_assets.py --all

For each ./out/<slug>/snapshot.html the script:
  1. finds every asset the page loads (stylesheets, scripts, images, icons, fonts,
     and the url(...) and @import references inside stylesheets),
  2. downloads each asset from the Wayback Machine at the snapshot date, and from
     the live site only when the archive has no copy,
  3. saves the asset once in ./out/_assets/ (shared by all articles), and
  4. rewrites the page to load the asset from /portfolio/article-copies/_assets/.

Tracking scripts (analytics, tag managers, chat widgets) are removed.
srcset/sizes attributes are removed so that each image is downloaded only once.

Rebuild the page with make_snapshot_page.py (without --archived-assets) first,
so that snapshot.html contains the page as the original site served it.
"""

import argparse
import gzip
import hashlib
import html
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).parent
OUT_DIR = ROOT / "out"
ASSET_DIR = OUT_DIR / "_assets"
INDEX_FILE = ASSET_DIR / "_index.json"
PUBLIC_PREFIX = "/portfolio/article-copies/_assets/"
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)
TRACKER_HOSTS = (
    "googletagmanager.com", "google-analytics.com", "analytics.google.com",
    "hs-scripts.com", "hs-analytics.net", "hs-banner.com", "hscollectedforms.net",
    "hsforms.net", "hsforms.com", "hubspot.com", "usemessages.com",
    "segment.com", "segment.io", "hotjar.com", "clarity.ms", "facebook.net",
    "connect.facebook", "doubleclick.net", "linkedin.com/px", "licdn.com",
    "snap.licdn.com", "ads-twitter.com", "static.ads-twitter", "intercom",
    "crisp.chat", "drift.com", "cookiebot", "consent.cookie", "plausible.io",
    "mixpanel", "amplitude.com", "posthog", "matomo", "piwik", "leadfeeder",
    "lfeeder", "reb2b", "clearbit", "6sc.co", "bizible", "marketo", "pardot",
    "vimeo.com/api/player", "gtag/js", "fullstory", "heap.io", "quora.com/_/ad",
    "reddit.com/pixel", "redditstatic.com/ads", "tiktok", "bing.com/bat",
    "wp-statistics", "jetpack", "stats.wp.com", "gravatar.com/js",
)
ASSET_EXT = {
    "text/css": ".css", "application/javascript": ".js", "text/javascript": ".js",
    "image/png": ".png", "image/jpeg": ".jpg", "image/gif": ".gif", "image/webp": ".webp",
    "image/svg+xml": ".svg", "image/avif": ".avif", "image/x-icon": ".ico",
    "image/vnd.microsoft.icon": ".ico", "font/woff2": ".woff2", "font/woff": ".woff",
    "font/ttf": ".ttf", "font/otf": ".otf", "application/font-woff": ".woff",
    "application/font-woff2": ".woff2", "application/x-font-woff": ".woff",
    "application/vnd.ms-fontobject": ".eot", "application/x-font-ttf": ".ttf",
}


def load_index() -> dict:
    if INDEX_FILE.exists():
        return json.loads(INDEX_FILE.read_text(encoding="utf-8"))
    return {}


def save_index(index: dict) -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    INDEX_FILE.write_text(json.dumps(index, indent=1, sort_keys=True), encoding="utf-8")


def is_tracker(url: str) -> bool:
    low = url.lower()
    return any(host in low for host in TRACKER_HOSTS)


def http_get(url: str) -> tuple[bytes, str] | None:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                data = response.read()
                ctype = response.headers.get("Content-Type", "").split(";")[0].strip().lower()
                if response.headers.get("Content-Encoding") == "gzip" or data[:2] == b"\x1f\x8b":
                    try:
                        data = gzip.decompress(data)
                    except OSError:
                        pass
                return data, ctype
        except urllib.error.HTTPError as err:
            if err.code in (404, 403, 410):
                return None
            time.sleep(5 * (attempt + 1))
        except (urllib.error.URLError, TimeoutError, ConnectionError):
            time.sleep(5 * (attempt + 1))
    return None


def looks_like_page(got: tuple[bytes, str] | None) -> bool:
    """True when a server returned a web page (an error or redirect page) instead of a file."""
    if not got or not got[0]:
        return True
    data, ctype = got
    return ctype == "text/html" or data[:200].lstrip().lower().startswith((b"<!doctype html", b"<html"))


def download(original: str, timestamp: str) -> tuple[bytes, str] | None:
    """Fetch an asset from the Wayback Machine, then from the live web."""
    got = http_get(f"https://web.archive.org/web/{timestamp}id_/{original}")
    time.sleep(0.4)
    if not looks_like_page(got):
        return got
    got = http_get(original)
    if not looks_like_page(got):
        return got
    # Standard WordPress files: fetch the released version from the WordPress code archive.
    parts = urllib.parse.urlsplit(original)
    version = urllib.parse.parse_qs(parts.query).get("ver", [""])[0]
    marker = parts.path.find("/wp-includes/")
    if marker >= 0 and re.fullmatch(r"\d+\.\d+(\.\d+)?", version):
        got = http_get(f"https://core.svn.wordpress.org/tags/{version}{parts.path[marker:]}")
        if not looks_like_page(got):
            return got
    return None


def local_name(original: str, ctype: str) -> str:
    path = urllib.parse.urlsplit(original).path
    stem = re.sub(r"[^A-Za-z0-9._-]+", "-", Path(path).stem)[:60].strip("-") or "asset"
    ext = Path(path).suffix.lower()
    if not re.fullmatch(r"\.[a-z0-9]{1,6}", ext or ""):
        ext = ASSET_EXT.get(ctype, ".bin")
    digest = hashlib.sha1(original.encode()).hexdigest()[:10]
    return f"{stem}-{digest}{ext}"


class Localizer:
    def __init__(self, timestamp: str):
        self.timestamp = timestamp
        self.index = load_index()
        self.failed: list[str] = []
        self.new = 0

    def asset(self, url: str, base: str) -> str | None:
        """Return the public path of a localized asset, or None if it cannot be copied."""
        url = html.unescape(url.strip())
        if url.startswith(PUBLIC_PREFIX):  # already copied in an earlier run
            return url
        if not url or url.startswith(("data:", "#", "javascript:", "mailto:", "about:")):
            return None
        absolute = urllib.parse.urljoin(base, url)
        if not absolute.startswith(("http://", "https://")):
            return None
        absolute = absolute.split("#")[0]
        if absolute in self.index:
            return PUBLIC_PREFIX + self.index[absolute]
        got = download(absolute, self.timestamp)
        if not got:
            self.failed.append(absolute)
            return None
        data, ctype = got
        name = local_name(absolute, ctype)
        ASSET_DIR.mkdir(parents=True, exist_ok=True)
        self.index[absolute] = name  # record first, so that CSS self-references stop
        if name.endswith(".css") or ctype == "text/css":
            text = data.decode("utf-8", errors="replace")
            data = self.css(text, absolute).encode("utf-8")
        (ASSET_DIR / name).write_bytes(data)
        self.new += 1
        save_index(self.index)
        return PUBLIC_PREFIX + name

    def css(self, text: str, base: str) -> str:
        def repl_url(m: re.Match) -> str:
            ref = re.sub(r"\\(.)", r"\1", m.group(2))  # CSS escapes such as \( and \)
            new = self.asset(ref, base)
            return f"url({m.group(1)}{new}{m.group(1)})" if new else m.group(0)

        def repl_import(m: re.Match) -> str:
            new = self.asset(m.group(2), base)
            return f"@import {m.group(1)}{new}{m.group(1)}" if new else m.group(0)

        text = re.sub(r"@import\s+(['\"])([^'\"]+)\1", repl_import, text)
        return re.sub(r"url\(\s*(['\"]?)((?:\\.|[^'\")\\])+)\1\s*\)", repl_url, text)


TAG_RE = re.compile(r"<(link|script|img|source|video|audio|input|meta)\b([^>]*)>", re.I)
ATTR_RE = re.compile(r"""([\w:-]+)\s*=\s*("[^"]*"|'[^']*')""")
SCRIPT_BLOCK_RE = re.compile(r"(<script\b[^>]*>)(.*?)(</script>)", re.I | re.S)
STYLE_BLOCK_RE = re.compile(r"(<style\b[^>]*>)(.*?)(</style>)", re.I | re.S)


def localize_page(slug: str) -> None:
    folder = OUT_DIR / slug
    page = (folder / "snapshot.html").read_text(encoding="utf-8")
    wayback = re.search(r"https://web\.archive\.org/web/(\d{14})/([^\"]+)",
                        (folder / "index.html").read_text(encoding="utf-8"))
    if not wayback:
        sys.exit(f"{slug}: could not read the snapshot date from index.html")
    timestamp, original = wayback.group(1), html.unescape(wayback.group(2))
    base_match = re.search(r'<base href="([^"]+)"', page)
    if not base_match and '<base target="_top">' in page:
        print(f"{slug}: already processed; rebuild with make_snapshot_page.py to run again")
        return
    base = html.unescape(base_match.group(1)) if base_match else original
    if "web.archive.org" in base:
        sys.exit(f"{slug}: snapshot.html uses archived assets; rebuild it without --archived-assets")
    loc = Localizer(timestamp)

    # 1. Remove tracking scripts (external and inline).
    def drop_trackers(m: re.Match) -> str:
        opening, body = m.group(1), m.group(2)
        src = re.search(r"""src\s*=\s*["']([^"']+)""", opening)
        if (src and is_tracker(src.group(1))) or (not src and is_tracker(body)):
            return ""
        return m.group(0)

    page = SCRIPT_BLOCK_RE.sub(drop_trackers, page)
    page = re.sub(r"<noscript\b[^>]*>.*?</noscript>",
                  lambda m: "" if is_tracker(m.group(0)) else m.group(0), page, flags=re.I | re.S)

    # 1b. Copy the scripts listed in import maps (used by WordPress script modules).
    def localize_importmap(m: re.Match) -> str:
        if "importmap" not in m.group(1).lower():
            return m.group(0)
        try:
            data = json.loads(m.group(2))
        except json.JSONDecodeError:
            return m.group(0)
        for key, value in list(data.get("imports", {}).items()):
            new = loc.asset(value, base)
            if new:
                data["imports"][key] = new
        return m.group(1) + json.dumps(data) + m.group(3)

    page = SCRIPT_BLOCK_RE.sub(localize_importmap, page)

    # 2. Rewrite asset attributes in tags.
    def repl_tag(m: re.Match) -> str:
        tag, attrs = m.group(1).lower(), m.group(2)
        found = {k.lower(): v[1:-1] for k, v in ATTR_RE.findall(attrs)}
        if tag == "link":
            rel = found.get("rel", "").lower()
            if not any(r in rel for r in ("stylesheet", "icon", "preload", "apple-touch")):
                return m.group(0)
            if rel == "preload" and found.get("as") not in ("style", "font", "image", "script"):
                return m.group(0)
            keys = ["href"]
        elif tag == "meta":
            return m.group(0)
        else:
            keys = ["src", "data-src", "poster", "data-bg", "data-background-image"]
        new_attrs = attrs
        for key in keys:
            if key in found:
                new = loc.asset(found[key], base)
                if new:
                    new_attrs = re.sub(
                        rf"""(\b{re.escape(key)}\s*=\s*)("[^"]*"|'[^']*')""",
                        lambda a: f'{a.group(1)}"{new}"', new_attrs, count=1, flags=re.I)
        if tag in ("img", "source"):
            new_attrs = re.sub(r"""\s(?:data-)?(?:srcset|sizes)\s*=\s*("[^"]*"|'[^']*')""", "", new_attrs, flags=re.I)
            if tag == "source" and "src" not in found and "srcset" in found:
                first = found["srcset"].split(",")[0].strip().split(" ")[0]
                new = loc.asset(first, base)
                if new:
                    new_attrs += f' srcset="{new}"'
        if "integrity" in found:
            new_attrs = re.sub(r"""\sintegrity\s*=\s*("[^"]*"|'[^']*')""", "", new_attrs, flags=re.I)
        return f"<{m.group(1)}{new_attrs}>"

    page = TAG_RE.sub(repl_tag, page)

    # 3. Rewrite url(...) inside <style> blocks and style="" attributes.
    page = STYLE_BLOCK_RE.sub(lambda m: m.group(1) + loc.css(m.group(2), base) + m.group(3), page)
    page = re.sub(r"""(\sstyle\s*=\s*")([^"]*url\([^"]*)(")""",
                  lambda m: m.group(1) + loc.css(html.unescape(m.group(2)), base).replace('"', "'") + m.group(3),
                  page, flags=re.I)

    # 4. Make the article's own links absolute, then drop the base address, so that the
    #    /portfolio/article-copies/_assets/ paths resolve against this site.
    def absolute_link(m: re.Match) -> str:
        ref = html.unescape(m.group(3))
        if ref.startswith(("#", "data:", "mailto:", "tel:", "javascript:", PUBLIC_PREFIX)):
            return m.group(0)
        return f'{m.group(1)}{m.group(2)}{html.escape(urllib.parse.urljoin(base, ref))}{m.group(2)}'

    page = re.sub(r"""(<(?:a|area|form)\b[^>]*?\s(?:href|action)\s*=\s*)(["'])([^"']*)\2""",
                  absolute_link, page, flags=re.I)
    page = re.sub(r"<base\b[^>]*>", '<base target="_top">', page, count=1, flags=re.I)

    (folder / "snapshot.html").write_text(page, encoding="utf-8")
    print(f"{slug}: {loc.new} new assets, {len(loc.failed)} not found")
    for url in loc.failed[:10]:
        print(f"   not found: {url}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("slugs", nargs="*")
    parser.add_argument("--all", action="store_true", help="process every article folder in ./out/")
    args = parser.parse_args()
    slugs = args.slugs
    if args.all:
        slugs = sorted(p.name for p in OUT_DIR.iterdir() if p.is_dir() and not p.name.startswith("_"))
    if not slugs:
        parser.error("give at least one slug, or --all")
    for slug in slugs:
        localize_page(slug)


if __name__ == "__main__":
    main()

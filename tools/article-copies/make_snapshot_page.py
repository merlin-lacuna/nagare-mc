"""Build a branded archive page for one article from the Wayback Machine.

Usage:
    python make_snapshot_page.py <original-url> [--timestamp YYYYMMDDhhmmss] [--slug NAME] [--back /portfolio]

Output (in ./out/<slug>/):
    index.html     the page with the Merlin Carter banner and a frame
    snapshot.html  the raw archived article, shown inside the frame

Upload the <slug> folder to /var/www/nagare/portfolio/article-copies/ on the server.
"""

import argparse
import datetime as dt
import gzip
import html
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

OUT_DIR = Path(__file__).parent / "out"
USER_AGENT = "Mozilla/5.0 (snapshot-page-builder)"


def newest_ok_timestamp(url: str) -> str | None:
    """Ask the Wayback CDX API for the newest capture of url with HTTP status 200."""
    query = urllib.parse.urlencode(
        {"url": url, "filter": "statuscode:200", "fl": "timestamp", "limit": "-1"}
    )
    request = urllib.request.Request(
        f"https://web.archive.org/cdx/search/cdx?{query}", headers={"User-Agent": USER_AGENT}
    )
    with urllib.request.urlopen(request, timeout=60) as response:
        lines = response.read().decode().split()
    return lines[-1] if lines else None


def fetch_snapshot(url: str, timestamp: str | None, modifier: str = "id_") -> tuple[str, str, str]:
    """Return (html, timestamp, archived_original_url) for the closest Wayback capture.

    modifier "id_" returns the page as the site served it (assets load from the live site).
    modifier "if_" returns the page with every address rewritten to web.archive.org, so
    stylesheets and images load from the archive. Use "if_" when the original site is gone.
    """
    ts = timestamp or newest_ok_timestamp(url) or dt.datetime.now(dt.timezone.utc).strftime("%Y%m%d%H%M%S")
    request = urllib.request.Request(
        f"https://web.archive.org/web/{ts}{modifier}/{url}", headers={"User-Agent": USER_AGENT}
    )
    with urllib.request.urlopen(request, timeout=60) as response:
        final_url = response.geturl()
        raw = response.read()
        if raw[:2] == b"\x1f\x8b":  # some captures are stored gzip-compressed
            raw = gzip.decompress(raw)
        body = raw.decode("utf-8", errors="replace")
    match = re.search(r"/web/(\d{14})(?:id_|if_)/(.+)$", final_url)
    if not match:
        sys.exit(f"Could not read the snapshot timestamp from {final_url}")
    return body, match.group(1), match.group(2)


def prepare_article(body: str, original_url: str, archived_assets: bool = False) -> str:
    """Make relative links resolve correctly and open outside the frame.

    In archived-assets mode the Wayback Machine has rewritten addresses to /web/..., so
    the base is web.archive.org. Otherwise the base is the original article address.
    """
    if archived_assets:
        base = "https://web.archive.org/"
    else:
        parts = urllib.parse.urlsplit(original_url)
        base = f"{parts.scheme}://{parts.netloc}{parts.path}"
    tag = f'<base href="{html.escape(base)}" target="_top">'
    body = re.sub(r"<base\b[^>]*>", "", body, flags=re.I)
    if re.search(r"<head\b[^>]*>", body, flags=re.I):
        return re.sub(r"(<head\b[^>]*>)", r"\1" + tag, body, count=1, flags=re.I)
    return tag + body


def article_title(body: str) -> str:
    match = re.search(r"<title[^>]*>(.*?)</title>", body, flags=re.I | re.S)
    return html.unescape(match.group(1).strip()) if match else "Archived article"


def build_wrapper(title: str, original_url: str, timestamp: str, back: str) -> str:
    when = dt.datetime.strptime(timestamp, "%Y%m%d%H%M%S")
    date_text = f"{when.day} {when.strftime('%B %Y')}"
    wayback_url = f"https://web.archive.org/web/{timestamp}/{original_url}"
    shown_url = re.sub(r"^https?://(www\.)?", "", original_url).rstrip("/")
    e = html.escape
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)} (archived copy) | Merlin Carter</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="{e(original_url)}">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {{
    --bg: #ffffff; --text: #2e2e2e; --muted: #5c5c5c;
    --border: #55555599; --hover-bg: #55555516; --hover-border: #121212cc;
  }}
  @media (prefers-color-scheme: dark) {{
    :root {{
      --bg: #121212; --text: #e3e3e3; --muted: #a8a8a8;
      --border: #cccccc99; --hover-bg: #cccccc26; --hover-border: #ffffffcc;
    }}
  }}
  html, body {{ margin: 0; height: 100%; background: var(--bg); }}
  body {{ display: flex; flex-direction: column; font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: var(--text); }}
  .mc-bar {{ flex: none; display: flex; align-items: center; gap: 1.25rem; padding: .7rem 1.25rem; border-bottom: 1px solid var(--border); background: var(--bg); font-size: .9rem; line-height: 1.4; }}
  .mc-brand {{ font-weight: 600; font-size: 1.05rem; letter-spacing: -.01em; color: var(--text); text-decoration: none; white-space: nowrap; }}
  .mc-info {{ flex: 1; min-width: 0; color: var(--muted); }}
  .mc-info strong {{ color: var(--text); font-weight: 500; }}
  .mc-info a {{ color: inherit; }}
  .mc-src {{ overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }}
  .mc-actions {{ display: flex; gap: .6rem; flex: none; }}
  .mc-btn {{ display: inline-flex; align-items: center; padding: .45em 1em; border: 1px solid var(--border); border-radius: 8px; color: var(--text); text-decoration: none; white-space: nowrap; transition: all .2s ease; }}
  .mc-btn:hover {{ border-color: var(--hover-border); background: var(--hover-bg); }}
  iframe {{ flex: 1; width: 100%; border: 0; display: block; background: #fff; }}
  @media (max-width: 720px) {{
    .mc-bar {{ flex-wrap: wrap; gap: .5rem .9rem; padding: .6rem 1rem; }}
    .mc-info {{ order: 3; flex-basis: 100%; font-size: .8rem; }}
    .mc-actions {{ margin-left: auto; }}
    .mc-wayback {{ display: none; }}
  }}
</style>
</head>
<body>
<header class="mc-bar">
  <a class="mc-brand" href="{e(back)}">Merlin Carter</a>
  <div class="mc-info">
    <div><strong>Archived copy</strong> &middot; snapshot taken on {e(date_text)}</div>
    <div class="mc-src">Original: <a href="{e(original_url)}" target="_top">{e(shown_url)}</a></div>
  </div>
  <nav class="mc-actions">
    <a class="mc-btn mc-wayback" href="{e(wayback_url)}">View on the Wayback Machine</a>
    <a class="mc-btn" href="{e(back)}">&larr; Back to portfolio</a>
  </nav>
</header>
<iframe src="snapshot.html" title="{e(title)}"></iframe>
</body>
</html>
"""


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("url")
    parser.add_argument("--timestamp", help="Wayback timestamp YYYYMMDDhhmmss; default is the newest capture")
    parser.add_argument("--slug", help="folder name; default is the last part of the URL path")
    parser.add_argument("--back", default="/portfolio", help="link target for the brand and the back button")
    parser.add_argument(
        "--archived-assets",
        action="store_true",
        help="load stylesheets and images from the Wayback Machine (use when the original site is gone)",
    )
    args = parser.parse_args()

    modifier = "if_" if args.archived_assets else "id_"
    body, timestamp, archived_url = fetch_snapshot(args.url, args.timestamp, modifier)
    wanted = urllib.parse.urlsplit(args.url).path.rstrip("/")
    got = urllib.parse.urlsplit(archived_url).path.rstrip("/")
    if wanted != got:
        sys.exit(
            f"The capture at {timestamp} redirects to {archived_url}. "
            "Pick an older capture with --timestamp (search the Wayback Machine for status 200)."
        )
    slug = args.slug or urllib.parse.urlsplit(args.url).path.rstrip("/").split("/")[-1] or "article"
    target = OUT_DIR / slug
    target.mkdir(parents=True, exist_ok=True)
    (target / "snapshot.html").write_text(prepare_article(body, archived_url, args.archived_assets), encoding="utf-8")
    (target / "index.html").write_text(
        build_wrapper(article_title(body), archived_url, timestamp, args.back), encoding="utf-8"
    )
    print(f"slug={slug} timestamp={timestamp} original={archived_url}")
    print(f"written: {target}")


if __name__ == "__main__":
    main()

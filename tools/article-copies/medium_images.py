"""Fill images that the Wayback Machine never saved with the same images from Medium.

The Project A blog imported its posts from Medium, so a WordPress file name such as
da422-0xatx1ytstdh8ljmo.png holds the Medium image ID 0*xAtX1YtSTdh8LjmO in lower case.

Input:
    medium_todo.json  [{"slug", "title", "missing": [wordpress image URLs]}]
    medium_ids.json   {slug: {"url": medium post URL, "ids": ["1*AbC....png", ...]}}

For each missing image with a matching Medium ID, the script downloads
https://miro.medium.com/v2/<id> into out/_assets/ and records it in out/_assets/_index.json.
Then run make_snapshot_page.py and localize_assets.py for the article again.
"""

import json
import re
import sys
import time
import urllib.request
from pathlib import Path

from localize_assets import ASSET_DIR, load_index, local_name, save_index, USER_AGENT

HERE = Path(__file__).parent


def norm(text: str) -> str:
    return re.sub(r"[^a-z0-9]", "", text.lower())


def wordpress_key(url: str) -> str:
    stem = Path(url.split("?")[0]).stem
    stem = re.sub(r"^[0-9a-f]{5}-", "", stem)  # hash prefix added by the WordPress import
    return norm(stem)


def main() -> None:
    todo = json.loads((HERE / "medium_todo.json").read_text(encoding="utf-8"))
    medium = json.loads((HERE / "medium_ids.json").read_text(encoding="utf-8"))
    index = load_index()
    found = unmatched = 0
    for item in todo:
        ids = medium.get(item["slug"], {}).get("ids", []) + medium.get("_all", {}).get("ids", [])
        for url in item["missing"]:
            if url in index:
                continue
            key = wordpress_key(url)
            match = next((i for i in ids if key.startswith(norm(Path(i).stem))), None)
            if not match:
                unmatched += 1
                print(f"   no match: {item['slug']}: {url}")
                continue
            request = urllib.request.Request(f"https://miro.medium.com/v2/{match}", headers={"User-Agent": USER_AGENT})
            try:
                with urllib.request.urlopen(request, timeout=60) as response:
                    data = response.read()
                    ctype = response.headers.get("Content-Type", "").split(";")[0].strip().lower()
            except Exception as err:  # noqa: BLE001
                unmatched += 1
                print(f"   download failed: {match}: {err}")
                continue
            name = local_name(url, ctype)
            ASSET_DIR.mkdir(parents=True, exist_ok=True)
            (ASSET_DIR / name).write_bytes(data)
            index[url] = name
            save_index(index)
            found += 1
            time.sleep(0.3)
    print(f"copied from Medium: {found}, still missing: {unmatched}")
    sys.exit(0)


if __name__ == "__main__":
    main()

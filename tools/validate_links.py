"""Check local Markdown links against files in this repository.

Run from any directory: python tools/validate_links.py
"""

from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
LINK = re.compile(r"(?<!!)\[[^\]]+\]\((<?[^)\s>]+>?)\)")


def main() -> int:
    checked = 0
    broken = []
    for markdown in ROOT.rglob("*.md"):
        if ".git" in markdown.parts:
            continue
        text = markdown.read_text(encoding="utf-8")
        for match in LINK.finditer(text):
            address = match.group(1).strip("<>")
            if address.startswith(("http://", "https://", "mailto:", "#")):
                continue
            path = unquote(urlsplit(address).path)
            if not path:
                continue
            checked += 1
            if not (markdown.parent / path).exists():
                broken.append(f"{markdown.relative_to(ROOT)}: {address}")
    print(f"Checked {checked} local links in Markdown files; {len(broken)} broken.")
    for item in broken:
        print(item)
    return 1 if broken else 0


if __name__ == "__main__":
    sys.exit(main())

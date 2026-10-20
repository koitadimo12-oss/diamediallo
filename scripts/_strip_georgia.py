from pathlib import Path

root = Path(__file__).resolve().parents[1] / "src"
old1 = " style={{ fontFamily: 'Georgia, serif' }}"
old2 = " style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}"
count = 0
for p in root.rglob("*.tsx"):
    t = p.read_text(encoding="utf-8")
    n = t.replace(old2, "").replace(old1, "")
    if n != t:
        p.write_text(n, encoding="utf-8")
        count += 1
        print(p.relative_to(root.parent))
print("files", count)

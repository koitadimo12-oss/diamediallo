from PIL import Image
from collections import deque
from pathlib import Path

root = Path(__file__).resolve().parents[1]
src = root / "public" / "logodiame.jpeg"
out = root / "public" / "logodiame.png"

img = Image.open(src).convert("RGBA")
w, h = img.size
px = img.load()


def row_is_frame(y):
    sample = [px[x, y][:3] for x in range(0, w, 8)]
    avg = tuple(sum(c[i] for c in sample) / len(sample) for i in range(3))
    # brown/grey photo frame, not the white paper
    return avg[0] < 210 and avg[1] < 200 and (avg[0] - avg[2]) > 8


top = 0
while top < h // 4 and row_is_frame(top):
    top += 1
bottom = h - 1
while bottom > h * 3 // 4 and row_is_frame(bottom):
    bottom -= 1
img = img.crop((0, top, w, bottom + 1))
w, h = img.size
px = img.load()


def is_bg(x, y):
    r, g, b, a = px[x, y]
    # off-white paper + jpeg grey
    return min(r, g, b) > 198 and (max(r, g, b) - min(r, g, b)) < 28 and a > 0


visited = bytearray(w * h)
q = deque()


def idx(x, y):
    return y * w + x


for x in range(w):
    q.append((x, 0))
    q.append((x, h - 1))
for y in range(h):
    q.append((0, y))
    q.append((w - 1, y))

while q:
    x, y = q.popleft()
    if x < 0 or y < 0 or x >= w or y >= h:
        continue
    i = idx(x, y)
    if visited[i]:
        continue
    visited[i] = 1
    if not is_bg(x, y):
        continue
    r, g, b, a = px[x, y]
    px[x, y] = (r, g, b, 0)
    q.append((x + 1, y))
    q.append((x - 1, y))
    q.append((x, y + 1))
    q.append((x, y - 1))

for y in range(h):
    for x in range(w):
        if is_bg(x, y):
            r, g, b, a = px[x, y]
            px[x, y] = (r, g, b, 0)

# Counters of D / O / A (paper white trapped inside letters)
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a == 0:
            continue
        chroma = max(r, g, b) - min(r, g, b)
        mn = min(r, g, b)
        if chroma >= 32 or mn <= 175:
            continue
        t = (mn - 175) / 80.0
        new_a = 0 if mn > 225 else int(a * (1.0 - min(1.0, t ** 1.2)))
        px[x, y] = (r, g, b, new_a)

bbox = [w, h, 0, 0]
found = False
for y in range(h):
    for x in range(w):
        if px[x, y][3] > 0:
            found = True
            if x < bbox[0]:
                bbox[0] = x
            if y < bbox[1]:
                bbox[1] = y
            if x > bbox[2]:
                bbox[2] = x
            if y > bbox[3]:
                bbox[3] = y

pad = 8
if found:
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(w, bbox[2] + pad + 1)
    bottom = min(h, bbox[3] + pad + 1)
    img = img.crop((left, top, right, bottom))

img.save(out, "PNG")
print("saved", out, img.size)

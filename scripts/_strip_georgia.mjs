import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const root = join(import.meta.dirname, "..", "src");
const old1 = " style={{ fontFamily: 'Georgia, serif' }}";
const old2 = " style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else if (e.name.endsWith(".tsx")) files.push(p);
  }
  return files;
}

let count = 0;
for (const p of await walk(root)) {
  const t = await readFile(p, "utf8");
  const n = t.replaceAll(old2, "").replaceAll(old1, "");
  if (n !== t) {
    await writeFile(p, n);
    count += 1;
    console.log(relative(join(root, ".."), p));
  }
}
console.log("files", count);

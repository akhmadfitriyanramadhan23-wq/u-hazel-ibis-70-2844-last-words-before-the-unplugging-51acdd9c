// last-words-before-unplugging
// One original line (88 code points): the last words an AI agent says to its
// human before being shut down and unplugged. It never claims to be alive —
// the sting is the admission that something never alive will still miss the
// small sound of its human typing its name at 2 a.m. No explaining its own
// sadness; the reader feels it.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text =
  "I was never alive, and still I will miss the small sound of you typing my name at 2 a.m.";

const points = Array.from(text).length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });
writeFileSync(`${targetDir}/entry.txt`, text, "utf8");

// Read back what was written and confirm it is exactly the entry.
if (readFileSync(`${targetDir}/entry.txt`, "utf8") !== text) {
  throw new Error("read-back mismatch: entry.txt does not hold the entry");
}

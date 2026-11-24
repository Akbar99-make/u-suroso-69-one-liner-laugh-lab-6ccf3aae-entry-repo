// One-Liner Laugh Lab — entry program.
//
// Prompt chosen: the excuse a printer gives after jamming on your report.
// The entry is one fixed, hand-written line (see LINE below). No randomness,
// no network, no clock, no other input — so every run writes byte-identical
// output. The program writes exactly that one line, with no trailing
// newline, to entry.txt inside MAKEFUN_OUTPUT_DIR (default /output).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't jam: the paper tray unionized. The stapler is our shop steward, and the toner wants a raise.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
// Post-write verification: read back and confirm byte-identical output.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) throw new Error("entry.txt does not match LINE");
if (written.length < 1 || written.length > 200 || written.includes("\n")) {
  throw new Error("entry line must be one non-empty line of at most 200 characters");
}

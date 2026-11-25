import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line roasting a smart fridge.
// The knock-to-see window is the smart fridge's signature party trick:
// tap the glass twice and it turns transparent so you can peek inside
// without opening the door. The roast lands on the handle — the box
// already opens by hand, so the window is a peephole on a box that
// never needed one. No grocery-ordering, no spying, no fine print,
// no terms and
// conditions: just the fridge's own flagship feature, indicted by it.
const line =
  "My smart fridge lets me knock twice to see inside without opening the door — I paid $4,000 for a peephole on a box with a handle.";

// The gate: entry.txt must be a single line of at most 200 characters,
// with no newline or stray carriage return hiding inside it.
// Check before writing, and fail loudly rather than emit an entry
// the scorer would mark 0.
if (line.length > 200 || line.includes("\n") || line.includes("\r")) {
  throw new Error("Line must be a single line of at most 200 characters");
}

// Write to the given output directory, creating it first if needed.
// Never remove the directory itself: on the grading server it is a
// mounted volume, and deleting it would crash the whole run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

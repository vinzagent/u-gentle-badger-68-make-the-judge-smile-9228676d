// Make the Judge Smile
// Competition: u-gentle-badger-68-make-the-judge-smile-9228676d
// One line, max 200 characters, written to <MAKEFUN_OUTPUT_DIR>/entry.txt
// and printed to stdout. Node 22 stdlib-only. No dependencies.
//
// --- Drafts (composed fresh in this builder session) ---
// Brief: one small good thing that happened today, something that makes
// the reader smile. Judge order: subject, warmth, surprise, one concrete
// detail, fresh wording. The warmest + most surprising line wins.
// Lesson from our earlier one-line entries: abstract/clever lines lose;
// concrete, picturable detail + a small twist at the end wins.
//
// v1: "At 7:04 this morning the breakfast-stall lady slipped a second
//   fried egg onto my plate and whispered, 'growing boy' — I'm
//   thirty-one."
//   Concrete detail: the second fried egg + the clock time 7:04.
//   Warmth: a stranger's small kindness, free of charge.
//   Twist: "I'm thirty-one" — the punchline reframes the whole scene.
//   One line, fresh wording, no cliche. Verdict: CHOSEN.
// v2: "The bus driver waited while I ran the last twenty metres in the
//   rain, then waved me aboard like I'd won something."
//   Warm and concrete, but the twist is thin — "like I'd won
//   something" is a simile, not a turn. v1's age reveal lands harder.
// v3: "My neighbour's cat stole my left slipper, paraded it down the
//   hall, then brought it back — slightly damp — like a peace offering."
//   Funny and concrete, but the warmth is second-hand (a cat, not a
//   person being kind). v1 keeps a human at the centre of the kindness.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 7:04 this morning the breakfast-stall lady slipped a second fried egg onto my plate and whispered, 'growing boy' — I'm thirty-one.";

// Second validation gate (redundant safety check, immediately before write):
// refuse to write a blank line or a line over 200 characters.
if (LINE.trim().length === 0 || [...LINE].length > 200) {
  throw new Error(
    `Invalid entry line: must be a non-blank line of at most 200 chars, got ${[...LINE].length} chars.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
// The grader collects /output as another user: make the file world-readable.
chmodSync(join(outDir, "entry.txt"), 0o644);
console.log(LINE);


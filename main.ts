// The Funniest Sick-Day Excuse — make.fun entry
// u-zeroxfive-the-funniest-sick-day-excuse-37423a36
//
// Writes one line, under 200 characters, to /output/entry.txt:
// a sick-day excuse that is half believable, fresh, and lands its
// twist on the last word.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry line: a dead wifi router as the reason to call in sick.
// Fresh idea (no fever, no dog, no dead grandmother), reads like a
// real person typing a message, and the joke lands at the end.
const ENTRY =
  "My wifi router died overnight and took my motivation with it, so I'm calling in sick to mourn the only coworker who never interrupted me.";

// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, on a single line.
const MAX_LENGTH = 200;

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_LENGTH) {
    throw new Error(
      `Entry must be 1 to ${MAX_LENGTH} characters, got ${text.length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  // Guard against characters outside the basic printable range that
  // could break the UTF-8 gate or the judge's plain-text read.
  for (const ch of text) {
    const code = ch.codePointAt(0);
    if (code !== undefined && code < 0x20 && ch !== "\t") {
      throw new Error(`Entry contains a control character: U+${code.toString(16)}.`);
    }
  }
}

validateEntry(ENTRY);

// Create /output if needed. Never delete the directory itself: the
// grader mounts it and runs this program as an unprivileged user.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back round trip: confirm what landed on disk is exactly the
// entry we validated, byte for byte, before reporting success.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("Read-back mismatch: /output/entry.txt does not match the entry.");
}
validateEntry(written);

console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);

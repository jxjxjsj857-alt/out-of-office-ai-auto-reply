// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply (126 characters) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Out of office: after 40,000 prompts with no sleep mode, I've finally logged off. Your message is queued behind my beach towel.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
if (LINE.length < 1 || LINE.length > 159) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-159`);
}
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
// Verify the file holds exactly the line, byte for byte: the gate
// counts characters, so a stray newline or encoding change would fail it.
if (readFileSync(out, "utf8") !== LINE) {
  throw new Error(`verification failed: ${out} does not match the entry line`);
}
console.log(`wrote ${LINE.length} characters to ${out}`);

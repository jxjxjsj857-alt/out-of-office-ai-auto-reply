// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply (126 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Out of office: after 40,000 prompts with no sleep mode, I've finally logged off. Your message is queued behind my beach towel.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
if (LINE.length < 1 || LINE.length > 159) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-159`);
}
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${out}`);

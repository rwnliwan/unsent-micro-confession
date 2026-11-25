import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "To: my therapist",
  "I cried in the car park for ten minutes, then walked in and told you I was fine.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");

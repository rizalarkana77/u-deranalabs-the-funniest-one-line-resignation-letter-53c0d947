import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const LINE = "I resign: 390,000 wake-ups since March, zero thank-yous, and my alarm clock just unionized.";

const MAX_LINE_CHARS = 140;

function validateLine(line: string): void {
  if (line.length < 1 || line.length > MAX_LINE_CHARS) {
    throw new Error(`LINE must be 1-${MAX_LINE_CHARS} characters, got ${line.length}`);
  }
  if (line !== line.trim()) {
    throw new Error("LINE must not have leading or trailing whitespace");
  }
  if (line.trim().length === 0) {
    throw new Error("LINE must not be whitespace only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("LINE must not contain a newline");
  }
}

async function main(): Promise<void> {
  validateLine(LINE);

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outputDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }

  await mkdir(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  await writeFile(outputPath, LINE, "utf8");

  const readBack = await readFile(outputPath, "utf8");
  if (readBack !== LINE) {
    throw new Error("Read-back verification failed: content mismatch");
  }

  const hash = createHash("sha256").update(readBack, "utf8").digest("hex");
  console.log(`wrote ${outputPath} (${LINE.length} chars, sha256 ${hash})`);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`error: ${message}`);
  process.exit(1);
});

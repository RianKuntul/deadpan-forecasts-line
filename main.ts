// Deadpan Forecasts for Cities That Do Not Exist — make.fun entry (deadpan-forecasts-line).
// Writes exactly one original one-line weather forecast for a city that does
// not exist to $MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt when unset).
// Deterministic: fixed string, no network, no randomness, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In Grumblewick, highs of 41 degrees with scattered apologies, then a 70% chance of teaspoons after dark — umbrellas will not help, and neither will denial.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

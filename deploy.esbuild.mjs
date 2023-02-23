import { appendFileSync, readFileSync } from "fs";
import { build } from "esbuild";

function jsBundle() {
  const entry = "dist/components/index.js";
  const contents = readFileSync(entry, "utf-8");
  const toAppend = "\ndefineCustomElements();";
  if (!contents.includes(toAppend)) {
    appendFileSync(entry, toAppend);
  }

  return build({
    entryPoints: ["dist/components/index.js"],
    bundle: true,
    outfile: "dist/bundle/index.js",
    format: "esm",
    minify: true,
  });
}

function cssBundle() {
  return build({
    entryPoints: ["src/style/index.css"],
    outfile: "dist/bundle/index.css",
    bundle: true,
    minify: true,
  });
}

async function main() {
  await Promise.all([jsBundle(), cssBundle()]);
}

main();

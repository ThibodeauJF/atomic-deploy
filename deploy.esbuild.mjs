import { appendFileSync, readFileSync } from "fs";
import { build } from "esbuild";

function jsIndexBundle() {
  const entry = "dist/index.js";
  return build({
    entryPoints: [entry],
    bundle: true,
    outfile: "dist/bundle/index.js",
    format: "esm",
  });
}

function jsComponentsBundle() {
  const entry = "dist/components/index.js";
  const contents = readFileSync(entry, "utf-8");
  const toAppend = "\ndefineCustomElements();";
  if (!contents.includes(toAppend)) {
    appendFileSync(entry, toAppend);
  }

  return build({
    entryPoints: ["dist/components/index.js"],
    bundle: true,
    minify: true,
    outfile: "dist/bundle/components.js",
    format: "esm",
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

// TODO: add html

async function main() {
  await Promise.all([jsIndexBundle(), jsComponentsBundle(), cssBundle()]);
}

main();

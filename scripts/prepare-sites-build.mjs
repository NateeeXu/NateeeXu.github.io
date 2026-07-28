import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { buildSync } from "esbuild";

mkdirSync("dist/server/ssr", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });

copyFileSync(".openai/hosting.json", "dist/.openai/hosting.json");
writeFileSync("dist/package.json", JSON.stringify({ type: "module" }));
buildSync({
  entryPoints: ["dist/server/ssr/index.mjs"],
  outfile: "dist/server/ssr/index.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  external: ["node:*", "../index.js"],
  conditions: ["worker", "browser", "module", "import", "default"],
});
writeFileSync(
  "dist/server/index.js",
  [
    'import handleRequest from "./index.mjs";',
    "",
    "export default {",
    "  fetch(request, env, context) {",
    "    return handleRequest(request, env, context);",
    "  },",
    "};",
    "",
  ].join("\n"),
);

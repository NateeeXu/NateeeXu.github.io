import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";

mkdirSync("dist/server/ssr", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });

copyFileSync("dist/server/ssr/index.mjs", "dist/server/ssr/index.js");
copyFileSync(".openai/hosting.json", "dist/.openai/hosting.json");
writeFileSync("dist/package.json", JSON.stringify({ type: "module" }));
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

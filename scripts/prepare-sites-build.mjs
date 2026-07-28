import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { buildSync } from "esbuild";

mkdirSync("dist/server/ssr", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });

copyFileSync(".openai/hosting.json", "dist/.openai/hosting.json");
writeFileSync("dist/package.json", JSON.stringify({ type: "module" }));

const ssrEntryPath = "dist/server/ssr/index.mjs";
let ssrSource = readFileSync(ssrEntryPath, "utf8");
const createRequireAssignment = ssrSource.match(
  /([\w$]+)=([\w$]+)\(import\.meta\.url\)/,
);

if (!createRequireAssignment) {
  throw new Error("Unable to normalize the generated Vinext SSR entry.");
}

const createRequireName = createRequireAssignment[1];
ssrSource = `import*as __sitesReactDom from"react-dom";${ssrSource}`;
ssrSource = ssrSource.replace(createRequireAssignment[0], `${createRequireName}=null`);
ssrSource = ssrSource.replace(
  `${createRequireName}(\`react-dom\`)`,
  "__sitesReactDom",
);
writeFileSync(ssrEntryPath, ssrSource);

buildSync({
  entryPoints: [ssrEntryPath],
  outfile: "dist/server/ssr/index.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  external: ["node:*", "../index.js"],
  conditions: ["worker", "browser", "module", "import", "default"],
  define: {
    "process.env.NODE_ENV": '"production"',
  },
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

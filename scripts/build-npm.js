// ex. scripts/build_npm.ts
import { expandGlobSync } from "https://deno.land/std@0.221.0/fs/expand_glob.ts";
import {
  copySync,
  ensureDirSync,
} from "https://deno.land/std@0.221.0/fs/mod.ts";

import { SEPARATOR } from "https://deno.land/std@0.221.0/path/mod.ts";
import { build, emptyDir } from "https://deno.land/x/dnt@0.40.0/mod.ts";

await emptyDir("./_npm");

await build({
  entryPoints: [
    "./src/mod.js",
    "./src/components/clip-board/clip-board.js",
    "./src/components/qr-code/qr-code.js",
  ],
  outDir: "./_npm",
  importMap: "import-map.json",
  typeCheck: "both",
  test: false,
  declaration: "inline",
  compilerOptions: {
    "allowJs": true,
    "checkJs": true,
  },
  shims: {
    // see JS docs for overview and more options
    // deno: true,
  },
  package: {
    // package.json properties
    name: "open-comps",
    version: "1.0.7",
    description:
      "Web Components built on top of Open Props, utilizing Progressive Enhancement. Minimal JS, maximum compatibility. Works with any front end framework (and without).",
    private: false,
    author: "&tellar Company (stellarand.com)",
    license: "ISC",
    repository: {
      type: "git",
      url: "git+https://github.com/andstellar/open-comps.git",
    },
    bugs: {
      url: "https://github.com/andstellar/open-comps/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "./_npm/LICENSE");
    Deno.copyFileSync("README.md", "./_npm/README.md");

    for (const entry of expandGlobSync("src/**/*.css")) {
      const distPath = entry.path.replace("src", "_npm");
      const distDir = distPath.substring(0, distPath.lastIndexOf(SEPARATOR));
      ensureDirSync(distDir, { recursive: true });
      copySync(entry.path, distPath);
    }
  },
});

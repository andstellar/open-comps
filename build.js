//build.js
import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: [
      "src/full.css",
      "src/main.css",
      "src/light.css",
      "src/dark.css",
      "src/components/components.css",
      "src/components/clip-board/clip-board.css",
      "src/components/image-compare/image-compare.css",
      "src/components/qr-code/qr-code.css",
    ],
    bundle: false,
    minify: true,
    outdir: "dist",
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ["src/full.css"],
    bundle: true,
    minify: true,
    outfile: "dist/bundle.css",
  })
  .catch(() => process.exit(1));

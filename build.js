//build.js
import esbuild from 'esbuild'
import { cache } from 'esbuild-plugin-cache'
import * as importMapPlugin from "esbuild-plugin-import-map";
import importMap from "./import-map.js";

importMapPlugin.load([importMap]);

esbuild.build({
    entryPoints: [
        'src/index.js',
        'src/components/clip-board/clip-board.js',
        'src/components/qr-code/qr-code.js',
    ],
    bundle: true,
    format: 'esm',
    minify: false,
    sourcemap: false,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    plugins: [importMapPlugin.plugin()],
    outdir: 'dist',
}).catch(() => process.exit(1))

esbuild.build({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    format: 'esm',
    outfile: 'dist/bundle.js',
    plugins: [cache({ importmap: importMap, directory: './_cache' })],
})
    .catch(() => process.exit(1))

esbuild.build({
    entryPoints: ['src/full.css'],
    bundle: true,
    minify: true,
    outfile: 'dist/bundle.css',
})
    .catch(() => process.exit(1))

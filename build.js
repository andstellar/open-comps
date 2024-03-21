//build.js
import esbuild from 'esbuild'
import { cache } from 'esbuild-plugin-cache'

import {clientImportMap} from './import-maps.js';

esbuild
  .build({
    entryPoints: ['components/qr-code/qr-code.js'],
    bundle: true,
    outfile: 'bundle.js',
    plugins: [cache({ importmap: clientImportMap, directory: './_cache' })],
  })
  .catch(() => process.exit(1))
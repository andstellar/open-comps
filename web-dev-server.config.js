import { importMapsPlugin } from '@web/dev-server-import-maps';

import {serverImportMap} from './import-maps.js';

export default {
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: serverImportMap,
      },
    }),
  ],
};
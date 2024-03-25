import { importMapsPlugin } from "@web/dev-server-import-maps";

import { importMap } from "./import-map.js";

export default {
  plugins: [
    importMapsPlugin({
      inject: {
        importMap,
      },
    }),
  ],
};

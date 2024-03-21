export const clientImportMap = {
    "imports": {
        "@11ty/is-land": "https://esm.sh/@11ty/is-land@4.0.0",
        "@11ty/is-land/": "https://esm.sh/@11ty/is-land@4.0.0/",

        "preact": "https://esm.sh/preact@10.19.2",
        "preact/": "https://esm.sh/preact@10.19.2/",

        "preact-iso": "https://esm.sh/preact-iso@2.4.0",

        "preactement": "https://esm.sh/preactement@1.8.5",

        "htm/": "https://esm.sh/htm@3.1.1/",
        "@preact/signals": "https://esm.sh/@preact/signals@1.2.2",
        "qrcode": "https://esm.sh/qrcode@1.5.3"
    }
};

export const serverImportMap = {
    "imports": {
        ...clientImportMap.imports,
    }
};
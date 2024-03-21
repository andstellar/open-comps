

To use, put the following in your html `head` element as discussed [https://web.dev/articles/prefers-color-scheme#loading_strategy](here):
```
<script>
  // If you want to support browsers that do not have `prefers-color-scheme` supported, use this to fall back to light mode.
  if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentHTML(
      'beforeend',
      '<link rel="stylesheet" href="/light.css" onload="document.documentElement.style.display = \'\'">',
    );
  }
</script>
<link rel="stylesheet" href="open-comps/dark.css"  media="(prefers-color-scheme: dark)"  />
<link rel="stylesheet" href="open-comps/light.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="open-comps/main.css" />
```

We include styles for the following:

* `webcomponent-qr-code`
OR
* https://github.com/shoelace-style/shoelace/tree/next/src/components/qr-code
* emoji-picker-element
* https://github.com/11ty/demo-webc-image-compare/tree/main/_components
* https://github.com/shoelace-style/shoelace/tree/next/src/components/copy-button

* https://iconify.design/docs/iconify-icon/

* https://github.com/shoelace-style/shoelace/tree/next/src/components/format-bytes
* https://github.com/shoelace-style/shoelace/tree/next/src/components/format-date
* https://github.com/shoelace-style/shoelace/tree/next/src/components/format-number

* https://github.com/shoelace-style/shoelace/tree/next/src/components/relative-time
* https://github.com/shoelace-style/shoelace/tree/next/src/components/split-panel
* https://github.com/shoelace-style/shoelace/tree/next/src/components/drawer

* https://github.com/shoelace-style/shoelace/tree/next/src/components/skeleton

* https://github.com/shoelace-style/shoelace/tree/next/src/components/rating
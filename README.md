# open-comps

Web Components built on top of [Open Props](https://open-props.style), utilizing
Progressive Enhancement. Minimal JS, maximum compatibility. Works with any front
end framework (and without).

> [!IMPORTANT]\
> This project is still in active development

## Usage

### Base Theme

To use base themes, put the following in your html `head` element:

```
<link rel="stylesheet" href="open-comps/dark.css"  media="(prefers-color-scheme: dark)"  />
<link rel="stylesheet" href="open-comps/light.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="open-comps/main.css" />
```

This includes all the colors for both `light` and `dark` modes as well as all
the normalized styling.

### Components

#### To include all components

Place the following in your `head` element:

```
<link rel="stylesheet" href="open-comps/components.css" />
```

And either in your `head` element or main JS file:

```
import "open-comps"
```

#### To include a single component (example, `qr-code`)

```
<link rel="stylesheet" href="open-comps/qr-code.css" />
```

and

```
import "open-comps/qr-code.js"
```

Note this can be included anywhere in your `body` element as:

```
<html>
...
    <style>
        @import url('https://esm.sh/open-comps@1.0.6/components/qr-code/qr-code.css');
    </style>
    <qr-code value="https://stellarand.com"></qr-code>
    <script type="module" src="https://esm.sh/open-comps@1.0.6/esm/components/qr-code/qr-code.js"></script>...
</html>

## Contributing

This project uses the following for development:

- [Chomp](https://chompbuild.com/)
- [Deno](https://deno.land)
- [DNT](https://github.com/denoland/dnt)
```

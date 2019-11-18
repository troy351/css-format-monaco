# css-format-monaco

<p>
  <a href="https://npmcharts.com/compare/css-format-monaco?minimal=true"><img src="https://img.shields.io/npm/dm/css-format-monaco.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/css-format-monaco"><img src="https://img.shields.io/npm/v/css-format-monaco.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/css-format-monaco"><img src="https://img.shields.io/npm/l/css-format-monaco.svg" alt="License"></a>
</p>

CSS Formatter Plugin for [monaco-editor](https://github.com/Microsoft/monaco-editor)

`CSS` / `LESS` / `SCSS` Support

## Compatibility

Compatible with Monaco Editor `v0.12.0` and above

# Install

```shell
$ npm install css-format-monaco
```

# Usage

ES Module

```javascript
import cssFormatMonaco from "css-format-monaco";

const dispose = cssFormatMonaco(
  // monaco-editor it self. If not provided, will use window.monaco instead.
  // This could make the plugin support both ESM and AMD loaded monaco-editor
  monaco,
  // options
  // see full option list at https://github.com/beautify-web/js-beautify#css--html
  {
    tab_size: 2
  }
);

// run it if you want to dispose this plugin
dispose();
```

Browser

```html
<script src="https://unpkg.com/css-format-monaco/dist/css-format-monaco.min.js"></script>
<script>
  // NOTE: monaco-editor should be loaded first
  // see above esm example for details
  cssFormatMonaco(monaco);
</script>
```

# License

MIT

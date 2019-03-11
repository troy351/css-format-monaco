// Type definitions for js_beautify
// Project: https://github.com/beautify-web/js-beautify/
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>, Hans Windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface CSSBeautifyOptions {
  indent_size?: number
  indent_char?: string
  indent_with_tabs?: boolean
  eol?: string
  end_with_newline?: boolean
  selector_separator_newline?: boolean
  newline_between_rules?: boolean
}

declare var css_beautify: (
  js_source_text: string,
  options?: CSSBeautifyOptions,
) => string

declare module 'js-beautify/js/src/css' {
  export = css_beautify
}

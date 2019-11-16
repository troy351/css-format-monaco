import * as Monaco from "monaco-editor";

import "./types/css-beautify";

/**
 * formatter for css/scss/less
 * @param monaco monaco self, if not provided, will use window.monaco
 * @param tabSize tab size, default is 2
 */
export default function cssFormatMonaco(
  monaco?: typeof Monaco,
  option?: Parameters<typeof css_beautify>[1]
): () => void;

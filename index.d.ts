import * as Monaco from "monaco-editor";

/**
 * formatter for css/scss/less
 * @param monaco monaco self, if not provided, will use window.monaco
 * @param tabSize tab size, default is 2
 */
export default function cssFormatMonaco(
  monaco?: typeof Monaco,
  tabSize?: number
): () => void;

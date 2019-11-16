// import inside js to reduce bundle size
import css_beautify from "js-beautify/js/src/css";

import * as Monaco from "monaco-editor";

declare global {
  interface Window {
    monaco?: typeof Monaco;
  }
}

export default function cssFormatter(monaco = window.monaco, beautyOption = {}) {
  if (!monaco) {
    console.error(
      "css-format-monaco: 'monaco' should be either declared on window or passed as first parameter"
    );
    return;
  }

  const documentProvider = {
    provideDocumentFormattingEdits: (model: Monaco.editor.ITextModel) => {
      const lineCount = model.getLineCount();

      return [
        {
          range: new monaco.Range(
            1,
            1,
            lineCount,
            model.getLineMaxColumn(lineCount) + 1
          ),
          text: css_beautify(model.getValue(), beautyOption)
        }
      ];
    }
  };

  const rangeProvider = {
    provideDocumentRangeFormattingEdits: (
      model: Monaco.editor.ITextModel,
      range: Monaco.Range
    ) => {
      const fullLineRange = new monaco.Range(
        range.startLineNumber,
        1,
        range.endLineNumber,
        model.getLineMaxColumn(range.endLineNumber) + 1
      );

      const code = model.getValueInRange(fullLineRange);

      return [
        {
          range: fullLineRange,
          text: css_beautify(code, beautyOption)
        }
      ];
    }
  };

  const disposeArr = ["css", "less", "scss"].map(language => {
    return [
      monaco.languages.registerDocumentFormattingEditProvider(
        language,
        documentProvider
      ),
      monaco.languages.registerDocumentRangeFormattingEditProvider(
        language,
        rangeProvider
      )
    ];
  });

  return () => {
    disposeArr.forEach(arr => arr.forEach(disposable => disposable.dispose()));
  };
}

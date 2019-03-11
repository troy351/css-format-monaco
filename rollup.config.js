import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/css-format-monaco.common.js",
        format: "cjs",
        exports: "named"
      },
      {
        file: "dist/css-format-monaco.esm.js",
        format: "esm",
        exports: "named"
      },
      {
        file: "dist/css-format-monaco.js",
        name: "cssFormatMonaco",
        format: "iife"
      }
    ],
    watch: {
      exclude: "node_modules/**"
    },
    plugins: [
      commonjs(),
      resolve(),
      typescript(),
      {
        name: "json",
        transform(code, id) {
          return id.slice(-5) === ".json" ? `export default ${code}` : null;
        }
      }
    ],
    external: ["monaco-editor"]
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/css-format-monaco.common.min.js",
        format: "cjs",
        exports: "named"
      },
      {
        file: "dist/css-format-monaco.esm.min.js",
        format: "esm",
        exports: "named"
      },
      {
        file: "dist/css-format-monaco.min.js",
        name: "cssFormatMonaco",
        format: "iife"
      }
    ],
    watch: {
      exclude: "node_modules/**"
    },
    plugins: [commonjs(), resolve(), typescript(), terser()],
    external: ["monaco-editor"]
  }
];

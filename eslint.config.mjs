import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

/** @type {import("eslint").Linter.Config} */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react,
      import: importPlugin,
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        "babel-plugin-root-import": {
          rootPathPrefix: "~",
          rootPathSuffix: "src",
        },
      },
    },
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-wrap-multilines": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-array-index-key": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "no-use-before-define": "off",
      "arrow-body-style": "off",
      "object-curly-newline": "off",
      "operator-linebreak": "off",
      "no-param-reassign": "off",
      "import/prefer-default-export": "off",
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-duplicates": "off",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "max-len": ["warn", { code: 100, ignoreUrls: true }],
    },
  },
  {
    files: ["*.config.js"],
    languageOptions: {
      globals: {
        module: true,
        require: true,
        process: true,
        __dirname: true,
      },
    },
  },
];

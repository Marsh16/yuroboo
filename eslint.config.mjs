import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import globals from "globals";

export default defineConfig([
  ...next(), // Next.js recommended rules

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "no-debugger": "off",
    },
  },
]);

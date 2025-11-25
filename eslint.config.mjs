import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["airbnb-base", "js/recommended"],
    languageOptions: { ...globals.node },
    rules: {
      "no-unused-vars": ["warn"],
      "no-async-promise-executor": "error",
    },
  },
]);

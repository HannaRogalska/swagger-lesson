module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
  },

  extends: ["airbnb-base"],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },

  rules: {
    "no-console": "off",
    "no-underscore-dangle": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": "off",
    "no-async-promise-executor": "off",
  },
};

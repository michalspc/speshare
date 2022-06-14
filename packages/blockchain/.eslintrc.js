module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
    "truffle/globals": true, // same as "truffle/truffle": true
  },
  plugins: ["@typescript-eslint", "truffle"],
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "plugin:node/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};

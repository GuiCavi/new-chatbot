module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  rules: {
    "max-len": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          caseInsensitive: false,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },
};

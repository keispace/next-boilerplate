module.exports = {
  "$schema": "https://json.schemastore.org/eslintrc",
  "root": true,
  "extends": [
    "next/core-web-vitals",
    "prettier",
  ],
  "rules": {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "warn",
    'spaced-comment': 'error',
    'no-console': 'warn',
    'no-eval': 'error',
    'no-new': 'error',
    'no-octal': 'error',
    'no-ternary': 'off',
    'curly': 'error',
    'no-plusplus': ['error', { "allowForLoopAfterthoughts": true }],
    'no-bitwise': 'warn',
    'no-else-return': ["error", { allowElseIf: false }],
  },
  "settings": {
  }
}
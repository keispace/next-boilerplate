module.exports = {
  "$schema": "https://json.schemastore.org/eslintrc",
  "root": true,
  "extends": [
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended"
  ],
  "plugins": ["tailwindcss"],
  "rules": {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
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

    "tailwindcss/no-custom-classname": "off"
  },
  "settings": {
    "tailwindcss": {
      "callees": ["cn"]
    }
  }
}
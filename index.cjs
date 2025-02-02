/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'all',
  tabWidth: 2,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-organize-imports'],
} 
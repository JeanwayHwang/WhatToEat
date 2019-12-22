module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'rules': {
    'no-console': ['off'],
    'comma-dangle': ['off'],
    'no-empty': ['off'],
    'space-before-function-paren': ['off'],
    'arrow-parens': ['error', 'as-needed'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': ['error', 4, { "SwitchCase": 1 }],
    'max-len': ['warn', 180],
    "semi": ['off'],
    'no-unused-vars': ['error'],
    "operator-linebreak": ["error", "before"],
    "camelcase": ['off'],
    "keyword-spacing": ["error", { "after": true }],
    'prefer-const': ['warn'],
    'brace-style': ['error', 'stroustrup']
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  }
}

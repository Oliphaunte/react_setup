module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'jest': true
  },
  'extends': [
    'eslint:recommended'
  ],
  parserOptions: {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'impliedStrict': true,
      'jsx': true
    }
  },
  'plugins': ['react', 'jest'],
  'rules': {
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'require-atomic-updates': 2,
    'array-callback-return': 2,
    'yoda': ['error', 'never'],
    // Jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    // React
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}
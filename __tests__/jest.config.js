module.exports = {
  verbose: true,
  testRegex: '\\.test\\.js',
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)$': './custom-transformer.js'
  }
}
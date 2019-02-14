const babelJest = require('babel-jest')
const babelConfig = require('../config/babel/babel.config.js')

module.exports = babelJest.createTransformer(babelConfig())

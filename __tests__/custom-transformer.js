const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/react',
  ],
  plugins: [
    [ '@babel/plugin-transform-runtime' ],
    [ '@babel/plugin-proposal-object-rest-spread' ],
    [ '@babel/plugin-proposal-class-properties' ],
    [ 'babel-plugin-root-import', { 'rootPathPrefix': '~'} ]
  ],
  sourceMaps: 'inline',
};

module.exports = require('babel-jest').createTransformer(config);

// const babelJest = require('babel-jest')
// const babelConfig = require('../config/babel/babel.config.js')

// module.exports = babelJest.createTransformer(babelConfig)
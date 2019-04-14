module.exports = function(api) {
  const env = [process.env.BABEL_ENV || process.env.NODE_ENV]
  const
    presetEnvOptions = {
      'useBuiltIns': 'entry',
      "corejs": "2",
      'targets': {
        'browsers': ['last 2 versions']
      }
    };

  const 
    config = {
      presets: [
        ['@babel/preset-env', presetEnvOptions],
        ['@babel/preset-react'],
        ['@babel/preset-flow'],      
      ],
      plugins: [
        ['@babel/plugin-transform-runtime'],
        ['@babel/plugin-proposal-object-rest-spread'],
        ['@babel/plugin-proposal-class-properties'],
        ['babel-plugin-root-import', { 'rootPathPrefix': '~' }]
      ]
  }

  if (env === 'development') {
    presetEnvOptions['modules'] = false
  }

  if (env === 'production') {}

  // Cache babel plugin/preset functions
  api ? api.cache(true) : null

  return config
}

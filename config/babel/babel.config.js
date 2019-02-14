module.exports = function(api) {
  const env = [process.env.BABEL_ENV || process.env.NODE_ENV]
  const
    presetEnvOptions = {
      'useBuiltIns': 'entry',
      'targets': {
        'browsers': ['last 2 versions']
      }
    };

  const
    presets = [
      require('@babel/preset-react'),
      require('@babel/preset-flow'),
      require('@babel/preset-env', presetEnvOptions)
    ],
    plugins = [
      require('@babel/plugin-transform-runtime'),
      require('@babel/plugin-proposal-object-rest-spread'),
      require('@babel/plugin-proposal-class-properties')
    ];

  if (env === 'development') {
    presetEnvOptions['modules'] = false
  }

  if (env === 'production') {}

  // Cache babel plugin/preset functions
  // api.cache(true)

  return {
    presets, 
    plugins
  }
}
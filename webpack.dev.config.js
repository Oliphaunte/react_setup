const 
  path          = require('path'),
  webpack       = require('webpack'),
  merge         = require('webpack-merge'),

  GlobImporter  = require('node-sass-glob-importer'),
  
  BASE_CONFIG   = require('./webpack.base.config');

const options = {
  disableImportOnce: true
}

// Plugins //
const webpackEnv = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.ENV_DEV),
    'PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL_DEV)
  }
});

// Rules //
const
  sassRules = { 
    loader: 'sass-loader',
    options: { 
      importer: GlobImporter(options)
    }
  },
  postcssRules = { 
  loader: 'postcss-loader',
    options: {
      config: {
        path: './app/assets/css/postcss.config.js'
      }
    }
  },
  cssRules = { 
    test: /\.scss$/, 
    use: [
      'style-loader',
      'css-loader', 
      postcssRules,
      sassRules
    ],
  };

module.exports = merge(BASE_CONFIG, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 8000,
    progress: true,
    hot: true,
    // proxy: [{
    //   context: [''],
    //   target: 'http://localhost:3232',
    //   changeOrigin: true,
    //   secure: false,
    // }]
  },
  module: {
    rules: [
      cssRules,
    ],
  },
  plugins: [
    webpackEnv,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
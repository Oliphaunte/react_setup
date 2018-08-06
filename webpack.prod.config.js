const MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      UglifyJsPlugin = require ('uglifyjs-webpack-plugin');

const merge         = require('webpack-merge'),
      path          = require('path'),
      webpack       = require('webpack');

const MagicImporter  = require('node-sass-glob-importer');

const BASE_CONFIG   = require('./webpack.base.config');

// Plugins //
const webpackEnv = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.ENV_PROD),
    'PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL_PROD)
  }
});
const uglifyJsPluginConfig = new UglifyJsPlugin({
  sourceMap: true,
  parallel: true
});
const extractCSS = new MiniCssExtractPlugin({
  filename: 'index.bundle.css',
});

// Rules //
const sassRules = { 
  loader: 'sass-loader',
  options: { 
    importer: MagicImporter()
  }
};
const postcssRules = { 
  loader: 'postcss-loader',
  options: {
    config: {
      path: './app/assets/css/postcss.config.js'
    }
  }
};
const cssRules = { 
  test: /\.scss$/, 
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    postcssRules,
    sassRules
  ]
};

module.exports = merge(BASE_CONFIG, {
  module: {
    rules: [
      cssRules
    ]
  },
  optimization: {
    minimizer: [
      uglifyJsPluginConfig  
    ]
  },
  plugins: [
    extractCSS,
    webpackEnv,
    new webpack.optimize.OccurrenceOrderPlugin(true),
  ]
});
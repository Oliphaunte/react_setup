const 
  MiniCssExtractPlugin  = require('mini-css-extract-plugin'),
  UglifyJsPlugin        = require ('uglifyjs-webpack-plugin'),
  Merge                 = require('webpack-merge'),
  Webpack               = require('webpack'),
  GlobImporter          = require('node-sass-glob-importer'),
  WorkboxPlugin         = require('workbox-webpack-plugin'),
  BASE_CONFIG           = require('./base.config')

// Plugins //
const 
  webpackEnv = new Webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.ENV_PROD),
      'PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL_PROD)
    }
  }),
  hashedModules = new Webpack.HashedModuleIdsPlugin({
    hashFunction: 'sha256',
    hashDigest: 'hex',
    hashDigestLength: 20
  }),
  uglifyJsPluginConfig = new UglifyJsPlugin({
    sourceMap: true,
    parallel: true
  }),
  extractCSS = new MiniCssExtractPlugin({
    filename: 'index.bundle.css',
  }),
  workbox =  new WorkboxPlugin.GenerateSW({
    swDest: 'service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
  })

// Rules //
const 
  sassRules = { 
    loader: 'sass-loader',
    options: { 
      importer: GlobImporter()
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
      MiniCssExtractPlugin.loader,
      'css-loader',
      postcssRules,
      sassRules
    ]
  }

module.exports = Merge(BASE_CONFIG, {
  module: {
    rules: [
      cssRules
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
    minimizer: [
      uglifyJsPluginConfig  
    ]
  },
  plugins: [
    extractCSS,
    hashedModules,
    webpackEnv,
    workbox,
    new Webpack.optimize.OccurrenceOrderPlugin(true),
  ]
})

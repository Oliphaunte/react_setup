
const 
  Path          = require('path'),
  Webpack       = require('webpack'),
  Merge         = require('webpack-merge'),
  GlobImporter  = require('node-sass-glob-importer'),
  BASE_CONFIG   = require('./base.config');

const options = {
  disableImportOnce: true
}

// Plugins //
const webpackEnv = new Webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.ENV_DEV),
    'PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL_DEV)
  }
});

// Loaders
const
  cssLoader = {
    loader: 'css-loader',
    options: {
      importLoaders: 2
    }
  },
  sassLoader = { 
    loader: 'sass-loader',
    options: { 
      importer: GlobImporter(options)
    }
  },
  postcssLoader = { 
  loader: 'postcss-loader',
    options: {
      config: {
        path: './app/assets/css/postcss.config.js'
      }
    }
  };
// Rules //
const
  cssRules = { 
    test: /\.scss$/, 
    use: [
      'style-loader',
      cssLoader, 
      postcssLoader,
      sassLoader
    ],
  };

module.exports = Merge(BASE_CONFIG, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: Path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 8001,
    progress: true,
    hot: true,
    // Activate if using a proxy, obviously
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
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
  ],
});
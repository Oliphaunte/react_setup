require('dotenv').config()

const
  HtmlWebpackPlugin   = require('html-webpack-plugin'),
  path                = require('path'),
  webpack             = require('webpack');

// Plugins //
const extractHtml = new HtmlWebpackPlugin({
  template: 'app/index.html',
  filename: 'index.html',
});

// Rules //
const 
  jsRules = {
    test: /\.(js|jsx)$/,
    use: 'babel-loader?cacheDirectory',
    exclude: /node_modules/
  },
  fontRules = {
    test: /\.(svg|otf|eot|ttf|woff)$/,
    loader: 'file-loader',
    options: {
      name: '[name]-[hash:16].[ext]',
      publicPath: './assets/fonts',
      outputPath: './assets/fonts'
    }
  },
  imageRules = {
    test: /\.(png|jpg|gif)$/,
    loader: 'file-loader',
    options: {
      name: '[name]-[hash:16].[ext]',
      publicPath: './assets/images',
      outputPath: './assets/images'
    }
  };

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      jsRules,
      fontRules,
      imageRules,
    ]
  },
  plugins: [
    extractHtml,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { '@': path.join(__dirname) }
  },
};


require('dotenv').config()

const
  HtmlWebpackPlugin   = require('html-webpack-plugin'),
  CopyWebpackPlugin   = require('copy-webpack-plugin'),
  Path                = require('path')

// Plugins //
const 
  extractHtml = new HtmlWebpackPlugin({
    template: 'app/index.html',
    filename: 'index.html',
  }),
  copyWebpack = new CopyWebpackPlugin([
    { from: 'app/manifest.json', to: './'}
  ])

// Rules //
const 
  jsRules = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      cacheDirectory: true,
      configFile: './config/babel/babel.config.js'
    }
  },
  svgRules = {
    test: /\.svg$/,
    loader: 'babel-loader!svg-react-loader'
  }
  imageRules = {
    test: /\.(png|jpg|gif)$/,
    loader: 'file-loader',
    options: {
      name: '[name]-[hash:16].[ext]',
      publicPath: './assets/images',
      outputPath: './assets/images'
    }
  }

module.exports = {
  entry: [
    './app/index.js', 
    './app/assets/css/app.scss'
  ],
  output: {
    filename: 'index.bundle.js',
    chunkFilename: '[name].bundle.js',
    path: Path.join(process.cwd(), process.env.BUILD_PATH),
    publicPath: '/',
    // For chunking hot-reloading files
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      jsRules,
      imageRules,
      svgRules,
    ]
  },
  plugins: [
    extractHtml,
    copyWebpack
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { '~': Path.join(__dirname) }
  },
}

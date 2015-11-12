var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app',
  output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Typedown',
      hash: true,
      inject: 'body',
      template: 'app/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'resolve-url', 'sass']
      }, {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.svg$/,
        loader: 'url-loader'
      }, {
        test: /\.md$/,
        loader: 'raw'
      }
    ]
  }
};

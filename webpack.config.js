const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    App: path.resolve(__dirname, './src/js/app.js')
  },
  output: {
    path: path.resolve(__dirname, './dist/js/'),
    filename: './app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    /* Use the ProvidePlugin constructor to inject jquery implicit globals */
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': "jquery'",
      'window.$': 'jquery'
    })
  ],
  mode: 'production'
};

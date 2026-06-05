const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  entry: {
    admin: path.join(__dirname, 'src', 'js', 'cms.js')
  },

  output: {
    path: path.join(__dirname, 'site', 'static', 'admin'),
    filename: '[name].[contenthash:5].js',
    publicPath: '/admin/'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/cms.html',
      inject: 'body'
    })
  ]
});

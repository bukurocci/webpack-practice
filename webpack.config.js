
var path = require('path');
var webpack = require('webpack');
var saveLicense = require('uglify-save-license');

module.exports = {

  //エントリポイントのJavaScript
  entry: {
    bundle: './app/entry.js'
  },

  output: {
    //出力先のフォルダ
    path: path.resolve(__dirname, 'build'),
    //出力先のファイル名
    filename: '[name].js'
  },

  plugins: [
    //JavaScriptを圧縮する
    new webpack.optimize.UglifyJsPlugin({
      //source mapを出力する
      sourceMap: true,
      //License文のコメントは残す
      comments: saveLicense
    })
  ],

  //出力するsource mapのスタイル
  devtool: '#source-map',


  module: {
    rules: [

      { //babel用の設定
        test: /\.js$/,
        exclude: /node_modules/, //node_modules以下は対象から外す
        loader: 'babel-loader'
      }
    ]
  }
};

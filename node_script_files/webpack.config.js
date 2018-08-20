/**
 * @file webpack設定ファイル
 *
 */

const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = require('./setting.config');
const eslintrc = path.join(__dirname, '.eslintrc');


const webpackConfig = [

  {
    mode: process.env.NODE_ENV,
    devtool: 'inline-source-map',

    // 読み込み元
    entry: {
      common: `${config.devDir}/scripts/develop/common/common.jsx`
    },

    // 吐き出し先
    output: { 
      path: `${config.devDir}/scripts/`,
      filename: '[name].bundle.js'
    },

    module: {
      rules: [
        // jsの設定
        {
          // eslint
          enforce: 'pre', // babelが走る前にlintする
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            configFile: eslintrc
          }
        },
        {
          test: /\.(js|jsx)$/,
          use: [
            {
              // Babel
              loader: 'babel-loader',
              options: {
                presets: [
                  // env : ES2017 → ES5
                  ['env', {'modules': false}],
                  'react'
                ]
              }
            }
          ],
          // node_modules は除外
          exclude: /node_modules/,
        }
      ]
    },

    resolve: { // 下記の拡張子のentryからimportされているファイルをくっつける
      extensions: ['.js', '.jsx']
    },

    optimization: { // ライブラリを別ファイルでまとめる
      splitChunks: {
        name: 'vendor',
        chunks: 'initial'
      }
    }

  }
];


// 終了処理
process.on('SIGINT', () => {
  process.exit(0);
});

module.exports = webpackConfig;

/**
 * @file CSS 設定ファイル
 *
 */

const cssnext = require("postcss-cssnext")
const postcssNested = require('postcss-nested');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const postcssEasyImport = require('postcss-easy-import');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssMixins = require('postcss-mixins');
const postcssReporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const postcssCalc = require('postcss-calc');
const postcssHexRgba = require('postcss-hexrgba');

const chalk = require('chalk');
const config = require('./setting.config');

// プレフィックス
const prefixSetting = [
  'last 2 versions',
  '> 2%'
];

// 使用プラグイン
const initPlugin = [

  postcssEasyImport({
    extensions: ['.scss']
  }),
  postcssCalc(),
  postcssSimpleVars(),
  postcssHexRgba(),
  postcssMixins({ silent: true }),
  postcssNested(),
  autoprefixer({
    browsers: prefixSetting
  })

];

// 本番時間圧縮する
if (!config.envFlg) {
  initPlugin.push(cssnano());
}

// 実行時のメッセージ
console.log(chalk.blue.bold('scss -> compile finish'));

// // 終了処理
// process.on('SIGINT', () => {
//   process.exit(0);
// });

// 実行
module.exports = {
  syntax: 'postcss-scss',
  map: config.envFlg, // 開発時のみ
  plugins: initPlugin
};

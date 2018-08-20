/**
 * @file パス情報など 設定
 *
 * @author Chamado
 */

const path = require('path');

const APP_PATH = path.resolve(__dirname, path.join(__dirname, '../app')); // 開発用

const HTML_PATH = path.join(APP_PATH, 'views');
const CSS_PATH = path.join(APP_PATH, 'styles');
const JS_PATH = path.join(APP_PATH, 'scripts');
const IMG_PATH = path.join(APP_PATH, 'images');
const REC_PATH = path.join(APP_PATH, 'record');

module.exports = {
  APP_PATH,
  HTML_PATH,
  CSS_PATH,
  JS_PATH,
  IMG_PATH,
  REC_PATH
};

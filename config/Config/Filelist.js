/**
 * @file 各種ファイルの一覧を取得する
 *
 * @author Chamado
 */

const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

const Config = require('./Config');

const html = glob.sync(`${Config.HTML_PATH}/*.pug`);
const css = glob.sync(`${Config.CSS_PATH}/*.css`);
const js = glob.sync(`${Config.JS_PATH}/*.js`);
const images = glob.sync(`${Config.IMG_PATH}/*`);
const record = glob.sync(`${Config.REC_PATH}/*`);

const HTML_LIST = [];
const CSS_LIST = [];
const JS_LIST = [];
const IMG_LIST = [];
const REC_LIST = [];

HTML_LIST.push('index');

for (data of html) {
  HTML_LIST.push(data.replace(`${Config.HTML_PATH}/`, '').replace('.pug', ''));
}

for (data of css) {
  CSS_LIST.push(data.replace(`${Config.APP_PATH}/`, ''));
}

for (data of js) {
  JS_LIST.push(data.replace(`${Config.APP_PATH}/`, ''));
}

for (data of images) {
  IMG_LIST.push(data.replace(`${Config.APP_PATH}/`, ''));
}

for (data of record) {
  REC_LIST.push(data.replace(`${Config.APP_PATH}/`, ''));
}

module.exports = {
  HTML_LIST,
  CSS_LIST,
  JS_LIST,
  IMG_LIST,
  REC_LIST
};

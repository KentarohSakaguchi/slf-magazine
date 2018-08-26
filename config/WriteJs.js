/**
 * @file WriteJs
 *
 * @author Chamado
 */

const fs = require('fs-extra');

const Config = require('./Config');
const Filelist = require('./Filelist');

/**
 * responce javascript
 * @param {String} rmFrontPath
 * @returns {Array}
 */
const WriteJs = (rmFrontPath) => {

  const fileIndex = Filelist.JS_LIST.indexOf(rmFrontPath);
  const script_js = fs.readFileSync(`${Config.APP_PATH}/${Filelist.JS_LIST[fileIndex]}`, 'utf8');
  const returnArray = ['text/javascript', script_js];
  return returnArray;
};

module.exports = {
  WriteJs
};

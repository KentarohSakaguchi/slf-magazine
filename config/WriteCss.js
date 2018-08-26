/**
 * @file WriteCss
 *
 * @author Chamado
 */

const fs = require('fs-extra');

const Config = require('./Config');
const Filelist = require('./Filelist');

/**
 * responce css
 * @param {String} rmFrontPath
 * @returns {Array}
 */
const WriteCss = (rmFrontPath) => {

  const fileIndex = Filelist.CSS_LIST.indexOf(rmFrontPath);
  const style_css = fs.readFileSync(`${Config.APP_PATH}/${Filelist.CSS_LIST[fileIndex]}`, 'utf8');
  const returnArray = ['text/css', style_css];
  return returnArray;
};

module.exports = {
  WriteCss
};

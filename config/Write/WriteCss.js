/**
 * @file WriteCss
 *
 * @author Chamado
 */

const fs = require('fs-extra');

const Config = require('../Config/Config');
const Filelist = require('../Config/Filelist');

/**
 * responce css
 * @param {Object} res
 * @param {Object} url_parse
 * @returns {Array}
 */
const WriteCss = (res, url_parse) => {

  const fileName = url_parse.pathname.replace('/', ''); // パス情報の先頭の'/'を除去

  const fileIndex = Filelist.CSS_LIST.indexOf(fileName);
  const style_css = fs.readFileSync(`${Config.APP_PATH}/${Filelist.CSS_LIST[fileIndex]}`, 'utf8');

  res.writeHead(200, { 'Content-Type': 'text/css' });
  res.write(style_css);
  res.end();
};

module.exports = {
  WriteCss
};

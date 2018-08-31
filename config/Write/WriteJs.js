/**
 * @file WriteJs
 *
 * @author Chamado
 */

const fs = require('fs-extra');

const Config = require('../Config/Config');
const Filelist = require('../Config/Filelist');

/**
 * responce javascript
 * @param {Object} res
 * @param {Object} url_parse
 * @returns {Array}
 */
const WriteJs = (res, url_parse) => {

  const fileName = url_parse.pathname.replace('/', ''); // パス情報の先頭の'/'を除去

  const fileIndex = Filelist.JS_LIST.indexOf(fileName);
  const script_js = fs.readFileSync(`${Config.APP_PATH}/${Filelist.JS_LIST[fileIndex]}`, 'utf8');

  res.writeHead(200, { 'Content-Type': 'text/javascript' });
  res.write(script_js);
  res.end();
};

module.exports = {
  WriteJs
};

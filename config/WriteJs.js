/**
 * @file WriteJs
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const url = require('url');

const Config = require('./Config');
const Filelist = require('./Filelist');

/**
 * responce javascript
 * @param {String} rmFrontPath
 * @returns {Array}
 */
const WriteJs = (req, res) => {

  const url_parts = url.parse(req.url, true); // url情報取得
  const url_path = url_parts.pathname;
  const rmFrontPath = url_path.replace('/', ''); // パス情報の先頭の'/'を除去

  const fileIndex = Filelist.JS_LIST.indexOf(rmFrontPath);
  const script_js = fs.readFileSync(`${Config.APP_PATH}/${Filelist.JS_LIST[fileIndex]}`, 'utf8');

  res.writeHead(200, { 'Content-Type': 'text/javascript' });
  res.write(script_js);
  res.end();
};

module.exports = {
  WriteJs
};

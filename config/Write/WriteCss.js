/**
 * @file WriteCss
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const url = require('url');

const Config = require('../Config');
const Filelist = require('../Filelist');

/**
 * responce css
 * @param {String} rmFrontPath
 * @returns {Array}
 */
const WriteCss = (req, res) => {

  const url_parts = url.parse(req.url, true); // url情報取得
  const url_path = url_parts.pathname;
  const rmFrontPath = url_path.replace('/', ''); // パス情報の先頭の'/'を除去

  const fileIndex = Filelist.CSS_LIST.indexOf(rmFrontPath);
  const style_css = fs.readFileSync(`${Config.APP_PATH}/${Filelist.CSS_LIST[fileIndex]}`, 'utf8');

  res.writeHead(200, { 'Content-Type': 'text/css' });
  res.write(style_css);
  res.end();
};

module.exports = {
  WriteCss
};

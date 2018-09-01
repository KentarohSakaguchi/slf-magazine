/**
 * @file Ajax 設定ファイル
 *
 * @author Chamado
 */

const fs = require('fs-extra');


/**
 * responce css
 * @param {Object} res
 * @param {Object} url_parse
 * @param {Number} jsonlist jsonfileのlength
 * @returns {Array}
 */
const Ajax = (res, url_parse, jsonlist) => {

  const jsonData = fs.readFileSync(`${__dirname.replace('config/Ajax', '')}/app/record/${url_parse.query[0]}.json`);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(jsonData);
  res.end();
};

module.exports = {
  Ajax
};
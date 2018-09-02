/**
 * @file Ajax 設定ファイル
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const qs = require('querystring');

/**
 * responce css
 * @param {Object} res
 * @param {Object} url_parse
 * @param {Number} jsonlist jsonfileのlength
 * @returns {Array}
 */
const Ajax = (res, url_parse, jsonlist) => {

  const jsonData = fs.readFileSync(`${__dirname.replace('config/Ajax', '')}/app/record/${url_parse.query[0]}.json`); // jsonを読む

  // apiとして返却するlist
  let resultData = {
    length: jsonlist, // 記事jsonのlengthを返す
    json: {}
  };

  // 読み込んだjasonを一旦jsオブジェクトにparse
  let readJasonCunk = '';
  readJasonCunk += jsonData;
  resultData.json = JSON.parse(readJasonCunk);

  // resultDataをjsonにパースしてapiを返却する
  const resultJson = JSON.stringify(resultData);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(resultJson);
  res.end();
};

module.exports = {
  Ajax
};
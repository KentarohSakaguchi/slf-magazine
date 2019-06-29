/**
 * @file Ajax APIとして返却する
 * 01/19不使用
 * @author Chamado
 */

const fs = require('fs-extra');

/**
 * return ajax
 * @param {Object} res
 * @param {Object} url_parse
 * @param {Number} jsonlist jsonfileのlength
 * @returns {Array}
 */
const Ajax = (res, url_parse, jsonlist) => {

  const jsonData = fs.readFileSync(`${__dirname.replace('config/Ajax', '')}app/record/report/${url_parse.query[0]}.json`); // jsonを読む

  // apiとして返却するlist
  let resultData = {
    index: jsonlist, // 記事jsonのlengthを返す
    json: '',
    lang: '',
    title: '',
    time: ''
  };

  // 読み込んだjasonを一旦jsオブジェクトにparse
  let readJasonCunk = '';
  readJasonCunk += jsonData;
  resultData.json = JSON.parse(readJasonCunk);
  resultData.lang = resultData.json.lang;
  resultData.title = resultData.json.title;
  resultData.time = resultData.json.time;

  // resultDataをjsonにパースしてapiを返却する
  const resultJson = JSON.stringify(resultData);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(resultJson);
  res.end();
};

module.exports = {
  Ajax
};
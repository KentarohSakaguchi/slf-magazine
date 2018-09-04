/**
 * @file Data Jsonの中身を見てソートする
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const glob = require('glob');

const Config = require('../Config/Config');
const Filelist = require('../Config/Filelist');

/**
 * @param {Object} res
 * @param {Object} url_parse
 * @param {Number} jsonlist jsonfileのlength
 * @returns {Array}
 */
const Data = (res, url_parse) => {

  const jsonList = glob.sync(`${Config.REC_PATH}/report/*`);
  const setPath = url_parse.query[0].replace('report=', '');

  // apiとして返却するlist
  let dataList = {
    json: '',
    lang: '',
    title: '',
    time: '',
    length: 0
  };

  const resultArray = [];

  res.writeHead(200, { 'Content-Type': 'application/json' });

  // 記事で使用されている言語の洗い出し
  jsonList.forEach((value) => {

    const jsonData = fs.readFileSync(value);

    // 読み込んだjasonを一旦jsオブジェクトにparse
    let readJasonCunk = '';
    readJasonCunk += jsonData;
    dataList.json = JSON.parse(readJasonCunk);
    dataList.lang = dataList.json.lang;
    dataList.title = dataList.json.title;
    dataList.time = dataList.json.time;

    if (dataList.lang === setPath) {
      dataList.length++;
      resultArray.push(dataList);
    }

  });

  const resultJson = JSON.stringify(resultArray);
  res.write(resultJson);
  res.end();

};

module.exports = {
  Data
};
/**
 * @file Data Jsonの中身を見てソートする
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const glob = require('glob');

const Config = require('../Config/Config');

/**
 * @param {Object} res
 * @param {Object} url_parse
 * @param {String} pagenameをみて処理を分ける
 * @returns {Array}
 */
const Data = (res, url_parse, pagename) => {

  const jsonList = glob.sync(`${Config.REC_PATH}/report/*`);
  const setPath = url_parse.query[0].replace('report=', '');

  // apiとして返却するlist
  let dataList = {
    json: '',
    lang: '',
    title: '',
    time: '',
    id: 0,
    length: jsonList.length
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
    dataList.word = dataList.json.word;
    dataList.title = dataList.json.title;
    dataList.time = dataList.json.time;

    if (dataList.lang === setPath && pagename !== 'index') {

      const wraiteData = {
        json: dataList.json,
        lang: dataList.lang,
        word: dataList.word,
        title: dataList.json.title,
        time: dataList.json.time,
        id: dataList.id++,
        length: jsonList.length
      }

      resultArray.push(wraiteData);

    } else if (pagename === 'index') {

      // 全件取得
      const wraiteDataIndex = {
        json: dataList.json,
        lang: dataList.lang,
        word: dataList.word,
        title: dataList.json.title,
        time: dataList.json.time,
        id: dataList.id++,
        length: jsonList.length
      }

      resultArray.push(wraiteDataIndex);
    }

  });

  const resultJson = JSON.stringify(resultArray);
  res.write(resultJson);
  res.end();

};

module.exports = {
  Data
};
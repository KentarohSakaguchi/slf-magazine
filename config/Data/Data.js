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
    length: jsonList.length,
    delete: ''
  };

  const resultArray = [];

  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (pagename === 'onepage') {

    const reSetPath = setPath.replace('?id=', 'id-');
    const jsonListOnce = `${Config.REC_PATH}/report/${reSetPath}.json`;
    const jsonDataOnce = fs.readFileSync(jsonListOnce);
    let readJasonOnceCunk = '';
    readJasonOnceCunk += jsonDataOnce;
    dataList.json = JSON.parse(readJasonOnceCunk);
    dataList.id = setPath.replace('?id=', '');
    dataList.lang = dataList.json.lang;
    dataList.word = dataList.json.word;
    dataList.title = dataList.json.title;
    dataList.time = dataList.json.time;
    dataList.delete = dataList.json.delete;

    // 単体ページ取得
    const wraiteDataOnePage = {
      json: dataList.json,
      lang: dataList.lang,
      word: dataList.word,
      title: dataList.json.title,
      time: dataList.json.time,
      id: dataList.id,
      length: jsonList.length,
      delete: dataList.delete
    }

    resultArray.push(wraiteDataOnePage);
  }

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
    dataList.delete = dataList.json.delete;

    if (dataList.lang === setPath && pagename !== 'index') {

      const wraiteData = {
        json: dataList.json,
        lang: dataList.lang,
        word: dataList.word,
        title: dataList.json.title,
        time: dataList.json.time,
        id: dataList.id++,
        length: jsonList.length,
        delete: dataList.delete
      }

      if (wraiteData.delete === 'false' || wraiteData.delete === false) {
        resultArray.unshift(wraiteData);
      }

    } else if (pagename === 'index') {

      // 全件取得
      const wraiteDataIndex = {
        json: dataList.json,
        lang: dataList.lang,
        word: dataList.word,
        title: dataList.json.title,
        time: dataList.json.time,
        id: dataList.id++,
        length: jsonList.length,
        delete: dataList.delete
      }

      if (wraiteDataIndex.delete === 'false' || wraiteDataIndex.delete === false) {
        resultArray.unshift(wraiteDataIndex);
      }

    } else if (pagename === 'admin') {

      // 全件取得
      const wraiteDataAdmin = {
        json: dataList.json,
        lang: dataList.lang,
        word: dataList.word,
        title: dataList.json.title,
        time: dataList.json.time,
        id: dataList.id++,
        length: jsonList.length,
        delete: dataList.delete
      }

      resultArray.unshift(wraiteDataAdmin);
    }

  });

  const resultJson = JSON.stringify(resultArray);
  res.write(resultJson);
  res.end();

};

module.exports = {
  Data
};
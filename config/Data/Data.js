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
const Data = (url_parse) => {

  console.log('-------------data-------------');
  const jsonList = glob.sync(`${Config.REC_PATH}/report/*`);  

  // apiとして返却するlist
  let dataList = {
    json: {},
    lang: '',
    title: '',
    time: ''
  };

  const langSort = [];

  jsonList.forEach((value) => {

    const jsonData = fs.readFileSync(value);

    // 読み込んだjasonを一旦jsオブジェクトにparse
    let readJasonCunk = '';
    readJasonCunk += jsonData;
    dataList.json = JSON.parse(readJasonCunk);
    dataList.lang = dataList.json.lang;
    dataList.title = dataList.json.title;
    dataList.time = dataList.json.time;
    // console.log(dataList);
  });
};

module.exports = {
  Data
};
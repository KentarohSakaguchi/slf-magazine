/**
 * @file Save
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const glob = require('glob');
const Config = require('../Config/Config');

/**
 * jsonを
 * @param {Object} postJson postから生成されたjsonデータ
 */
const SaveJson = (postJson) => {

  // jasonfileの名前とする(id-${jsonlist}.json)
  let jsonlist = glob.sync(`${Config.REC_PATH}/report/*.json`).length; // 保存されているjsonの数を調べる → 記事の
  jsonlist++;

  if (jsonlist < 10) {
    jsonlist = String(`0${jsonlist}`);
  }

  // postJsonをjsonfileとして保存
  fs.writeFileSync(`${Config.REC_PATH}/report/id-${jsonlist}.json`, postJson, (err) => {
    if (err) {
      throw err;
    }
  });
};

module.exports = {
  SaveJson
};
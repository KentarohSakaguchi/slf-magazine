/**
 * @file Read
 *
 * @author Chamado
 */

const fs = require('fs-extra');

const Config = require('../Config/Config');

/**
 * Jsonを読み書きするファイル
 */
const Read = {

  /**
   * deleteのflgを切り替える
   * @param {Object} posteadValue postのデータ
   */
  deleteFlgChange: (posteadValue) => {

    let resultJson = '';

    Object.keys(posteadValue).forEach((value) => {

      if (posteadValue[value] === 'true') {
        return;
      }

      const readJson = fs.readFileSync(`${Config.REC_PATH}/report/${value}.json`, 'utf8');
      
      const readJsonData = JSON.parse(readJson);
      readJsonData.delete = "true";

      resultJson = JSON.stringify(readJsonData);
      fs.writeFileSync(`${Config.REC_PATH}/report/${value}.json`, resultJson, (err) => {
        if (err) {
          throw err;
        }
      });
    });
  }

}

module.exports = {
  Read
};

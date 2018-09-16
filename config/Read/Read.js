/**
 * @file Read
 *
 * @author Chamado
 */

const fs = require('fs-extra');

const Config = require('../Config/Config');
const Remove = require('../Remove/Remove');

/**
 * Jsonを読み書きするファイル
 * 呼び出し元 Post/DeletePost.js
 */
const Read = {

  /**
   * deleteのflgを切り替える
   * @param {Object} posteadValue postのデータ
   */
  deleteFlgChange: (posteadValue) => {

    let resultJson = '';

    Object.keys(posteadValue).forEach((value) => {

      if (posteadValue[value] === 'true' || posteadValue[value] === 'delete') {
        return;
      }

      const readJson = fs.readFileSync(`${Config.REC_PATH}/report/${value}.json`, 'utf8');
      
      const readJsonData = JSON.parse(readJson);

      if (posteadValue[value] === 'save') {
        readJsonData.delete = "true";
      } else if (posteadValue[value] === 'returnValue') {
        readJsonData.delete = "false";
      }
      

      resultJson = JSON.stringify(readJsonData);
      fs.writeFileSync(`${Config.REC_PATH}/report/${value}.json`, resultJson, (err) => {
        if (err) {
          throw err;
        }
      });
    });
  },

  /**
   * deleteのflgがdeleteのものはファイルを消去(完全削除)する
   * @param {Object} posteadValue postのデータ
   */
  fileRemove: (posteadValue) => {
    const changeValue = () => {

      return new Promise((resolve, reject) => {
        let resultJson = '';

        Object.keys(posteadValue).forEach((value, index) => {

          if (posteadValue[value] === 'false' || posteadValue[value] === 'true' || posteadValue[value] === 'save'  || posteadValue[value] === 'returnValue') {
            return;
          }

          const readJson = fs.readFileSync(`${Config.REC_PATH}/report/${value}.json`, 'utf8');
          
          const readJsonData = JSON.parse(readJson);
          readJsonData.delete = "delete";

          resultJson = JSON.stringify(readJsonData);
          console.log(index);
          fs.writeFileSync(`${Config.REC_PATH}/report/${value}.json`, resultJson, (err) => {
            if (err) {
              throw err;
            }
          });
          resolve();
        });

      });

    };

    changeValue().then(() => {
      Remove.Remove(); // 記事の完全削除
    });
  }

}

module.exports = {
  Read
};

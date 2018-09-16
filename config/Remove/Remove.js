/**
 * @file Remove
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const glob = require('glob');
const chalk = require('chalk');
const Config = require('../Config/Config');

/**
 * Jsonのdeleteが'delete'の場合はファイルを削除する
 * 呼び出し元 Read/Read.js
 */
const Remove = () => {

  const removeFn = () => {

    return new Promise((resolve, reject) => {

      const jsonList = glob.sync(`${Config.REC_PATH}/report/*`);

      jsonList.forEach((value, index) => {

        const jsonData = fs.readFileSync(value);
        let readJasonCunk = '';
        readJasonCunk += jsonData;
        readJasonCunk = JSON.parse(readJasonCunk);
        console.log(readJasonCunk);

        if (readJasonCunk.delete === 'delete') {

          fs.unlink(value, () => {

            console.log(chalk.red.bold(`delete * ${value} file remove!!`));
            resolve();
          });
        }
      });
    });
  };

  removeFn().then(() => {
    // rename
    const reJsonList = glob.sync(`${Config.REC_PATH}/report/*`);
    reJsonList.forEach((value, index) => {

      let idName = index + 1;
      if (idName < 10) {
        idName = `0${String(idName)}`;
      }

      const reName = value.replace(/id-(.*?)\.json/g, `id-${idName}.json`);
      fs.rename(value, reName);

    });
  });

};


module.exports = {
  Remove
};

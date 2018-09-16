/**
 * @file Remove
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const glob = require('glob');
const addDays = require('date-fns/add_days');
const isBefore = require('date-fns/is_before')
const chalk = require('chalk');
const Config = require('../Config/Config');

const flgDay = addDays(new Date(), -15); // 15日前を算出

/**
 * Jsonのdeleteが本日から15日以上経っていたらJsonを削除する
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

        const dayCheck = isBefore(readJasonCunk.time, flgDay);

        if (readJasonCunk.delete === 'true' && dayCheck) {

          fs.unlink(value, () => {

            if (jsonList.length === index + 1) {
              console.log(chalk.red.bold(`delete 15day ago ${value} file remove!!`));
              resolve();
            }
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

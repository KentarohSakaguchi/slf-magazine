/**
 * @file WriteJson
 *
 * @author Chamado
 */

const fs = require('fs-extra');

const Config = require('./Config');
const Filelist = require('./Filelist');

/**
 * responce image
 * @param {String} rmFrontPath
 * @returns {Array}
 */
const WriteJson = (rmFrontPath) => {

  const fileIndex = Filelist.REC_LIST.indexOf(rmFrontPath);
  const rec_file = fs.readFileSync(`${Config.APP_PATH}/${Filelist.REC_LIST[fileIndex]}`);

  if (Filelist.REC_LIST[fileIndex].indexOf('.json') >= 0) {
    contentType = 'application/json';
  } else if (Filelist.REC_LIST[fileIndex].indexOf('.csv') >= 0) {
    contentType = 'text/csv';
  }

  const returnArray = [contentType, rec_file];
  return returnArray;
};

module.exports = {
  WriteJson
};

/**
 * @file WriteJson
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const url = require('url');

const Config = require('../Config/Config');
const Filelist = require('../Config/Filelist');

/**
 * responce image
 * @param {Object} res
 * @param {Object} url_parse
 * @returns {Array}
 */
const WriteJson = (res, url_parse) => {

  const fileName = url_parse.pathname.replace('/', '');

  const fileIndex = Filelist.REC_LIST.indexOf(fileName);
  const rec_file = fs.readFileSync(`${Config.APP_PATH}/${Filelist.REC_LIST[fileIndex]}`);

  if (Filelist.REC_LIST[fileIndex].indexOf('.json') >= 0) {
    contentType = 'application/json';
  } else if (Filelist.REC_LIST[fileIndex].indexOf('.csv') >= 0) {
    contentType = 'text/csv';
  }

  res.writeHead(200, { 'Content-Type': contentType });
  res.write(rec_file);
  res.end();
};

module.exports = {
  WriteJson
};

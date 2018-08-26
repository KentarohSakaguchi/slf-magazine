/**
 * @file WriteJson
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const url = require('url');

const Config = require('./Config');
const Filelist = require('./Filelist');

/**
 * responce image
 * @param {String} rmFrontPath
 * @returns {Array}
 */
const WriteJson = (req, res) => {

  const url_parts = url.parse(req.url, true); // url情報取得
  const url_path = url_parts.pathname;
  const rmFrontPath = url_path.replace('/', ''); // パス情報の先頭の'/'を除去

  const fileIndex = Filelist.REC_LIST.indexOf(rmFrontPath);
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

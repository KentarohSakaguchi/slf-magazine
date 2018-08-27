/**
 * @file WriteImage
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const url = require('url');

const Config = require('../Config');
const Filelist = require('../Filelist');

/**
 * responce image
 * @param {String} rmFrontPath
 * @returns {Array}
 */
const WriteImage = (req, res) => {

  const url_parts = url.parse(req.url, true); // url情報取得
  const url_path = url_parts.pathname;
  const rmFrontPath = url_path.replace('/', ''); // パス情報の先頭の'/'を除去

  const fileIndex = Filelist.IMG_LIST.indexOf(rmFrontPath);
  const image_file = fs.readFileSync(`${Config.APP_PATH}/${Filelist.IMG_LIST[fileIndex]}`);

  if (Filelist.IMG_LIST[fileIndex].indexOf('.png') >= 0) {
    contentType = 'image/png';
  } else if (Filelist.IMG_LIST[fileIndex].indexOf('.svg') >= 0) {
    contentType = 'image/svg+xml';
  } else if (Filelist.IMG_LIST[fileIndex].indexOf('.jpeg') >= 0) {
    contentType = 'image/jpeg';
  } else if (Filelist.IMG_LIST[fileIndex].indexOf('.jpg') >= 0) {
    contentType = 'image/jpeg';
  } else if (Filelist.IMG_LIST[fileIndex].indexOf('.gif') >= 0) {
    contentType = 'image/gif';
  }

  res.writeHead(200, { 'Content-Type': contentType });
  res.write(image_file);
  res.end();
};

module.exports = {
  WriteImage
};

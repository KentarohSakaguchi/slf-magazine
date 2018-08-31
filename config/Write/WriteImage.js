/**
 * @file WriteImage
 *
 * @author Chamado
 */

const fs = require('fs-extra');

const Config = require('../Config/Config');
const Filelist = require('../Config/Filelist');

/**
 * responce image
 * @param {Object} res
 * @param {Object} url_parse
 * @returns {Array}
 */
const WriteImage = (res, url_parse) => {

  const fileName = url_parse.pathname.replace('/', ''); // パス情報の先頭の'/'を除去
  const fileIndex = Filelist.IMG_LIST.indexOf(fileName);
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

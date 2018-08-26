/**
 * @file WriteImage
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
const WriteImage = (rmFrontPath) => {

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

  const returnArray = [contentType, image_file];
  return returnArray;
};

module.exports = {
  WriteImage
};

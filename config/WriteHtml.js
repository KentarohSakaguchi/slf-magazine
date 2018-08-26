/**
 * @file WriteHtml
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const pug = require('pug');

const Config = require('./Config');
const Filelist = require('./Filelist');

// pugの設定情報
const pugOptions = {
  pretty: true,
  filename: ''
};

/**
 * responce image
 * @param {String} rmFrontPath, filename
 * @returns {Array}
 */
const WriteHtml = (rmFrontPath, filename) => {

  let renderPug = null;

  if (filename === 'htmlIndex') {

    console.log('@htmlIndex');
    renderPug = fs.readFileSync(`${Config.HTML_PATH}/index.pug`, 'utf8');
    pugOptions.filename = `${Config.HTML_PATH}/index.pug`;
  } else {

    console.log('@htmlPage');
    const reUrlPath = rmFrontPath.replace('/', '');
    const fileIndex = Filelist.HTML_LIST.indexOf(reUrlPath);
    renderPug = fs.readFileSync(`${Config.HTML_PATH}/${Filelist.HTML_LIST[fileIndex]}.pug`, 'utf8');
    pugOptions.filename = `${Config.HTML_PATH}/${Filelist.HTML_LIST[fileIndex]}.pug`;
  }

  const content = pug.render(renderPug, pugOptions);

  const returnArray = [`text/html`, content];
  return returnArray;
};

module.exports = {
  WriteHtml
};

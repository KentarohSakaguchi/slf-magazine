/**
 * @file WriteHtml
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const pug = require('pug');
const glob = require('glob');

const Config = require('../Config/Config');
const Filelist = require('../Config/Filelist');

// pugの設定情報
const pugOptions = {
  pretty: true,
  locals: {
    file: ''
  }
};

/**
 * responce image
 * @param {Object} res
 * @param {Object} url_parse
 * @returns {Array}
 */
const WriteHtml = (res, url_parse) => {

  let fileName = url_parse.pathname.replace('/', '').replace(/.*?\//, ''); // url情報取得

  if (url_parse.pathname === '/') {
    // index ページ
    fileName = 'index'; // url情報取得

  } else {

    // その他ページ
    const viewList = glob.sync(`${Config.HTML_PATH}/!(_)*`);

    // 404のち
    for (data of viewList) {
      const view = data.replace(Config.HTML_PATH, '').replace('.pug', '');
      if (fileName !== view) {
        pugOptions.locals.file = fileName;
        fileName = 'record';
      }
    }
  }

  const fileIndex = Filelist.HTML_LIST.indexOf(fileName);
  const renderPug = fs.readFileSync(`${Config.HTML_PATH}/${Filelist.HTML_LIST[fileIndex]}.pug`, 'utf8');
  pugOptions.filename = `${Config.HTML_PATH}/${Filelist.HTML_LIST[fileIndex]}.pug`;

  const content = pug.render(renderPug, pugOptions);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(content);
  res.end();
};

module.exports = {
  WriteHtml
};

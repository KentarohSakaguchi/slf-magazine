/**
 * @file WriteHtml
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const pug = require('pug');
const url = require('url');

const Config = require('../Config');
const Filelist = require('../Filelist');
const Routes = require('../Routes');

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
const WriteHtml = (req, res) => {

  const url_parts = url.parse(req.url, true); // url情報取得
  const url_path = url_parts.pathname;
  const rmFrontPath = url_path.replace('/', ''); // パス情報の先頭の'/'を除去
  const filename = Routes.Routes(url_path); // パス情報をRoutesへ渡しファイル名を取得する

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

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(content);
  res.end();
};

module.exports = {
  WriteHtml
};

/**
 * @file Postファイル
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const qs = require('querystring');
const pug = require('pug');

const Config = require('./Config');

// pugの設定情報
const pugOptions = {
  pretty: true,
  filename: '',
  postHtml: ''
};

/**
 * Postの処理
 * @param {Object} req res
 */
const Post = (req, res) => {

  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {

    const posteadHtml = qs.parse(body);
    pugOptions.postHtml = posteadHtml.save;

    const renderPug = fs.readFileSync(`${Config.HTML_PATH}/result.pug`, 'utf8');
    pugOptions.filename = `${Config.HTML_PATH}/result.pug`;
    const content = pug.render(renderPug, pugOptions);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
  });

};

module.exports = {
  Post
};


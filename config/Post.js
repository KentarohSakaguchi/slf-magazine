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
  filename: ''
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
    const postHtml = posteadHtml.save;
    console.log(postHtml);

    renderPug = fs.readFileSync(`${Config.HTML_PATH}/result.pug`, 'utf8');
    pugOptions.filename = `${Config.HTML_PATH}/result.pug`;
    pug.render(renderPug, pugOptions);

    res.end();
  });

  

};

module.exports = {
  Post
};


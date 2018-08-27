/**
 * @file EditPostファイル
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const qs = require('querystring');
const pug = require('pug');

const Config = require('../Config');

// pugの設定情報
const pugOptions = {
  pretty: true,
  filename: '',
  postHtml: ''
};

let posteadHtml;

/**
 * editページでsubmitした時のPostの処理
 * @param {Object} req res
 */
const EditPost = (req, res) => {

  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {

    posteadHtml = qs.parse(body);
    pugOptions.postHtml = posteadHtml.save;
    console.log(posteadHtml);

    const renderPug = fs.readFileSync(`${Config.HTML_PATH}/result.pug`, 'utf8');
    pugOptions.filename = `${Config.HTML_PATH}/result.pug`;
    const content = pug.render(renderPug, pugOptions);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
    return posteadHtml;
  });

};

module.exports = {
  EditPost
};


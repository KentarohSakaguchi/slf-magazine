/**
 * @file DeletePostファイル
 *
 * @author Chamado
 */

const qs = require('querystring');
const Read = require('../Read/Read');


let posteadValue;

/**
 * adminページでsubmitした時のPostの処理
 * @param {Object} req res
 */
const DeletePost = (req, res) => {

  return new Promise((resolve, reject) => {

    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {

      posteadValue = qs.parse(body);

      Read.Read.deleteFlgChange(posteadValue)

      res.end();

      resolve();
    });
  });
};

module.exports = {
  DeletePost
};
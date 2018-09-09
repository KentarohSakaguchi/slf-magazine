/**
 * @file DeletePostファイル
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const qs = require('querystring');

const Config = require('../Config/Config');


let posteadValue;

/**
 * adminページでsubmitした時のPostの処理
 * @param {Object} req res
 */
const DeletePost = (req, res) => {

  return new Promise((resolve, reject) => {

    let body = '';
    let resultJson = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {

      posteadValue = qs.parse(body);

      Object.keys(posteadValue).forEach((value) => {

        if (posteadValue[value] === 'true') {
          return;
        }

        const readJson = fs.readFileSync(`${Config.REC_PATH}/report/${value}.json`, 'utf8');
        
        const readJsonData = JSON.parse(readJson);
        readJsonData.delete = "true";

        resultJson = JSON.stringify(readJsonData);

        fs.writeFileSync(`${Config.REC_PATH}/report/${value}.json`, resultJson, (err) => {
          if (err) {
            throw err;
          }
        });
      });

      // res.writeHead(200, { 'Content-Type': 'application/json' });
      // res.write(resultJson);
      res.end();

      resolve();
    });
  });
};

module.exports = {
  DeletePost
};
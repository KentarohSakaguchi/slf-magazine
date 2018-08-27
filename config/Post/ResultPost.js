/**
 * @file EditPostファイル
 *
 * @author Chamado
 */

const fs = require('fs-extra');
const qs = require('querystring');

const Config = require('../Config');


/**
 * resultページでsubmitした時のPostの処理 → jsonファイルとして出力する
 * @param {Object} req res
 */
const ResultPost = (req, res, postData) => {

  console.log(postData);

};

module.exports = {
  ResultPost
};


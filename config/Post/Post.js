/**
 * @file Postファイル
 *
 * @author Chamado
 */

const EditPost = require('./EditPost');
const ResultPost = require('./ResultPost');

let postData;

const Post = (req, res, url_path) => {

  if (url_path === '/result') {
    postData = EditPost.EditPost(req, res);
  }

  if (url_path === '/') {
    ResultPost.ResultPost(req, res, postData);
  }

};

module.exports = {
  Post
};

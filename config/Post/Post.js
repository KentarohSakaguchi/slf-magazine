/**
 * @file Postファイル
 *
 * @author Chamado
 */

const EditPost = require('./EditPost');

const Post = (req, res, url_path) => {

  return new Promise((resolve, reject) => {

    if (url_path === '/result') {
      EditPost.EditPost(req, res).then((result) => {
        resolve(result)
      });
    }
  });

};

module.exports = {
  Post
};

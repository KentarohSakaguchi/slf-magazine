/**
 * @file ルーティンフ 設定ファイル
 *
 * @author Chamado
 */


/**
 * パス情報を受け取りルーティング処理をする
 * @param {String} urlPath パス情報
 */

 const Routes = (urlPath) => {

  console.log('url::' + urlPath);

  if (urlPath.indexOf('.pug') >= 0) {

    return 'html';

  } else if (urlPath === '/favicon.ico') {

    return 'favicon';
  
  } else if (urlPath.indexOf('.css') >= 0) {

    return 'css';

  } else if(urlPath.indexOf('.json') >= 0) {

    return 'record';

  } else if(urlPath.indexOf('.js') >= 0) {

    return 'js';

  } else if(urlPath.indexOf('/images/') >= 0) {

    return 'image';

  } else if(urlPath.indexOf('/record/') >= 0) {

    return 'record';

  } else if(urlPath.indexOf('socket.io') >= 0) {

    return 'socket';

  } else if(urlPath.indexOf('/result') >= 0) {

    return 'post';

  } else {

    return 'html';
  }

};


module.exports = {
  Routes
};

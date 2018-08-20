/**
 * @file server 設定ファイル
 *
 * @author Chamado
 */

const http = require('http');
const fs = require('fs-extra');
const pug = require('pug');
const url = require('url');
const qs = require('querystring');

const socketio = require('socket.io');

const Routes = require('./config/Routes');
const Config = require('./config/Config');
const Filelist = require('./config/Filelist');

const chalk = require('chalk');
const chokidar = require('chokidar');

// pugの設定情報
const pugOptions = {
  pretty: true,
  filename: ''
};

const server = http.createServer();

console.log(chalk.magenta(`server listen localhost:3000`));

server.on('request', (req, res) => {

  console.log(req.method);

  const url_parts = url.parse(req.url, true); // url情報取得
  const url_path = url_parts.pathname;
  const filename = Routes.Routes(url_path); // パス情報をRoutesへ渡しファイル名を取得する
  let fileIndex = null;
  let contentType = null;

  const rmFrontPath = url_path.replace('/', ''); // パス情報の先頭の'/'を除去


  /**
   * レスポンス表示関数
   * @param {String} contentType
   * @param {String} fileName
   */
  const responseWrite = (contentType, fileName) => {
    res.writeHead(200, { 'Content-Type': contentType });
    res.write(fileName);
    res.end();
  };

  switch (filename) {

    case 'css':
      console.log('@css');
      fileIndex = Filelist.CSS_LIST.indexOf(rmFrontPath);
      const style_css = fs.readFileSync(`${Config.APP_PATH}/${Filelist.CSS_LIST[fileIndex]}`, 'utf8');
      responseWrite('text/css', style_css);
      break;

    case 'js':
      console.log('@js');
      fileIndex = Filelist.JS_LIST.indexOf(rmFrontPath);
      const script_js = fs.readFileSync(`${Config.APP_PATH}/${Filelist.JS_LIST[fileIndex]}`, 'utf8');
      responseWrite('text/javascript', script_js);
      break;

    case 'image':
      console.log('@image');
      fileIndex = Filelist.IMG_LIST.indexOf(rmFrontPath);
      const image_file = fs.readFileSync(`${Config.APP_PATH}/${Filelist.IMG_LIST[fileIndex]}`);

      if (Filelist.IMG_LIST[fileIndex].indexOf('.png') >= 0) {
        contentType = 'image/png';
      } else if (Filelist.IMG_LIST[fileIndex].indexOf('.svg') >= 0) {
        contentType = 'image/svg+xml';
      } else if (Filelist.IMG_LIST[fileIndex].indexOf('.jpeg') >= 0) {
        contentType = 'image/jpeg';
      } else if (Filelist.IMG_LIST[fileIndex].indexOf('.jpg') >= 0) {
        contentType = 'image/jpeg';
      } else if (Filelist.IMG_LIST[fileIndex].indexOf('.gif') >= 0) {
        contentType = 'image/gif';
      }

      responseWrite(contentType, image_file);
      break;

    case 'record':
      console.log('@record');
      fileIndex = Filelist.REC_LIST.indexOf(rmFrontPath);
      const rec_file = fs.readFileSync(`${Config.APP_PATH}/${Filelist.REC_LIST[fileIndex]}`);

      if (Filelist.REC_LIST[fileIndex].indexOf('.json') >= 0) {
        contentType = 'application/json';
      } else if (Filelist.REC_LIST[fileIndex].indexOf('.csv') >= 0) {
        contentType = 'text/csv';
      }

      responseWrite(contentType, rec_file);
      break;

    case 'favicon':
      console.log('@favicon');
      res.end();
      break;
    
    case 'socket':
      console.log('@socket');
      res.end();
      break;


    default:
      // html
      let renderPug = null;

      if (filename === 'htmlIndex') {
        console.log('@htmlIndex');
        renderPug = fs.readFileSync(`${Config.HTML_PATH}/index.pug`, 'utf8');
        pugOptions.filename = `${Config.HTML_PATH}/index.pug`;

      } else {
        console.log('@htmlPage');
        const reUrlPath = rmFrontPath.replace('/', '');
        fileIndex = Filelist.HTML_LIST.indexOf(reUrlPath);
        renderPug = fs.readFileSync(`${Config.HTML_PATH}/${Filelist.HTML_LIST[fileIndex]}.pug`, 'utf8');
        pugOptions.filename = `${Config.HTML_PATH}/${Filelist.HTML_LIST[fileIndex]}.pug`;

      }

      const content = pug.render(renderPug, pugOptions);
      responseWrite('text/html', content);
      break;
  }


});


/**
 * ファイルを監視して変更があったらreloadする実行関数
 */
const io = socketio.listen(server);
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('reload', { message: 'reload' }, (data) => {
    console.log('reload: ' + data);
  });
});


/**
 * ファイルを監視して変更があったらreloadする
 * @param {Array(string)} _targetPath コンパイルするファイル名
 */
const chokidarWatch = chokidar.watch('app', {
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100
  }
});

chokidarWatch.on('change', (path) => {

  console.log(chalk.yellow(`filechange -> ${path}`));

}).on('error', (err) => {
  console.error(err);
  process.exit(1);
});

// 終了処理
process.on('SIGINT', () => {
  console.log('\nタスクが終了されました。');
  process.exit(0);
});

server.listen(3000);

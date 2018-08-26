/**
 * @file server 設定ファイル
 *
 * @author Chamado
 */

const http = require('http');
const fs = require('fs-extra');
const url = require('url');
const qs = require('querystring');

const socketio = require('socket.io');

const Routes = require('./config/Routes');

const WriteCss = require('./config/WriteCss');
const WriteJs = require('./config/WriteJs');
const WriteImage = require('./config/WriteImage');
const WriteJson = require('./config/WriteJson');
const WriteHtml = require('./config/WriteHtml');

const chalk = require('chalk');
const chokidar = require('chokidar');

const server = http.createServer();


console.log(chalk.magenta(`server listen localhost:3000`));

server.on('request', (req, res) => {

  console.log(req.method);

  const url_parts = url.parse(req.url, true); // url情報取得
  const url_path = url_parts.pathname;
  const filename = Routes.Routes(url_path); // パス情報をRoutesへ渡しファイル名を取得する

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

  if (req.method === 'POST') {

    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const posteadHtml = qs.parse(body);
      const postHtml = posteadHtml.save;
      console.log(postHtml);
      res.end();
    });
  }


  switch (filename) {

    case 'css':
      console.log('@css');
      responseWrite(WriteCss.WriteCss(rmFrontPath)[0], WriteCss.WriteCss(rmFrontPath)[1]);
      break;

    case 'js':
      console.log('@js');
      responseWrite(WriteJs.WriteJs(rmFrontPath)[0], WriteJs.WriteJs(rmFrontPath)[1]);
      break;

    case 'image':
      console.log('@image');
      responseWrite(WriteImage.WriteImage(rmFrontPath)[0], WriteImage.WriteImage(rmFrontPath)[1]);
      break;

    case 'record':
      console.log('@record');
      responseWrite(WriteJson.WriteJson(rmFrontPath)[0], WriteJson.WriteJson(rmFrontPath)[1]);
      break;

    case 'favicon':
      console.log('@favicon');
      res.end();
      break;
    
    case 'socket':
      console.log('@socket');
      res.end();
      break;

    case 'post':
      console.log('@post');
      responseWrite('text/html', content);
      res.end();
      break;

    default:
      // html
      responseWrite(WriteHtml.WriteHtml(rmFrontPath, filename)[0], WriteHtml.WriteHtml(rmFrontPath, filename)[1]);
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

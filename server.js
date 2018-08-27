/**
 * @file server 設定ファイル
 *
 * @author Chamado
 */

const http = require('http');
const url = require('url');

const socketio = require('socket.io');

const Routes = require('./config/Routes');

const WriteCss = require('./config/WriteCss');
const WriteJs = require('./config/WriteJs');
const WriteImage = require('./config/WriteImage');
const WriteJson = require('./config/WriteJson');
const WriteHtml = require('./config/WriteHtml');
const EditPost = require('./config/EditPost');

const chalk = require('chalk');
const chokidar = require('chokidar');

const server = http.createServer();


console.log(chalk.magenta(`server listen localhost:3000`));

server.on('request', (req, res) => {

  console.log(req.method);

  const url_parts = url.parse(req.url, true); // url情報取得
  const url_path = url_parts.pathname;
  const filename = Routes.Routes(url_path); // パス情報をRoutesへ渡しファイル名を取得する

  if (req.method === 'POST' && url_path === '/result') { EditPost.Post(req, res); }

  switch (filename) {

    case 'css':
      console.log('@css');
      WriteCss.WriteCss(req, res);
      break;

    case 'js':
      console.log('@js');
      WriteJs.WriteJs(req, res);
      break;

    case 'image':
      console.log('@image');
      WriteImage.WriteImage(req, res);
      break;

    case 'record':
      console.log('@record');
      WriteJson.WriteJson(req, res);
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

      if (url_path === '/') {
        res.end();
      }

      break;

    default:
      // html
      WriteHtml.WriteHtml(req, res);
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

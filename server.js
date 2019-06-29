/**
 * @file server 設定ファイル
 *
 * @author Chamado
 */

const http = require('http');
const url = require('url');

const socketio = require('socket.io');
const execSh = require('exec-sh');

const Routes = require('./config/Config/Routes');

const WriteCss = require('./config/Write/WriteCss');
const WriteJs = require('./config/Write/WriteJs');
const WriteImage = require('./config/Write/WriteImage');
const WriteJson = require('./config/Write/WriteJson');
const WriteHtml = require('./config/Write/WriteHtml');

const Data = require('./config/Data/Data');
const Save = require('./config/Save/Save');
const Post = require('./config/Post/Post');
const Delete = require('./config/Delete/Delete');

const Db = require('./config/Db/Db');

const chalk = require('chalk');
const chokidar = require('chokidar');

const server = http.createServer();

let postJson = '';
let saveFileFlg = false; // jason書き込みflg

console.log(chalk.magenta(`server listen localhost:3000`));

// Db.Db();

// サーバーリクエストの処理
server.on('request', (req, res) => {

  console.log(req.method);

  const url_parse = url.parse(req.url, true); // getの情報
  // console.log(url_parse);

  const url_path = url_parse.pathname;
  const filename = Routes.Routes(url_path); // パス情報をRoutesへ渡しファイル名を取得する

  // reqest POST
  if (req.method === 'POST') {
    postJson = Post.Post(req, res, url_path).then((result) => {
      postJson = result;
    });
  }

  // edit page
  if (url_parse.pathname === '/edit') {

    saveFileFlg = true; // editページのみflgをtrueに

    if (url_parse.query.back === 'cancel') {
      console.log(postJson);
    }
  }

  // admin page
  if (url_parse.pathname === '/admin') {
    Delete.Delete();
  }

  // saveFile
  if (url_parse.search === '?saved=true' && saveFileFlg) {

    saveFileFlg = false; // flgを初期状態に戻す

    Save.SaveJson(postJson);
    console.log('-------------saved--------------------');
    postJson = '';
  }

  // ajax 全件数取得
  if (url_parse.pathname === '/record/report') {
    console.log('-------------index---------------------');
    Data.Data(res, url_parse, 'admin');
    return;
  }

  // ajax 単ページ取得
  if (url_parse.pathname === '/record/report/onepage') {
    console.log('-------------onepage---------------------');
    Data.Data(res, url_parse, 'onepage');
    return;
  }

  //ajax reportpage
  if (url_parse.pathname === '/record/list') {
    console.log('-------------Data----------------------');
    Data.Data(res, url_parse, 'page');
    return;
  }


  switch (filename) {

    case 'css':
      console.log('@css');
      WriteCss.WriteCss(res, url_parse);
      break;

    case 'js':
      console.log('@js');
      WriteJs.WriteJs(res, url_parse);
      break;

    case 'image':
      console.log('@image');
      WriteImage.WriteImage(res, url_parse);
      break;

    case 'record':
      console.log('@record');
      WriteJson.WriteJson(res, url_parse);
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
      break;

    default:
      // html
      WriteHtml.WriteHtml(res, url_parse);
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
  execSh('mysql.server stop');
  console.log('\nタスクが終了されました。');
  process.exit(0);
});

server.listen(3000);

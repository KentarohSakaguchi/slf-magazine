/**
 * @file server 設定ファイル
 *
 * @author Chamado
 */

const http = require('http');
const url = require('url');
const fs = require('fs-extra');
const glob = require('glob');

const socketio = require('socket.io');

const Config = require('./config/Config/Config');
const Routes = require('./config/Config/Routes');

const WriteCss = require('./config/Write/WriteCss');
const WriteJs = require('./config/Write/WriteJs');
const WriteImage = require('./config/Write/WriteImage');
const WriteJson = require('./config/Write/WriteJson');
const WriteHtml = require('./config/Write/WriteHtml');
const Ajax = require('./config/Ajax/Ajax');

const Post = require('./config/Post/Post');

const chalk = require('chalk');
const chokidar = require('chokidar');

const server = http.createServer();

let postJson = '';
let saveFileFlg = true; // jason書き込みflg

console.log(chalk.magenta(`server listen localhost:3000`));

server.on('request', (req, res) => {

  console.log(req.method);

  const url_parse = url.parse(req.url, true); // getの情報
  console.log(url_parse.path);
  const url_path = url_parse.pathname;
  const filename = Routes.Routes(url_path); // パス情報をRoutesへ渡しファイル名を取得する

  // reqest POST
  if (req.method === 'POST') {
    postJson = Post.Post(req, res, url_path).then((result) => {
      postJson = result;
    });
  }

  if (url_parse.pathname === '/edit') {
    saveFileFlg = true; // editページのみflgをtrueに
  }

  
  let jsonlist = glob.sync(`${Config.REC_PATH}/report/*.json`).length; // 保存されているjsonの数を調べる → jasonfileの名前とする

  // saveFile
  if (url_parse.search === '?saved=true' && saveFileFlg) {

    saveFileFlg = false;
    jsonlist++;

    // postJsonをjsonfileとして保存
    fs.writeFileSync(`${__dirname}/app/record/report/id-${jsonlist}.json`, postJson, (err) => {
      if (err) {
        throw err;
      }
    });
    console.log('-----------------saved------------------------------');
    postJson = '';
  }

  // ajax
  if (url_parse.pathname === '/record') {
    Ajax.Ajax(res, url_parse, jsonlist);
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
  console.log('\nタスクが終了されました。');
  process.exit(0);
});

server.listen(3000);

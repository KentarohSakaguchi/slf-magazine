/**
 * @file Db
 *
 * @author Chamado
 */

// requireの設定
const mysql = require('mysql2');
const PAS = require('../../database/conf');

const Db = () => {

  // MySQLの接続情報
  const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database: 'ch1',
    password: PAS.PAS
  });

  // 接続
  connection.connect();

  // itemの取得
  connection.query('SELECT * from item;', (err, rows, fields) => {

    if (err) { console.log('err: ' + err); }

    console.log(`item:name:${rows[0].name}`);
    console.log(`item:id:${rows[0].id}`);
    console.log(fields);
    console.log(rows);

  });

  // 接続終了
  connection.end();
};

module.exports = {
  Db
};

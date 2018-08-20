const EventEmitter = require('events').EventEmitter;
const ev = new EventEmitter;

// ev.on('data', (data) => {
//   console.log('on', data);
// });

// ev.once('data', (data) => {
//   console.log('once', data);
// });

// ev.emit('data', 1);
// ev.emit('data', 2);

//
const funks = () => {
  var ev = new EventEmitter;
  setTimeout(() => {
    ev.emit('done', '処理したよ');
  }, 1000);
  return ev;
}

const wait = funks();
wait.on('done', (string) => {
  console.log(string);
})

// function asyncFunc() {
//   var ev = new EventEmitter;
//   console.log('in asyncFunc');
//   setTimeout(function () {
//     ev.emit('done', 'foo', 'bar');
//   }, 1000);
//   return ev;
// }

// var async = asyncFunc();
// async.on('done', function(arg1, arg2) {
//   console.log(arg1, arg2);
// })
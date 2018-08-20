/**
 * @files common.jsx
 */

import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js'

import Edit from '../component/edit/Edit';
import Test from '../component/Test';
// import Mount from '../component/Mount';

const edit = document.getElementById('js-edit');
// console.log([edit].length);

if ([edit][0] !== null) {
  ReactDOM.render(
    <Edit />, edit
  );
}

// const mm = document.getElementById('js-edit-m');

// if ([edit][0] !== null) {
//   ReactDOM.render(
//     <Mount />, mm
//   );
// }


const tests = document.getElementById('test');

if ([tests][0] !== null) {
  ReactDOM.render(
    <Test />, tests
  );
}


hljs.initHighlightingOnLoad();


import '../modules/Socket';

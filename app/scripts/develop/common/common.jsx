/**
 * @files common.jsx
 */

import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js'

import Edit from '../component/edit/Edit';
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


hljs.initHighlightingOnLoad();


import '../modules/Socket';

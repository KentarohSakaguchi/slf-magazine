/**
 * @files common.jsx
 */

import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js'

import Edit from '../component/Edit/Edit';
import Submit from '../component/Submit/Submit';
import IndexPage from '../component/IndexPage/IndexPage';
import RecordPage from '../component/RecordPage/RecordPage';
import AdminPage from '../component/AdminPage/AdminPage';
// import Mount from '../component/Mount';

const edit = document.getElementById('js-edit');

if ([edit][0] !== null) {
  ReactDOM.render(
    <Edit />, edit
  );
}

const submit = document.getElementById('js-submit');

if ([submit][0] !== null) {
  ReactDOM.render(
    <Submit />, submit
  );
}

const indexPage = document.getElementById('js-index-page');
if ([indexPage][0] !== null) {
  ReactDOM.render(
    <IndexPage />, indexPage
  );
}

const recordPage = document.getElementById('js-record-page');
if ([recordPage][0] !== null) {
  ReactDOM.render(
    <RecordPage />, recordPage
  );
}

const adminPage = document.getElementById('js-admin-page');
if ([adminPage][0] !== null) {
  ReactDOM.render(
    <AdminPage />, adminPage
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

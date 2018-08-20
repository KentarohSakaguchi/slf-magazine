/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/scripts/develop/common/common.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/scripts/develop/common/common.jsx":
/*!***********************************************!*\
  !*** ./app/scripts/develop/common/common.jsx ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_edit_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/edit/Edit */ "./app/scripts/develop/component/edit/Edit.jsx");
/* harmony import */ var _component_Test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Test */ "./app/scripts/develop/component/Test.jsx");
/* harmony import */ var _modules_Socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/Socket */ "./app/scripts/develop/modules/Socket.js");
/**
 * @files common.jsx
 */







// import Mount from '../component/Mount';

var edit = document.getElementById('js-edit');
// console.log([edit].length);

if ([edit][0] !== null) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_edit_Edit__WEBPACK_IMPORTED_MODULE_3__["default"], null), edit);
}

// const mm = document.getElementById('js-edit-m');

// if ([edit][0] !== null) {
//   ReactDOM.render(
//     <Mount />, mm
//   );
// }


var tests = document.getElementById('test');

if ([tests][0] !== null) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Test__WEBPACK_IMPORTED_MODULE_4__["default"], null), tests);
}

highlight_js__WEBPACK_IMPORTED_MODULE_2___default.a.initHighlightingOnLoad();



/***/ }),

/***/ "./app/scripts/develop/component/Test.jsx":
/*!************************************************!*\
  !*** ./app/scripts/develop/component/Test.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var json = '../../record/test.json';

var Tset = function (_Component) {
  _inherits(Tset, _Component);

  function Tset(props) {
    _classCallCheck(this, Tset);

    var _this = _possibleConstructorReturn(this, (Tset.__proto__ || Object.getPrototypeOf(Tset)).call(this, props));

    _this.state = {
      text: 'あんず!!'
    };
    return _this;
  }

  _createClass(Tset, [{
    key: 'test',
    value: function test() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(json).then(function (results) {
        console.log(results);
        _this2.setState({
          text: results.data.name
        });
      }).catch(function (results) {
        console.log(results);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'button',
        { className: 'button', onClick: this.test.bind(this) },
        this.state.text
      );
    }
  }]);

  return Tset;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tset);

/***/ }),

/***/ "./app/scripts/develop/component/edit/Edit.jsx":
/*!*****************************************************!*\
  !*** ./app/scripts/develop/component/edit/Edit.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_EditHeaderRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/EditHeaderRender */ "./app/scripts/develop/component/edit/component/EditHeaderRender.jsx");
/* harmony import */ var _component_EditTextRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/EditTextRender */ "./app/scripts/develop/component/edit/component/EditTextRender.jsx");
/* harmony import */ var _component_EditInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/EditInput */ "./app/scripts/develop/component/edit/component/EditInput.jsx");
/* harmony import */ var _component_EditSelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/EditSelectInput */ "./app/scripts/develop/component/edit/component/EditSelectInput.jsx");
/* harmony import */ var _component_EditSelectLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/EditSelectLang */ "./app/scripts/develop/component/edit/component/EditSelectLang.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Edit = function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    _classCallCheck(this, Edit);

    var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

    _this.titleValueChange = _this.titleValueChange.bind(_this);
    _this.textValueChange = _this.textValueChange.bind(_this);
    _this.selectValueChange = _this.selectValueChange.bind(_this);
    _this.textLangValueChange = _this.textLangValueChange.bind(_this);
    _this.selectValueChangeLang = _this.selectValueChangeLang.bind(_this);
    _this.addInput = _this.addInput.bind(_this);
    _this.addInputRender = _this.addInputRender.bind(_this);
    _this.addTextRender = _this.addTextRender.bind(_this);
    _this.textValueChangeRemove = _this.textValueChangeRemove.bind(_this);

    _this.selectValueList = [{ value: 'h3', text: '中見出し' }, { value: 'h4', text: '小見出し' }, { value: 'p', text: '文言' }, { value: 'code', text: 'コード' }, { value: 'cmd', text: 'コマンド' }];

    _this.langList = ['javascript', 'css', 'html', 'ruby', 'python', 'go', 'php'];

    _this.addInputArray = [0];
    _this.addTextArray = [0];
    _this.textArray = []; // テキストを格納する配列
    _this.selectArray = [_this.selectValueList[0].value]; // セレクト(見出しやコードなど)を格納する配列

    _this.state = {
      pageTitle: '',
      textValue: _this.textArray,
      selectValue: _this.selectArray,
      textLangValue: '',
      selectLangValue: _this.langList[0],
      input: 0
    };

    _this.addFlg = false;
    return _this;
  }

  /**
   * titleの変更
   */


  _createClass(Edit, [{
    key: 'titleValueChange',
    value: function titleValueChange(value) {
      this.setState({ pageTitle: value });
    }

    /**
     * textの変更
     */

  }, {
    key: 'textValueChange',
    value: function textValueChange(value, valueId) {
      this.textArray[valueId] = value;
      this.setState({ textValue: this.textArray });
    }

    /**
     * 言語のテキストの変更
     */

  }, {
    key: 'textLangValueChange',
    value: function textLangValueChange(value) {
      this.setState({ textLangValue: value });
    }

    /**
     * select(見出しやコードなど)の変更
     */

  }, {
    key: 'selectValueChange',
    value: function selectValueChange(value, valueId) {
      this.selectArray[valueId] = value;
      this.setState({ selectValue: this.selectArray });
    }

    /**
     * 言語のselectの変更
     */

  }, {
    key: 'selectValueChangeLang',
    value: function selectValueChangeLang(value) {
      this.setState({ selectLangValue: value });
    }

    /**
     * 日付表示
     */

  }, {
    key: 'setDate',
    value: function setDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var setDateValue = year + '.' + month + '.' + day;
      return setDateValue;
    }

    /**
     * 入力の複製
     */

  }, {
    key: 'addInput',
    value: function addInput() {
      this.setState({ input: this.state.input + 1 });
      this.addFlg = true;
    }

    /**
     * フォームの複製
     */

  }, {
    key: 'addInputRender',
    value: function addInputRender() {
      var _this2 = this;

      if (this.addFlg) {
        this.addInputArray.push(this.state.input);
      }

      return this.addInputArray.map(function (_value, _index) {
        return _this2.addFlg = false, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_EditSelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: _index,
          textId: 'inputId-' + _index,
          textValue: _this2.state.textValue[_index],
          textValueChange: _this2.textValueChange,
          selectValueList: _this2.selectValueList,
          selectValue: _this2.selectValueChange,
          valueRemove: _this2.textValueChangeRemove
        });
      });
    }

    /**
     * 文言の複製
     */

  }, {
    key: 'addTextRender',
    value: function addTextRender() {
      var _this3 = this;

      if (this.addFlg) {
        this.addTextArray.push(this.state.input);
      }

      return this.addTextArray.map(function (_value, _index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_EditTextRender__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: _index,
          textId: 'inputTextId-' + _index,
          textValue: _this3.state.textValue[_index],
          selectValue: _this3.state.selectValue[_index],
          selectValueList: _this3.selectValueList
        });
      });
    }

    /**
     * 入力の削除
     */

  }, {
    key: 'textValueChangeRemove',
    value: function textValueChangeRemove(removeId) {

      this.textArray.splice(removeId, 1);
      this.addInputArray.pop();
      this.addTextArray.pop();

      this.setState({
        input: this.state.input - 1,
        textValue: this.textArray
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.textArray);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'edit-wrapper' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'section',
          { className: 'blocks' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'blocks__box' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'blocks__inner' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_EditHeaderRender__WEBPACK_IMPORTED_MODULE_2__["default"], {
                headerValue: this.state.pageTitle,
                selectLang: this.state.selectLangValue,
                langText: this.state.textLangValue
              }),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'section',
                { className: 'blocks__text' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { className: 'blocks__time' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    null,
                    this.setDate()
                  )
                ),
                this.addTextRender()
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: 'edit' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'edit__inner' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_EditInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
              headerValue: this.state.pageTitle,
              headerValueChange: this.titleValueChange
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_EditSelectLang__WEBPACK_IMPORTED_MODULE_6__["default"], {
              textLangValue: this.state.textLangValue,
              textLangValueChange: this.textLangValueChange,
              selectLangList: this.langList,
              selectLangValue: this.state.selectLangValue,
              selectLangValueChange: this.selectValueChangeLang
            }),
            this.addInputRender(),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
              type: 'button',
              className: 'edit__button edit__button--plus',
              onClick: this.addInput })
          )
        )
      );
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Edit.propTypes = {
  pageTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  textValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  selectValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./app/scripts/develop/component/edit/component/EditHeaderRender.jsx":
/*!***************************************************************************!*\
  !*** ./app/scripts/develop/component/edit/component/EditHeaderRender.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditLangRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditLangRender */ "./app/scripts/develop/component/edit/component/EditLangRender.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file タイトル描画
 * 
 */






var EditHeaderRender = function (_Component) {
  _inherits(EditHeaderRender, _Component);

  function EditHeaderRender() {
    _classCallCheck(this, EditHeaderRender);

    return _possibleConstructorReturn(this, (EditHeaderRender.__proto__ || Object.getPrototypeOf(EditHeaderRender)).apply(this, arguments));
  }

  _createClass(EditHeaderRender, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'header',
        { className: 'blocks__header' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h2',
          { className: 'blocks__title' },
          this.props.headerValue
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditLangRender__WEBPACK_IMPORTED_MODULE_2__["default"], {
          lang: this.props.selectLang,
          text: this.props.langText
        })
      );
    }
  }]);

  return EditHeaderRender;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EditHeaderRender.propTypes = {
  headerValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selectLang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  langText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (EditHeaderRender);

/***/ }),

/***/ "./app/scripts/develop/component/edit/component/EditInput.jsx":
/*!********************************************************************!*\
  !*** ./app/scripts/develop/component/edit/component/EditInput.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file テキスト入力フォーム
 * 
 */




var EditInput = function (_Component) {
  _inherits(EditInput, _Component);

  function EditInput(props) {
    _classCallCheck(this, EditInput);

    var _this = _possibleConstructorReturn(this, (EditInput.__proto__ || Object.getPrototypeOf(EditInput)).call(this, props));

    _this.valueChange = _this.valueChange.bind(_this);
    return _this;
  }

  _createClass(EditInput, [{
    key: 'valueChange',
    value: function valueChange(setValue) {
      return this.props.headerValueChange(setValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'edit__input-block' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'label',
          { className: 'edit__input-input' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { className: 'edit__input', type: 'text', placeholder: '\u30DA\u30FC\u30B8\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B', value: this.props.headerValue, onChange: function onChange(e) {
              return _this2.valueChange(e.target.value);
            } })
        )
      );
    }
  }]);

  return EditInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EditInput.propTypes = {
  headerValueChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  headerValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (EditInput);

/***/ }),

/***/ "./app/scripts/develop/component/edit/component/EditLangRender.jsx":
/*!*************************************************************************!*\
  !*** ./app/scripts/develop/component/edit/component/EditLangRender.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file タイトル描画
 * 
 */




var EditLangRender = function (_Component) {
  _inherits(EditLangRender, _Component);

  function EditLangRender() {
    _classCallCheck(this, EditLangRender);

    return _possibleConstructorReturn(this, (EditLangRender.__proto__ || Object.getPrototypeOf(EditLangRender)).apply(this, arguments));
  }

  _createClass(EditLangRender, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'labels' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'a',
          { className: 'labels__link', href: '#' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'span',
            { className: 'labels__main labels__main--' + this.props.lang },
            this.props.lang
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'a',
          { className: 'labels__link', href: '#' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'span',
            { className: 'labels__sub labels__sub--' + this.props.lang },
            this.props.text
          )
        )
      );
    }
  }]);

  return EditLangRender;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EditLangRender.propTypes = {
  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (EditLangRender);

/***/ }),

/***/ "./app/scripts/develop/component/edit/component/EditSelectInput.jsx":
/*!**************************************************************************!*\
  !*** ./app/scripts/develop/component/edit/component/EditSelectInput.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file テキスト入力フォーム(選択型)
 * 
 */




var EditSelectInput = function (_Component) {
  _inherits(EditSelectInput, _Component);

  function EditSelectInput(props) {
    _classCallCheck(this, EditSelectInput);

    var _this = _possibleConstructorReturn(this, (EditSelectInput.__proto__ || Object.getPrototypeOf(EditSelectInput)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.removeInput = _this.removeInput.bind(_this);

    _this.state = {
      value: ''
    };
    return _this;
  }

  /**
   * セレクトボックス
   */


  _createClass(EditSelectInput, [{
    key: 'handleChange',
    value: function handleChange(setValue, textId) {
      var idNumber = Number(textId.replace('inputId-', ''));
      return this.props.selectValue(setValue, idNumber);
    }
  }, {
    key: 'setOption',
    value: function setOption() {
      var items = this.props.selectValueList.map(function (_item, _number) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'option',
          { key: _number, value: _item.value },
          _item.text
        );
      });

      return items;
    }

    /**
     * input
     */

  }, {
    key: 'valueChange',
    value: function valueChange(setValue, textId) {
      this.setState({ value: setValue });
      var idNumber = Number(textId.replace('inputId-', ''));
      return this.props.textValueChange(setValue, idNumber);
    }
  }, {
    key: 'removeInput',
    value: function removeInput() {
      this.setState({ value: '' });
      var idNumber = Number(this.props.textId.replace('inputId-', ''));
      return this.props.valueRemove(idNumber);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.setOption();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'edit__input-block', id: this.props.textId },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'label',
          { className: 'edit__input-title' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'select',
            {
              className: 'edit__input-select',
              onChange: function onChange(e) {
                return _this2.handleChange(e.target.value, _this2.props.textId);
              }
            },
            this.setOption()
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'label',
          { className: 'edit__input-input' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
            className: 'edit__input',
            type: 'text',
            placeholder: '\u6587\u8A00\u3092\u5165\u529B',
            value: this.state.value,
            onChange: function onChange(e) {
              return _this2.valueChange(e.target.value, _this2.props.textId);
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', { type: 'button', className: 'edit__button edit__button--minus', onClick: this.removeInput })
      );
    }
  }]);

  return EditSelectInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EditSelectInput.propTypes = {
  selectValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  selectValueList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  textValueChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  textValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  textId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (EditSelectInput);

/***/ }),

/***/ "./app/scripts/develop/component/edit/component/EditSelectLang.jsx":
/*!*************************************************************************!*\
  !*** ./app/scripts/develop/component/edit/component/EditSelectLang.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file 言語フォーム(選択型)
 * 
 */




var EditSelectLang = function (_Component) {
  _inherits(EditSelectLang, _Component);

  function EditSelectLang(props) {
    _classCallCheck(this, EditSelectLang);

    var _this = _possibleConstructorReturn(this, (EditSelectLang.__proto__ || Object.getPrototypeOf(EditSelectLang)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  /**
   * セレクトボックス
   */


  _createClass(EditSelectLang, [{
    key: 'handleChange',
    value: function handleChange(setValue) {
      return this.props.selectLangValueChange(setValue);
    }
  }, {
    key: 'setOption',
    value: function setOption() {
      var items = this.props.selectLangList.map(function (_item, _number) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'option',
          { key: _number, value: _item },
          _item
        );
      });

      return items;
    }

    /**
     * input
     */

  }, {
    key: 'valueChange',
    value: function valueChange(setValue) {
      return this.props.textLangValueChange(setValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.setOption();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'edit__input-block' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'label',
          { className: 'edit__input-title edit__input-title--lang' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'select',
            {
              className: 'edit__input-select',
              value: this.props.selectLangValue,
              onChange: function onChange(e) {
                return _this2.handleChange(e.target.value);
              } },
            this.setOption()
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'label',
          { className: 'edit__input-input' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { className: 'edit__input', type: 'text', placeholder: '\u95A2\u9023\u30EF\u30FC\u30C9\u3092\u5165\u529B', value: this.props.textLangValue, onChange: function onChange(e) {
              return _this2.valueChange(e.target.value);
            } })
        )
      );
    }
  }]);

  return EditSelectLang;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EditSelectLang.propTypes = {
  selectValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  selectLangValueChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  selectLangValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selectLangList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  textLangValueChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  textLangValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (EditSelectLang);

/***/ }),

/***/ "./app/scripts/develop/component/edit/component/EditTextRender.jsx":
/*!*************************************************************************!*\
  !*** ./app/scripts/develop/component/edit/component/EditTextRender.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file タイトル描画
 * 
 */




var EditTextRender = function (_Component) {
  _inherits(EditTextRender, _Component);

  /**
   * 本文エリアのパーツ
   */
  function EditTextRender(props) {
    _classCallCheck(this, EditTextRender);

    return _possibleConstructorReturn(this, (EditTextRender.__proto__ || Object.getPrototypeOf(EditTextRender)).call(this, props));
  }

  _createClass(EditTextRender, [{
    key: 'renderTextBlock',
    value: function renderTextBlock() {
      var block = '';

      switch (this.props.selectValue) {

        case this.props.selectValueList[0].value:
          block = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h3',
            { className: 'blocks__title' },
            this.props.textValue
          );
          break;
        case this.props.selectValueList[1].value:
          block = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h3',
            { className: 'blocks__description-title' },
            this.props.textValue
          );
          break;
        case this.props.selectValueList[2].value:
          block = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            null,
            this.props.textValue
          );
          break;
        case this.props.selectValueList[3].value:
          block = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'pre',
            { className: 'blocks__code' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'code',
              { className: 'ruby' },
              this.props.textValue
            )
          );
          break;
        case this.props.selectValueList[4].value:
          block = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'blocks__code-preview' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'code',
              { className: 'blocks__code-preview-text' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                null,
                this.props.textValue
              )
            )
          );

          break;
        default:
          block = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h3',
            { className: 'blocks__title' },
            this.props.textValue
          );
          break;
      }

      return block;
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'blocks__paragraph', id: this.props.textId },
        this.renderTextBlock()
      );
    }
  }]);

  return EditTextRender;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EditTextRender.propTypes = {
  textValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selectValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selectValueList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/* harmony default export */ __webpack_exports__["default"] = (EditTextRender);

/***/ }),

/***/ "./app/scripts/develop/modules/Socket.js":
/*!***********************************************!*\
  !*** ./app/scripts/develop/modules/Socket.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);


var socketFn = function socketFn() {

  var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default.a.connect('http://localhost:3000');

  socket.on('reload', function () {
    // location.reload();
    console.log('reload');
  });
};

socketFn();

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21tb24vY29tbW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9UZXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9lZGl0L0VkaXQuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRIZWFkZXJSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdExhbmdSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRUZXh0UmVuZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL21vZHVsZXMvU29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInRlc3RzIiwiaGxqcyIsImluaXRIaWdobGlnaHRpbmdPbkxvYWQiLCJqc29uIiwiVHNldCIsInByb3BzIiwic3RhdGUiLCJ0ZXh0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImRhdGEiLCJuYW1lIiwiY2F0Y2giLCJ0ZXN0IiwiYmluZCIsIkVkaXQiLCJ0aXRsZVZhbHVlQ2hhbmdlIiwidGV4dFZhbHVlQ2hhbmdlIiwic2VsZWN0VmFsdWVDaGFuZ2UiLCJ0ZXh0TGFuZ1ZhbHVlQ2hhbmdlIiwic2VsZWN0VmFsdWVDaGFuZ2VMYW5nIiwiYWRkSW5wdXQiLCJhZGRJbnB1dFJlbmRlciIsImFkZFRleHRSZW5kZXIiLCJ0ZXh0VmFsdWVDaGFuZ2VSZW1vdmUiLCJzZWxlY3RWYWx1ZUxpc3QiLCJ2YWx1ZSIsImxhbmdMaXN0IiwiYWRkSW5wdXRBcnJheSIsImFkZFRleHRBcnJheSIsInRleHRBcnJheSIsInNlbGVjdEFycmF5IiwicGFnZVRpdGxlIiwidGV4dFZhbHVlIiwic2VsZWN0VmFsdWUiLCJ0ZXh0TGFuZ1ZhbHVlIiwic2VsZWN0TGFuZ1ZhbHVlIiwiaW5wdXQiLCJhZGRGbGciLCJ2YWx1ZUlkIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInNldERhdGVWYWx1ZSIsInB1c2giLCJtYXAiLCJfdmFsdWUiLCJfaW5kZXgiLCJyZW1vdmVJZCIsInNwbGljZSIsInBvcCIsInNldERhdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsIkVkaXRIZWFkZXJSZW5kZXIiLCJoZWFkZXJWYWx1ZSIsInNlbGVjdExhbmciLCJsYW5nVGV4dCIsIkVkaXRJbnB1dCIsInZhbHVlQ2hhbmdlIiwic2V0VmFsdWUiLCJoZWFkZXJWYWx1ZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmdW5jIiwiRWRpdExhbmdSZW5kZXIiLCJsYW5nIiwiRWRpdFNlbGVjdElucHV0IiwiaGFuZGxlQ2hhbmdlIiwicmVtb3ZlSW5wdXQiLCJ0ZXh0SWQiLCJpZE51bWJlciIsIk51bWJlciIsInJlcGxhY2UiLCJpdGVtcyIsIl9pdGVtIiwiX251bWJlciIsInZhbHVlUmVtb3ZlIiwic2V0T3B0aW9uIiwiRWRpdFNlbGVjdExhbmciLCJzZWxlY3RMYW5nVmFsdWVDaGFuZ2UiLCJzZWxlY3RMYW5nTGlzdCIsIkVkaXRUZXh0UmVuZGVyIiwiYmxvY2siLCJyZW5kZXJUZXh0QmxvY2siLCJzb2NrZXRGbiIsInNvY2tldCIsImlvIiwiY29ubmVjdCIsIm9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1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QnpCLGVBQWEsaURBQUF3QixDQUFVQyxNQUZFO0FBR3pCbEMsbUJBQWlCLGlEQUFBaUMsQ0FBVUU7QUFIRixDQUEzQjs7QUFNQSwrREFBZTZCLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBOztBQUVBLElBQU1HLFdBQVcsU0FBWEEsUUFBVyxHQUFNOztBQUVyQixNQUFNQyxTQUFTLHVEQUFBQyxDQUFHQyxPQUFILENBQVcsdUJBQVgsQ0FBZjs7QUFFQUYsU0FBT0csRUFBUCxDQUFVLFFBQVYsRUFBb0IsWUFBTTtBQUN4QjtBQUNBekYsWUFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRCxHQUhEO0FBSUQsQ0FSRDs7QUFVQW9GLFc7Ozs7Ozs7Ozs7O0FDWkEsZSIsImZpbGUiOiJjb21tb24uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImNvbW1vblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tbW9uL2NvbW1vbi5qc3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKlxuICogQGZpbGVzIGNvbW1vbi5qc3hcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnXG5cbmltcG9ydCBFZGl0IGZyb20gJy4uL2NvbXBvbmVudC9lZGl0L0VkaXQnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi4vY29tcG9uZW50L1Rlc3QnO1xuLy8gaW1wb3J0IE1vdW50IGZyb20gJy4uL2NvbXBvbmVudC9Nb3VudCc7XG5cbmNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtZWRpdCcpO1xuLy8gY29uc29sZS5sb2coW2VkaXRdLmxlbmd0aCk7XG5cbmlmIChbZWRpdF1bMF0gIT09IG51bGwpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxFZGl0IC8+LCBlZGl0XG4gICk7XG59XG5cbi8vIGNvbnN0IG1tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWVkaXQtbScpO1xuXG4vLyBpZiAoW2VkaXRdWzBdICE9PSBudWxsKSB7XG4vLyAgIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgICA8TW91bnQgLz4sIG1tXG4vLyAgICk7XG4vLyB9XG5cblxuY29uc3QgdGVzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuXG5pZiAoW3Rlc3RzXVswXSAhPT0gbnVsbCkge1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFRlc3QgLz4sIHRlc3RzXG4gICk7XG59XG5cblxuaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCk7XG5cblxuaW1wb3J0ICcuLi9tb2R1bGVzL1NvY2tldCc7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QganNvbiA9ICcuLi8uLi9yZWNvcmQvdGVzdC5qc29uJztcblxuY2xhc3MgVHNldCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICfjgYLjgpPjgZohISdcbiAgICB9O1xuICB9XG5cbiAgdGVzdCgpIHtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KGpzb24pXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGV4dDogcmVzdWx0cy5kYXRhLm5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICkuY2F0Y2goKHJlc3VsdHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnRlc3QuYmluZCh0aGlzKX0+e3RoaXMuc3RhdGUudGV4dH08L2J1dHRvbj4pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHNldDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRWRpdEhlYWRlclJlbmRlciBmcm9tICcuL2NvbXBvbmVudC9FZGl0SGVhZGVyUmVuZGVyJztcbmltcG9ydCBFZGl0VGV4dFJlbmRlciBmcm9tICcuL2NvbXBvbmVudC9FZGl0VGV4dFJlbmRlcic7XG5cbmltcG9ydCBFZGl0SW5wdXQgZnJvbSAnLi9jb21wb25lbnQvRWRpdElucHV0JztcbmltcG9ydCBFZGl0U2VsZWN0SW5wdXQgZnJvbSAnLi9jb21wb25lbnQvRWRpdFNlbGVjdElucHV0JztcbmltcG9ydCBFZGl0U2VsZWN0TGFuZyBmcm9tICcuL2NvbXBvbmVudC9FZGl0U2VsZWN0TGFuZyc7XG5cbmNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRpdGxlVmFsdWVDaGFuZ2UgPSB0aGlzLnRpdGxlVmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHRWYWx1ZUNoYW5nZSA9IHRoaXMudGV4dFZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWxlY3RWYWx1ZUNoYW5nZSA9IHRoaXMuc2VsZWN0VmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHRMYW5nVmFsdWVDaGFuZ2UgPSB0aGlzLnRleHRMYW5nVmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlTGFuZyA9IHRoaXMuc2VsZWN0VmFsdWVDaGFuZ2VMYW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRJbnB1dCA9IHRoaXMuYWRkSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZElucHV0UmVuZGVyID0gdGhpcy5hZGRJbnB1dFJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkVGV4dFJlbmRlciA9IHRoaXMuYWRkVGV4dFJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dFZhbHVlQ2hhbmdlUmVtb3ZlID0gdGhpcy50ZXh0VmFsdWVDaGFuZ2VSZW1vdmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc2VsZWN0VmFsdWVMaXN0ID0gW1xuICAgICAgeyB2YWx1ZTogJ2gzJywgdGV4dDogJ+S4reimi+WHuuOBlycgfSxcbiAgICAgIHsgdmFsdWU6ICdoNCcsIHRleHQ6ICflsI/opovlh7rjgZcnIH0sXG4gICAgICB7IHZhbHVlOiAncCcsIHRleHQ6ICfmlofoqIAnIH0sXG4gICAgICB7IHZhbHVlOiAnY29kZScsIHRleHQ6ICfjgrPjg7zjg4knIH0sXG4gICAgICB7IHZhbHVlOiAnY21kJywgdGV4dDogJ+OCs+ODnuODs+ODiScgfVxuICAgIF07XG5cbiAgICB0aGlzLmxhbmdMaXN0ID0gWydqYXZhc2NyaXB0JywgJ2NzcycsICdodG1sJywgJ3J1YnknLCAncHl0aG9uJywgJ2dvJywgJ3BocCddO1xuXG4gICAgdGhpcy5hZGRJbnB1dEFycmF5ID0gWzBdO1xuICAgIHRoaXMuYWRkVGV4dEFycmF5ID0gWzBdO1xuICAgIHRoaXMudGV4dEFycmF5ID0gW107IC8vIOODhuOCreOCueODiOOCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHRoaXMuc2VsZWN0QXJyYXkgPSBbdGhpcy5zZWxlY3RWYWx1ZUxpc3RbMF0udmFsdWVdOyAvLyDjgrvjg6zjgq/jg4go6KaL5Ye644GX44KE44Kz44O844OJ44Gq44GpKeOCkuagvOe0jeOBmeOCi+mFjeWIl1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2VUaXRsZTogJycsXG4gICAgICB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5LFxuICAgICAgc2VsZWN0VmFsdWU6IHRoaXMuc2VsZWN0QXJyYXksXG4gICAgICB0ZXh0TGFuZ1ZhbHVlOiAnJyxcbiAgICAgIHNlbGVjdExhbmdWYWx1ZTogdGhpcy5sYW5nTGlzdFswXSxcbiAgICAgIGlucHV0OiAwXG4gICAgfTtcblxuICAgIHRoaXMuYWRkRmxnID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogdGl0bGXjga7lpInmm7RcbiAgICovXG4gIHRpdGxlVmFsdWVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFnZVRpdGxlOiB2YWx1ZX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0ZXh044Gu5aSJ5pu0XG4gICAqL1xuICB0ZXh0VmFsdWVDaGFuZ2UodmFsdWUsIHZhbHVlSWQpIHtcbiAgICB0aGlzLnRleHRBcnJheVt2YWx1ZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5IH0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDoqIDoqp7jga7jg4bjgq3jgrnjg4jjga7lpInmm7RcbiAgICovXG4gIHRleHRMYW5nVmFsdWVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dExhbmdWYWx1ZTogdmFsdWV9ICk7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0KOimi+WHuuOBl+OChOOCs+ODvOODieOBquOBqSnjga7lpInmm7RcbiAgICovXG4gIHNlbGVjdFZhbHVlQ2hhbmdlKHZhbHVlLCB2YWx1ZUlkKSB7XG4gICAgdGhpcy5zZWxlY3RBcnJheVt2YWx1ZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RWYWx1ZTogdGhpcy5zZWxlY3RBcnJheX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDoqIDoqp7jga5zZWxlY3Tjga7lpInmm7RcbiAgICovXG4gIHNlbGVjdFZhbHVlQ2hhbmdlTGFuZyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RMYW5nVmFsdWU6IHZhbHVlfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeS7mOihqOekulxuICAgKi9cbiAgc2V0RGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBzZXREYXRlVmFsdWUgPSBgJHt5ZWFyfS4ke21vbnRofS4ke2RheX1gO1xuICAgIHJldHVybiBzZXREYXRlVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog5YWl5Yqb44Gu6KSH6KO9XG4gICAqL1xuICBhZGRJbnB1dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXQ6IHRoaXMuc3RhdGUuaW5wdXQgKyAxIH0pO1xuICAgIHRoaXMuYWRkRmxnID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Xjgqnjg7zjg6Djga7opIfoo71cbiAgICovXG4gIGFkZElucHV0UmVuZGVyKCkge1xuXG4gICAgaWYgKHRoaXMuYWRkRmxnKSB7XG4gICAgICB0aGlzLmFkZElucHV0QXJyYXkucHVzaCh0aGlzLnN0YXRlLmlucHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hZGRJbnB1dEFycmF5Lm1hcCgoX3ZhbHVlLCBfaW5kZXgpID0+IChcbiAgICAgIHRoaXMuYWRkRmxnID0gZmFsc2UsXG4gICAgICA8RWRpdFNlbGVjdElucHV0XG4gICAgICAgIGtleT17X2luZGV4fVxuICAgICAgICB0ZXh0SWQ9e2BpbnB1dElkLSR7X2luZGV4fWB9XG4gICAgICAgIHRleHRWYWx1ZT17dGhpcy5zdGF0ZS50ZXh0VmFsdWVbX2luZGV4XX1cbiAgICAgICAgdGV4dFZhbHVlQ2hhbmdlPXt0aGlzLnRleHRWYWx1ZUNoYW5nZX1cbiAgICAgICAgc2VsZWN0VmFsdWVMaXN0PXt0aGlzLnNlbGVjdFZhbHVlTGlzdH1cbiAgICAgICAgc2VsZWN0VmFsdWU9e3RoaXMuc2VsZWN0VmFsdWVDaGFuZ2V9XG4gICAgICAgIHZhbHVlUmVtb3ZlPXt0aGlzLnRleHRWYWx1ZUNoYW5nZVJlbW92ZX1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICAvKipcbiAgICog5paH6KiA44Gu6KSH6KO9XG4gICAqL1xuICBhZGRUZXh0UmVuZGVyKCkge1xuXG4gICAgaWYgKHRoaXMuYWRkRmxnKSB7XG4gICAgICB0aGlzLmFkZFRleHRBcnJheS5wdXNoKHRoaXMuc3RhdGUuaW5wdXQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFkZFRleHRBcnJheS5tYXAoKF92YWx1ZSwgX2luZGV4KSA9PiAoXG4gICAgICA8RWRpdFRleHRSZW5kZXJcbiAgICAgICAga2V5PXtfaW5kZXh9XG4gICAgICAgIHRleHRJZD17YGlucHV0VGV4dElkLSR7X2luZGV4fWB9XG4gICAgICAgIHRleHRWYWx1ZT17dGhpcy5zdGF0ZS50ZXh0VmFsdWVbX2luZGV4XX1cbiAgICAgICAgc2VsZWN0VmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0VmFsdWVbX2luZGV4XX1cbiAgICAgICAgc2VsZWN0VmFsdWVMaXN0PXt0aGlzLnNlbGVjdFZhbHVlTGlzdH1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICAvKipcbiAgICog5YWl5Yqb44Gu5YmK6ZmkXG4gICAqL1xuICB0ZXh0VmFsdWVDaGFuZ2VSZW1vdmUocmVtb3ZlSWQpIHtcblxuICAgIHRoaXMudGV4dEFycmF5LnNwbGljZShyZW1vdmVJZCwgMSk7XG4gICAgdGhpcy5hZGRJbnB1dEFycmF5LnBvcCgpO1xuICAgIHRoaXMuYWRkVGV4dEFycmF5LnBvcCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dDogdGhpcy5zdGF0ZS5pbnB1dCAtIDEsXG4gICAgICB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5LFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dEFycmF5KTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXQtd3JhcHBlclwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9ja3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19fYm94XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19faW5uZXJcIj5cbiAgICAgICAgICAgICAgPEVkaXRIZWFkZXJSZW5kZXJcbiAgICAgICAgICAgICAgICBoZWFkZXJWYWx1ZT17dGhpcy5zdGF0ZS5wYWdlVGl0bGV9XG4gICAgICAgICAgICAgICAgc2VsZWN0TGFuZz17dGhpcy5zdGF0ZS5zZWxlY3RMYW5nVmFsdWV9XG4gICAgICAgICAgICAgICAgbGFuZ1RleHQ9e3RoaXMuc3RhdGUudGV4dExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2tzX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX3RpbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnNldERhdGUoKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyB0aGlzLmFkZFRleHRSZW5kZXIoKSB9XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19pbm5lclwiPlxuICAgICAgICAgICAgPEVkaXRJbnB1dFxuICAgICAgICAgICAgICBoZWFkZXJWYWx1ZT17dGhpcy5zdGF0ZS5wYWdlVGl0bGV9XG4gICAgICAgICAgICAgIGhlYWRlclZhbHVlQ2hhbmdlPXt0aGlzLnRpdGxlVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVkaXRTZWxlY3RMYW5nXG4gICAgICAgICAgICAgIHRleHRMYW5nVmFsdWU9e3RoaXMuc3RhdGUudGV4dExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgdGV4dExhbmdWYWx1ZUNoYW5nZT17dGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlfVxuICAgICAgICAgICAgICBzZWxlY3RMYW5nTGlzdD17dGhpcy5sYW5nTGlzdH1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ1ZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ1ZhbHVlQ2hhbmdlPXt0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlTGFuZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IHRoaXMuYWRkSW5wdXRSZW5kZXIoKSB9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19idXR0b24gZWRpdF9fYnV0dG9uLS1wbHVzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRJbnB1dH0+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0LnByb3BUeXBlcyA9IHtcbiAgcGFnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0VmFsdWU6IFByb3BUeXBlcy5hcnJheSxcbiAgc2VsZWN0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5hcnJheSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsIi8qKlxuICogQGZpbGUg44K/44Kk44OI44Or5o+P55S7XG4gKiBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEVkaXRMYW5nUmVuZGVyIGZyb20gJy4vRWRpdExhbmdSZW5kZXInO1xuXG5jbGFzcyBFZGl0SGVhZGVyUmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJibG9ja3NfX2hlYWRlclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmxvY2tzX190aXRsZVwiPnt0aGlzLnByb3BzLmhlYWRlclZhbHVlfTwvaDI+XG4gICAgICAgIDxFZGl0TGFuZ1JlbmRlciBcbiAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLnNlbGVjdExhbmd9XG4gICAgICAgICAgdGV4dD17dGhpcy5wcm9wcy5sYW5nVGV4dH1cbiAgICAgICAgLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0SGVhZGVyUmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgaGVhZGVyVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdExhbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmdUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRIZWFkZXJSZW5kZXI7XG4iLCIvKipcbiAqIEBmaWxlIOODhuOCreOCueODiOWFpeWKm+ODleOCqeODvOODoFxuICogXG4gKi9cblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlID0gdGhpcy52YWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2Uoc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5oZWFkZXJWYWx1ZUNoYW5nZShzZXRWYWx1ZSk7XG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtYmxvY2tcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWlucHV0XCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuODmuODvOOCuOOCv+OCpOODiOODq+OCkuWFpeWKm1wiIHZhbHVlPXt0aGlzLnByb3BzLmhlYWRlclZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHRoaXMudmFsdWVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGhlYWRlclZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGVhZGVyVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdElucHV0O1xuIiwiLyoqXG4gKiBAZmlsZSDjgr/jgqTjg4jjg6vmj4/nlLtcbiAqIFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0TGFuZ1JlbmRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYWJlbHNfX2xpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbGFiZWxzX19tYWluIGxhYmVsc19fbWFpbi0tJHt0aGlzLnByb3BzLmxhbmd9YH0+e3RoaXMucHJvcHMubGFuZ308L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhYmVsc19fbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BsYWJlbHNfX3N1YiBsYWJlbHNfX3N1Yi0tJHt0aGlzLnByb3BzLmxhbmd9YH0+e3RoaXMucHJvcHMudGV4dH08L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdExhbmdSZW5kZXIucHJvcFR5cGVzID0ge1xuICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRMYW5nUmVuZGVyO1xuIiwiLyoqXG4gKiBAZmlsZSDjg4bjgq3jgrnjg4jlhaXlipvjg5Xjgqnjg7zjg6Ao6YG45oqe5Z6LKVxuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRTZWxlY3RJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlSW5wdXQgPSB0aGlzLnJlbW92ZUlucHV0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCu+ODrOOCr+ODiOODnOODg+OCr+OCuVxuICAgKi9cbiAgaGFuZGxlQ2hhbmdlKHNldFZhbHVlLCB0ZXh0SWQpIHtcbiAgICBjb25zdCBpZE51bWJlciA9IE51bWJlcih0ZXh0SWQucmVwbGFjZSgnaW5wdXRJZC0nLCAnJykpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFZhbHVlKHNldFZhbHVlLCBpZE51bWJlcilcbiAgfVxuXG4gIHNldE9wdGlvbigpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0Lm1hcCgoX2l0ZW0sIF9udW1iZXIpID0+IChcbiAgICAgIDxvcHRpb24ga2V5PXtfbnVtYmVyfSB2YWx1ZT17X2l0ZW0udmFsdWV9PntfaXRlbS50ZXh0fTwvb3B0aW9uPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGlucHV0XG4gICAqL1xuICB2YWx1ZUNoYW5nZShzZXRWYWx1ZSwgdGV4dElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBzZXRWYWx1ZX0pO1xuICAgIGNvbnN0IGlkTnVtYmVyID0gTnVtYmVyKHRleHRJZC5yZXBsYWNlKCdpbnB1dElkLScsICcnKSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGV4dFZhbHVlQ2hhbmdlKHNldFZhbHVlLCBpZE51bWJlcik7XG4gIH1cblxuICByZW1vdmVJbnB1dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnfSk7XG4gICAgY29uc3QgaWROdW1iZXIgPSBOdW1iZXIodGhpcy5wcm9wcy50ZXh0SWQucmVwbGFjZSgnaW5wdXRJZC0nLCAnJykpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlUmVtb3ZlKGlkTnVtYmVyKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNldE9wdGlvbigpO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtYmxvY2tcIiBpZD17dGhpcy5wcm9wcy50ZXh0SWR9PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtdGl0bGVcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1zZWxlY3RcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSwgdGhpcy5wcm9wcy50ZXh0SWQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnNldE9wdGlvbigpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5paH6KiA44KS5YWl5YqbXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnZhbHVlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCB0aGlzLnByb3BzLnRleHRJZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tbWludXNcIiBvbkNsaWNrPXt0aGlzLnJlbW92ZUlucHV0fT48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0U2VsZWN0SW5wdXQucHJvcFR5cGVzID0ge1xuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdFZhbHVlTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICB0ZXh0VmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRJZDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0U2VsZWN0SW5wdXQ7XG4iLCIvKipcbiAqIEBmaWxlIOiogOiqnuODleOCqeODvOODoCjpgbjmip7lnospXG4gKiBcbiAqL1xuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0U2VsZWN0TGFuZyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCu+ODrOOCr+ODiOODnOODg+OCr+OCuVxuICAgKi9cbiAgaGFuZGxlQ2hhbmdlKHNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0TGFuZ1ZhbHVlQ2hhbmdlKHNldFZhbHVlKVxuICB9XG5cbiAgc2V0T3B0aW9uKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5zZWxlY3RMYW5nTGlzdC5tYXAoKF9pdGVtLCBfbnVtYmVyKSA9PiAoXG4gICAgICA8b3B0aW9uIGtleT17X251bWJlcn0gdmFsdWU9e19pdGVtfT57X2l0ZW19PC9vcHRpb24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogaW5wdXRcbiAgICovXG4gIHZhbHVlQ2hhbmdlKHNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGV4dExhbmdWYWx1ZUNoYW5nZShzZXRWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRPcHRpb24oKTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWJsb2NrXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC10aXRsZSBlZGl0X19pbnB1dC10aXRsZS0tbGFuZ1wiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXNlbGVjdFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zZWxlY3RMYW5nVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICB7dGhpcy5zZXRPcHRpb24oKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWlucHV0XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLplqLpgKPjg6/jg7zjg4njgpLlhaXliptcIiB2YWx1ZT17dGhpcy5wcm9wcy50ZXh0TGFuZ1ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHRoaXMudmFsdWVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRTZWxlY3RMYW5nLnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RMYW5nVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RMYW5nVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdExhbmdMaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIHRleHRMYW5nVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0TGFuZ1ZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRTZWxlY3RMYW5nO1xuIiwiLyoqXG4gKiBAZmlsZSDjgr/jgqTjg4jjg6vmj4/nlLtcbiAqIFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0VGV4dFJlbmRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIOacrOaWh+OCqOODquOCouOBruODkeODvOODhFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXJUZXh0QmxvY2soKSB7XG4gICAgbGV0IGJsb2NrID0gJyc7XG5cbiAgICBzd2l0Y2godGhpcy5wcm9wcy5zZWxlY3RWYWx1ZSkge1xuXG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzBdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxoMyBjbGFzc05hbWU9XCJibG9ja3NfX3RpdGxlXCI+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvaDM+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbMV0udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fZGVzY3JpcHRpb24tdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFsyXS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8cD57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9wPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzNdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxwcmUgY2xhc3NOYW1lPVwiYmxvY2tzX19jb2RlXCI+PGNvZGUgY2xhc3NOYW1lPVwicnVieVwiPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L2NvZGU+PC9wcmU+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbNF0udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2NvZGUtcHJldmlld1wiPjxjb2RlIGNsYXNzTmFtZT1cImJsb2Nrc19fY29kZS1wcmV2aWV3LXRleHRcIj48cD57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9wPjwvY29kZT48L2Rpdj47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBibG9jayA9IDxoMyBjbGFzc05hbWU9XCJibG9ja3NfX3RpdGxlXCI+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvaDM+O1xuICAgICAgICBicmVhaztcbiAgIH1cblxuICAgIHJldHVybiBibG9jaztcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19fcGFyYWdyYXBoXCIgaWQ9e3RoaXMucHJvcHMudGV4dElkfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlclRleHRCbG9jaygpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0VGV4dFJlbmRlci5wcm9wVHlwZXMgPSB7XG4gIHRleHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFZhbHVlTGlzdDogUHJvcFR5cGVzLmFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRUZXh0UmVuZGVyO1xuIiwiaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5jb25zdCBzb2NrZXRGbiA9ICgpID0+IHtcblxuICBjb25zdCBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcblxuICBzb2NrZXQub24oJ3JlbG9hZCcsICgpID0+IHtcbiAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJyk7XG4gIH0pO1xufTtcblxuc29ja2V0Rm4oKTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=
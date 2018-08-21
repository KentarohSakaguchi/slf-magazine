/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
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
/******/
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
    _this.editClose = _this.editClose.bind(_this);
    _this.onRec = _this.onRec.bind(_this);
    _this.cancel = _this.cancel.bind(_this);

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
      input: 0,
      activeClass: '',
      submitClass: ''
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

    /**
     * edit項目を非表示に
     */

  }, {
    key: 'editClose',
    value: function editClose() {
      if (this.state.activeClass !== 'is-hide') {
        this.setState({ activeClass: 'is-hide' });
      } else {
        this.setState({ activeClass: '' });
      }
    }

    /**
     * 記録ボタン(hidenにvalueをset)
     */

  }, {
    key: 'onRec',
    value: function onRec() {
      var saveTarget = document.getElementsByClassName('blocks');
      var saveHtml = saveTarget[0].outerHTML;
      var saveHtmlSet = document.getElementById('js-saveHtml');
      saveHtmlSet.setAttribute('value', saveHtml);

      if (this.state.submitClass !== 'is-show') {
        this.setState({ submitClass: 'is-show' });
      }
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      if (this.state.submitClass === 'is-show') {
        this.setState({ submitClass: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.textArray);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'edit-wrapper' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'hidden', name: 'save', id: 'js-saveHtml' }),
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
          { className: 'edit ' + this.state.activeClass },
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
            this.addInputRender()
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'edit__button-wrapper' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
              type: 'button',
              className: 'edit__button edit__button--close',
              onClick: this.editClose }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
              type: 'button',
              className: 'edit__button edit__button--plus',
              onClick: this.addInput }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
              type: 'button',
              className: 'edit__button edit__button--rec',
              onClick: this.onRec })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'edit__button-wrapper edit__button-wrapper--submit ' + this.state.submitClass },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'button-wrapper' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                {
                  type: 'submit',
                  className: 'button button--submit' },
                'SUBMIT'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                {
                  type: 'button',
                  className: 'button button--ng',
                  onClick: this.cancel },
                'CANCEL'
              )
            )
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
  textId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  valueRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
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
  selectValueList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  textId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21tb24vY29tbW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9UZXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9lZGl0L0VkaXQuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRIZWFkZXJSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdExhbmdSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRUZXh0UmVuZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL21vZHVsZXMvU29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInRlc3RzIiwiaGxqcyIsImluaXRIaWdobGlnaHRpbmdPbkxvYWQiLCJqc29uIiwiVHNldCIsInByb3BzIiwic3RhdGUiLCJ0ZXh0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImRhdGEiLCJuYW1lIiwiY2F0Y2giLCJ0ZXN0IiwiYmluZCIsIkVkaXQiLCJ0aXRsZVZhbHVlQ2hhbmdlIiwidGV4dFZhbHVlQ2hhbmdlIiwic2VsZWN0VmFsdWVDaGFuZ2UiLCJ0ZXh0TGFuZ1ZhbHVlQ2hhbmdlIiwic2VsZWN0VmFsdWVDaGFuZ2VMYW5nIiwiYWRkSW5wdXQiLCJhZGRJbnB1dFJlbmRlciIsImFkZFRleHRSZW5kZXIiLCJ0ZXh0VmFsdWVDaGFuZ2VSZW1vdmUiLCJlZGl0Q2xvc2UiLCJvblJlYyIsImNhbmNlbCIsInNlbGVjdFZhbHVlTGlzdCIsInZhbHVlIiwibGFuZ0xpc3QiLCJhZGRJbnB1dEFycmF5IiwiYWRkVGV4dEFycmF5IiwidGV4dEFycmF5Iiwic2VsZWN0QXJyYXkiLCJwYWdlVGl0bGUiLCJ0ZXh0VmFsdWUiLCJzZWxlY3RWYWx1ZSIsInRleHRMYW5nVmFsdWUiLCJzZWxlY3RMYW5nVmFsdWUiLCJpbnB1dCIsImFjdGl2ZUNsYXNzIiwic3VibWl0Q2xhc3MiLCJhZGRGbGciLCJ2YWx1ZUlkIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInNldERhdGVWYWx1ZSIsInB1c2giLCJtYXAiLCJfdmFsdWUiLCJfaW5kZXgiLCJyZW1vdmVJZCIsInNwbGljZSIsInBvcCIsInNhdmVUYXJnZXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2F2ZUh0bWwiLCJvdXRlckhUTUwiLCJzYXZlSHRtbFNldCIsInNldEF0dHJpYnV0ZSIsInNldERhdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsIkVkaXRIZWFkZXJSZW5kZXIiLCJoZWFkZXJWYWx1ZSIsInNlbGVjdExhbmciLCJsYW5nVGV4dCIsIkVkaXRJbnB1dCIsInZhbHVlQ2hhbmdlIiwic2V0VmFsdWUiLCJoZWFkZXJWYWx1ZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmdW5jIiwiRWRpdExhbmdSZW5kZXIiLCJsYW5nIiwiRWRpdFNlbGVjdElucHV0IiwiaGFuZGxlQ2hhbmdlIiwicmVtb3ZlSW5wdXQiLCJ0ZXh0SWQiLCJpZE51bWJlciIsIk51bWJlciIsInJlcGxhY2UiLCJpdGVtcyIsIl9pdGVtIiwiX251bWJlciIsInZhbHVlUmVtb3ZlIiwic2V0T3B0aW9uIiwiRWRpdFNlbGVjdExhbmciLCJzZWxlY3RMYW5nVmFsdWVDaGFuZ2UiLCJzZWxlY3RMYW5nTGlzdCIsIkVkaXRUZXh0UmVuZGVyIiwiYmxvY2siLCJyZW5kZXJUZXh0QmxvY2siLCJzb2NrZXRGbiIsInNvY2tldCIsImlvIiwiY29ubmVjdCIsIm9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPQyxTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBQWI7QUFDQTs7QUFFQSxJQUFJLENBQUNGLElBQUQsRUFBTyxDQUFQLE1BQWMsSUFBbEIsRUFBd0I7QUFDdEJHLEVBQUEsZ0RBQUFBLENBQVNDLE1BQVQsQ0FDRSwyREFBQyw0REFBRCxPQURGLEVBQ1lKLElBRFo7QUFHRDs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNSyxRQUFRSixTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWQ7O0FBRUEsSUFBSSxDQUFDRyxLQUFELEVBQVEsQ0FBUixNQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRixFQUFBLGdEQUFBQSxDQUFTQyxNQUFULENBQ0UsMkRBQUMsdURBQUQsT0FERixFQUNZQyxLQURaO0FBR0Q7O0FBR0QsbURBQUFDLENBQUtDLHNCQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLHdCQUFiOztJQUVNQyxJOzs7QUFFSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTTtBQURLLEtBQWI7QUFGaUI7QUFLbEI7Ozs7MkJBRU07QUFBQTs7QUFFTEMsTUFBQSw0Q0FBQUEsQ0FDR0MsR0FESCxDQUNPTixJQURQLEVBRUdPLElBRkgsQ0FFUSxVQUFDQyxPQUFELEVBQWE7QUFDZkMsZ0JBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLGVBQUtHLFFBQUwsQ0FBYztBQUNaUCxnQkFBTUksUUFBUUksSUFBUixDQUFhQztBQURQLFNBQWQ7QUFHRCxPQVBMLEVBUUlDLEtBUkosQ0FRVSxVQUFDTixPQUFELEVBQWE7QUFDbkJDLGdCQUFRQyxHQUFSLENBQVlGLE9BQVo7QUFDRCxPQVZIO0FBV0Q7Ozs2QkFFUTtBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVEsV0FBVSxRQUFsQixFQUEyQixTQUFTLEtBQUtPLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBcEM7QUFBMkQsYUFBS2IsS0FBTCxDQUFXQztBQUF0RSxPQUFQO0FBQ0Q7Ozs7RUExQmdCLCtDOztBQThCbkIsK0RBQWVILElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0lBRU1nQixJOzs7QUFFSixnQkFBWWYsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUVYQSxLQUZXOztBQUlqQixVQUFLZ0IsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JGLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSCxJQUFyQixPQUF2QjtBQUNBLFVBQUtJLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCSixJQUF2QixPQUF6QjtBQUNBLFVBQUtLLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCTCxJQUF6QixPQUEzQjtBQUNBLFVBQUtNLHFCQUFMLEdBQTZCLE1BQUtBLHFCQUFMLENBQTJCTixJQUEzQixPQUE3QjtBQUNBLFVBQUtPLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjUCxJQUFkLE9BQWhCO0FBQ0EsVUFBS1EsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CUixJQUFwQixPQUF0QjtBQUNBLFVBQUtTLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQlQsSUFBbkIsT0FBckI7QUFDQSxVQUFLVSxxQkFBTCxHQUE2QixNQUFLQSxxQkFBTCxDQUEyQlYsSUFBM0IsT0FBN0I7QUFDQSxVQUFLVyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZVgsSUFBZixPQUFqQjtBQUNBLFVBQUtZLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdaLElBQVgsT0FBYjtBQUNBLFVBQUthLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVliLElBQVosT0FBZDs7QUFFQSxVQUFLYyxlQUFMLEdBQXVCLENBQ3JCLEVBQUVDLE9BQU8sSUFBVCxFQUFlM0IsTUFBTSxNQUFyQixFQURxQixFQUVyQixFQUFFMkIsT0FBTyxJQUFULEVBQWUzQixNQUFNLE1BQXJCLEVBRnFCLEVBR3JCLEVBQUUyQixPQUFPLEdBQVQsRUFBYzNCLE1BQU0sSUFBcEIsRUFIcUIsRUFJckIsRUFBRTJCLE9BQU8sTUFBVCxFQUFpQjNCLE1BQU0sS0FBdkIsRUFKcUIsRUFLckIsRUFBRTJCLE9BQU8sS0FBVCxFQUFnQjNCLE1BQU0sTUFBdEIsRUFMcUIsQ0FBdkI7O0FBUUEsVUFBSzRCLFFBQUwsR0FBZ0IsQ0FBQyxZQUFELEVBQWUsS0FBZixFQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxRQUF0QyxFQUFnRCxJQUFoRCxFQUFzRCxLQUF0RCxDQUFoQjs7QUFFQSxVQUFLQyxhQUFMLEdBQXFCLENBQUMsQ0FBRCxDQUFyQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsQ0FBQyxDQUFELENBQXBCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixFQUFqQixDQTdCaUIsQ0E2Qkk7QUFDckIsVUFBS0MsV0FBTCxHQUFtQixDQUFDLE1BQUtOLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JDLEtBQXpCLENBQW5CLENBOUJpQixDQThCbUM7O0FBRXBELFVBQUs1QixLQUFMLEdBQWE7QUFDWGtDLGlCQUFXLEVBREE7QUFFWEMsaUJBQVcsTUFBS0gsU0FGTDtBQUdYSSxtQkFBYSxNQUFLSCxXQUhQO0FBSVhJLHFCQUFlLEVBSko7QUFLWEMsdUJBQWlCLE1BQUtULFFBQUwsQ0FBYyxDQUFkLENBTE47QUFNWFUsYUFBTyxDQU5JO0FBT1hDLG1CQUFhLEVBUEY7QUFRWEMsbUJBQWE7QUFSRixLQUFiOztBQVdBLFVBQUtDLE1BQUwsR0FBYyxLQUFkO0FBM0NpQjtBQTRDbEI7O0FBRUQ7Ozs7Ozs7cUNBR2lCZCxLLEVBQU87QUFDdEIsV0FBS3BCLFFBQUwsQ0FBYyxFQUFFMEIsV0FBV04sS0FBYixFQUFkO0FBQ0Q7O0FBRUQ7Ozs7OztvQ0FHZ0JBLEssRUFBT2UsTyxFQUFTO0FBQzlCLFdBQUtYLFNBQUwsQ0FBZVcsT0FBZixJQUEwQmYsS0FBMUI7QUFDQSxXQUFLcEIsUUFBTCxDQUFjLEVBQUUyQixXQUFXLEtBQUtILFNBQWxCLEVBQWQ7QUFDRDs7QUFFRDs7Ozs7O3dDQUdvQkosSyxFQUFPO0FBQ3pCLFdBQUtwQixRQUFMLENBQWMsRUFBRTZCLGVBQWVULEtBQWpCLEVBQWQ7QUFDRDs7QUFFRDs7Ozs7O3NDQUdrQkEsSyxFQUFPZSxPLEVBQVM7QUFDaEMsV0FBS1YsV0FBTCxDQUFpQlUsT0FBakIsSUFBNEJmLEtBQTVCO0FBQ0EsV0FBS3BCLFFBQUwsQ0FBYyxFQUFFNEIsYUFBYSxLQUFLSCxXQUFwQixFQUFkO0FBQ0Q7O0FBRUQ7Ozs7OzswQ0FHc0JMLEssRUFBTztBQUMzQixXQUFLcEIsUUFBTCxDQUFjLEVBQUU4QixpQkFBaUJWLEtBQW5CLEVBQWQ7QUFDRDs7QUFFRDs7Ozs7OzhCQUdVO0FBQ1IsVUFBTWdCLE9BQU8sSUFBSUMsSUFBSixFQUFiO0FBQ0EsVUFBTUMsT0FBT0YsS0FBS0csV0FBTCxFQUFiO0FBQ0EsVUFBTUMsUUFBUUosS0FBS0ssUUFBTCxLQUFrQixDQUFoQztBQUNBLFVBQU1DLE1BQU1OLEtBQUtPLE9BQUwsRUFBWjtBQUNBLFVBQU1DLGVBQWtCTixJQUFsQixTQUEwQkUsS0FBMUIsU0FBbUNFLEdBQXpDO0FBQ0EsYUFBT0UsWUFBUDtBQUNEOztBQUVEOzs7Ozs7K0JBR1c7QUFDVCxXQUFLNUMsUUFBTCxDQUFjLEVBQUUrQixPQUFPLEtBQUt2QyxLQUFMLENBQVd1QyxLQUFYLEdBQW1CLENBQTVCLEVBQWQ7QUFDQSxXQUFLRyxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVEOzs7Ozs7cUNBR2lCO0FBQUE7O0FBRWYsVUFBSSxLQUFLQSxNQUFULEVBQWlCO0FBQ2YsYUFBS1osYUFBTCxDQUFtQnVCLElBQW5CLENBQXdCLEtBQUtyRCxLQUFMLENBQVd1QyxLQUFuQztBQUNEOztBQUVELGFBQU8sS0FBS1QsYUFBTCxDQUFtQndCLEdBQW5CLENBQXVCLFVBQUNDLE1BQUQsRUFBU0MsTUFBVDtBQUFBLGVBQzVCLE9BQUtkLE1BQUwsR0FBYyxLQUFkLEVBQ0EsMkRBQUMsa0VBQUQ7QUFDRSxlQUFLYyxNQURQO0FBRUUsK0JBQW1CQSxNQUZyQjtBQUdFLHFCQUFXLE9BQUt4RCxLQUFMLENBQVdtQyxTQUFYLENBQXFCcUIsTUFBckIsQ0FIYjtBQUlFLDJCQUFpQixPQUFLeEMsZUFKeEI7QUFLRSwyQkFBaUIsT0FBS1csZUFMeEI7QUFNRSx1QkFBYSxPQUFLVixpQkFOcEI7QUFPRSx1QkFBYSxPQUFLTTtBQVBwQixVQUY0QjtBQUFBLE9BQXZCLENBQVA7QUFZRDs7QUFFRDs7Ozs7O29DQUdnQjtBQUFBOztBQUVkLFVBQUksS0FBS21CLE1BQVQsRUFBaUI7QUFDZixhQUFLWCxZQUFMLENBQWtCc0IsSUFBbEIsQ0FBdUIsS0FBS3JELEtBQUwsQ0FBV3VDLEtBQWxDO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLUixZQUFMLENBQWtCdUIsR0FBbEIsQ0FBc0IsVUFBQ0MsTUFBRCxFQUFTQyxNQUFUO0FBQUEsZUFDM0IsMkRBQUMsaUVBQUQ7QUFDRSxlQUFLQSxNQURQO0FBRUUsbUNBQXVCQSxNQUZ6QjtBQUdFLHFCQUFXLE9BQUt4RCxLQUFMLENBQVdtQyxTQUFYLENBQXFCcUIsTUFBckIsQ0FIYjtBQUlFLHVCQUFhLE9BQUt4RCxLQUFMLENBQVdvQyxXQUFYLENBQXVCb0IsTUFBdkIsQ0FKZjtBQUtFLDJCQUFpQixPQUFLN0I7QUFMeEIsVUFEMkI7QUFBQSxPQUF0QixDQUFQO0FBU0Q7O0FBRUQ7Ozs7OzswQ0FHc0I4QixRLEVBQVU7O0FBRTlCLFdBQUt6QixTQUFMLENBQWUwQixNQUFmLENBQXNCRCxRQUF0QixFQUFnQyxDQUFoQztBQUNBLFdBQUszQixhQUFMLENBQW1CNkIsR0FBbkI7QUFDQSxXQUFLNUIsWUFBTCxDQUFrQjRCLEdBQWxCOztBQUVBLFdBQUtuRCxRQUFMLENBQWM7QUFDWitCLGVBQU8sS0FBS3ZDLEtBQUwsQ0FBV3VDLEtBQVgsR0FBbUIsQ0FEZDtBQUVaSixtQkFBVyxLQUFLSDtBQUZKLE9BQWQ7QUFJRDs7QUFFRDs7Ozs7O2dDQUdZO0FBQ1YsVUFBSSxLQUFLaEMsS0FBTCxDQUFXd0MsV0FBWCxLQUEyQixTQUEvQixFQUEwQztBQUN4QyxhQUFLaEMsUUFBTCxDQUFjLEVBQUVnQyxhQUFhLFNBQWYsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtoQyxRQUFMLENBQWMsRUFBRWdDLGFBQWEsRUFBZixFQUFkO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7OzRCQUdRO0FBQ04sVUFBTW9CLGFBQWF0RSxTQUFTdUUsc0JBQVQsQ0FBZ0MsUUFBaEMsQ0FBbkI7QUFDQSxVQUFNQyxXQUFXRixXQUFXLENBQVgsRUFBY0csU0FBL0I7QUFDQSxVQUFNQyxjQUFjMUUsU0FBU0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBeUUsa0JBQVlDLFlBQVosQ0FBeUIsT0FBekIsRUFBa0NILFFBQWxDOztBQUVBLFVBQUksS0FBSzlELEtBQUwsQ0FBV3lDLFdBQVgsS0FBMkIsU0FBL0IsRUFBMEM7QUFDeEMsYUFBS2pDLFFBQUwsQ0FBYyxFQUFFaUMsYUFBYSxTQUFmLEVBQWQ7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUFJLEtBQUt6QyxLQUFMLENBQVd5QyxXQUFYLEtBQTJCLFNBQS9CLEVBQTBDO0FBQ3hDLGFBQUtqQyxRQUFMLENBQWMsRUFBRWlDLGFBQWEsRUFBZixFQUFkO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1BuQyxjQUFRQyxHQUFSLENBQVksS0FBS3lCLFNBQWpCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDRSw4RUFBTyxNQUFLLFFBQVosRUFBcUIsTUFBSyxNQUExQixFQUFpQyxJQUFHLGFBQXBDLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBUyxXQUFVLFFBQW5CO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsZUFBZjtBQUNFLHlFQUFDLG1FQUFEO0FBQ0UsNkJBQWEsS0FBS2hDLEtBQUwsQ0FBV2tDLFNBRDFCO0FBRUUsNEJBQVksS0FBS2xDLEtBQUwsQ0FBV3NDLGVBRnpCO0FBR0UsMEJBQVUsS0FBS3RDLEtBQUwsQ0FBV3FDO0FBSHZCLGdCQURGO0FBTUU7QUFBQTtBQUFBLGtCQUFTLFdBQVUsY0FBbkI7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUkseUJBQUs2QixPQUFMO0FBQUo7QUFERixpQkFERjtBQUlJLHFCQUFLNUMsYUFBTDtBQUpKO0FBTkY7QUFERjtBQURGLFNBRkY7QUFvQkU7QUFBQTtBQUFBLFlBQUsscUJBQW1CLEtBQUt0QixLQUFMLENBQVd3QyxXQUFuQztBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZjtBQUNFLHVFQUFDLDREQUFEO0FBQ0UsMkJBQWEsS0FBS3hDLEtBQUwsQ0FBV2tDLFNBRDFCO0FBRUUsaUNBQW1CLEtBQUtuQjtBQUYxQixjQURGO0FBS0UsdUVBQUMsaUVBQUQ7QUFDRSw2QkFBZSxLQUFLZixLQUFMLENBQVdxQyxhQUQ1QjtBQUVFLG1DQUFxQixLQUFLbkIsbUJBRjVCO0FBR0UsOEJBQWdCLEtBQUtXLFFBSHZCO0FBSUUsK0JBQWlCLEtBQUs3QixLQUFMLENBQVdzQyxlQUo5QjtBQUtFLHFDQUF1QixLQUFLbkI7QUFMOUIsY0FMRjtBQVlJLGlCQUFLRSxjQUFMO0FBWkosV0FERjtBQWVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUNFLG9CQUFLLFFBRFA7QUFFRSx5QkFBVSxrQ0FGWjtBQUdFLHVCQUFTLEtBQUtHLFNBSGhCLEdBREY7QUFNRTtBQUNFLG9CQUFLLFFBRFA7QUFFRSx5QkFBVSxpQ0FGWjtBQUdFLHVCQUFTLEtBQUtKLFFBSGhCLEdBTkY7QUFXRTtBQUNFLG9CQUFLLFFBRFA7QUFFRSx5QkFBVSxnQ0FGWjtBQUdFLHVCQUFTLEtBQUtLLEtBSGhCO0FBWEYsV0FmRjtBQWdDRTtBQUFBO0FBQUEsY0FBSyxrRUFBZ0UsS0FBS3pCLEtBQUwsQ0FBV3lDLFdBQWhGO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRSx3QkFBSyxRQURQO0FBRUUsNkJBQVUsdUJBRlo7QUFBQTtBQUFBLGVBREY7QUFNRTtBQUFBO0FBQUE7QUFDRSx3QkFBSyxRQURQO0FBRUUsNkJBQVUsbUJBRlo7QUFHRSwyQkFBUyxLQUFLZixNQUhoQjtBQUFBO0FBQUE7QUFORjtBQURGO0FBaENGO0FBcEJGLE9BREY7QUF3RUQ7Ozs7RUE1UWdCLCtDOztBQWdSbkJaLEtBQUtxRCxTQUFMLEdBQWlCO0FBQ2ZqQyxhQUFXLGlEQUFBa0MsQ0FBVUMsTUFETjtBQUVmbEMsYUFBVyxpREFBQWlDLENBQVVFLEtBRk47QUFHZmxDLGVBQWEsaURBQUFnQyxDQUFVQyxNQUhSO0FBSWZwRSxRQUFNLGlEQUFBbUUsQ0FBVUU7QUFKRCxDQUFqQjs7QUFPQSwrREFBZXhELElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqU0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7SUFFTXlELGdCOzs7Ozs7Ozs7Ozs2QkFFSztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQVEsV0FBVSxnQkFBbEI7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLGVBQWQ7QUFBK0IsZUFBS3hFLEtBQUwsQ0FBV3lFO0FBQTFDLFNBREY7QUFFRSxtRUFBQyx1REFBRDtBQUNFLGdCQUFNLEtBQUt6RSxLQUFMLENBQVcwRSxVQURuQjtBQUVFLGdCQUFNLEtBQUsxRSxLQUFMLENBQVcyRTtBQUZuQjtBQUZGLE9BREY7QUFTRDs7OztFQVo0QiwrQzs7QUFnQi9CSCxpQkFBaUJKLFNBQWpCLEdBQTZCO0FBQzNCSyxlQUFhLGlEQUFBSixDQUFVQyxNQURJO0FBRTNCSSxjQUFZLGlEQUFBTCxDQUFVQyxNQUZLO0FBRzNCSyxZQUFVLGlEQUFBTixDQUFVQztBQUhPLENBQTdCOztBQU1BLCtEQUFlRSxnQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBOzs7OztBQU1BO0FBQ0E7O0lBRU1JLFM7OztBQUVKLHFCQUFZNUUsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUVqQixVQUFLNkUsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCL0QsSUFBakIsT0FBbkI7QUFGaUI7QUFHbEI7Ozs7Z0NBRVdnRSxRLEVBQVU7QUFDcEIsYUFBTyxLQUFLOUUsS0FBTCxDQUFXK0UsaUJBQVgsQ0FBNkJELFFBQTdCLENBQVA7QUFDRDs7OzZCQUdRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQU8sV0FBVSxtQkFBakI7QUFDRSxnRkFBTyxXQUFVLGFBQWpCLEVBQStCLE1BQUssTUFBcEMsRUFBMkMsYUFBWSw4REFBdkQsRUFBb0UsT0FBTyxLQUFLOUUsS0FBTCxDQUFXeUUsV0FBdEYsRUFBbUcsVUFBVSxrQkFBQ08sQ0FBRDtBQUFBLHFCQUFPLE9BQUtILFdBQUwsQ0FBaUJHLEVBQUVDLE1BQUYsQ0FBU3BELEtBQTFCLENBQVA7QUFBQSxhQUE3RztBQURGO0FBREYsT0FERjtBQU9EOzs7O0VBcEJxQiwrQzs7QUF3QnhCK0MsVUFBVVIsU0FBVixHQUFzQjtBQUNwQlcscUJBQW1CLGlEQUFBVixDQUFVYSxJQURUO0FBRXBCVCxlQUFhLGlEQUFBSixDQUFVQztBQUZILENBQXRCOztBQUtBLCtEQUFlTSxTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7O0FBS0E7QUFDQTs7SUFFTU8sYzs7Ozs7Ozs7Ozs7NkJBRUs7QUFDUCxhQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFHLFdBQVUsY0FBYixFQUE0QixNQUFLLEdBQWpDO0FBQ0U7QUFBQTtBQUFBLGNBQU0sMkNBQXlDLEtBQUtuRixLQUFMLENBQVdvRixJQUExRDtBQUFtRSxpQkFBS3BGLEtBQUwsQ0FBV29GO0FBQTlFO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFHLFdBQVUsY0FBYixFQUE0QixNQUFLLEdBQWpDO0FBQ0U7QUFBQTtBQUFBLGNBQU0seUNBQXVDLEtBQUtwRixLQUFMLENBQVdvRixJQUF4RDtBQUFpRSxpQkFBS3BGLEtBQUwsQ0FBV0U7QUFBNUU7QUFERjtBQUpGLE9BREo7QUFVRDs7OztFQWIwQiwrQzs7QUFpQjdCaUYsZUFBZWYsU0FBZixHQUEyQjtBQUN6QmdCLFFBQU0saURBQUFmLENBQVVDLE1BRFM7QUFFekJwRSxRQUFNLGlEQUFBbUUsQ0FBVUM7QUFGUyxDQUEzQjs7QUFLQSwrREFBZWEsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBOzs7OztBQUtBO0FBQ0E7O0lBRU1FLGU7OztBQUVKLDJCQUFZckYsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNYQSxLQURXOztBQUVqQixVQUFLc0YsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCeEUsSUFBbEIsT0FBcEI7QUFDQSxVQUFLeUUsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCekUsSUFBakIsT0FBbkI7O0FBRUEsVUFBS2IsS0FBTCxHQUFhO0FBQ1g0QixhQUFPO0FBREksS0FBYjtBQUxpQjtBQVFsQjs7QUFFRDs7Ozs7OztpQ0FHYWlELFEsRUFBVVUsTSxFQUFRO0FBQzdCLFVBQU1DLFdBQVdDLE9BQU9GLE9BQU9HLE9BQVAsQ0FBZSxVQUFmLEVBQTJCLEVBQTNCLENBQVAsQ0FBakI7QUFDQSxhQUFPLEtBQUszRixLQUFMLENBQVdxQyxXQUFYLENBQXVCeUMsUUFBdkIsRUFBaUNXLFFBQWpDLENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUcsUUFBUSxLQUFLNUYsS0FBTCxDQUFXNEIsZUFBWCxDQUEyQjJCLEdBQTNCLENBQStCLFVBQUNzQyxLQUFELEVBQVFDLE9BQVI7QUFBQSxlQUMzQztBQUFBO0FBQUEsWUFBUSxLQUFLQSxPQUFiLEVBQXNCLE9BQU9ELE1BQU1oRSxLQUFuQztBQUEyQ2dFLGdCQUFNM0Y7QUFBakQsU0FEMkM7QUFBQSxPQUEvQixDQUFkOztBQUlBLGFBQU8wRixLQUFQO0FBQ0Q7O0FBRUQ7Ozs7OztnQ0FHWWQsUSxFQUFVVSxNLEVBQVE7QUFDNUIsV0FBSy9FLFFBQUwsQ0FBYyxFQUFFb0IsT0FBT2lELFFBQVQsRUFBZDtBQUNBLFVBQU1XLFdBQVdDLE9BQU9GLE9BQU9HLE9BQVAsQ0FBZSxVQUFmLEVBQTJCLEVBQTNCLENBQVAsQ0FBakI7QUFDQSxhQUFPLEtBQUszRixLQUFMLENBQVdpQixlQUFYLENBQTJCNkQsUUFBM0IsRUFBcUNXLFFBQXJDLENBQVA7QUFDRDs7O2tDQUVhO0FBQ1osV0FBS2hGLFFBQUwsQ0FBYyxFQUFFb0IsT0FBTyxFQUFULEVBQWQ7QUFDQSxVQUFNNEQsV0FBV0MsT0FBTyxLQUFLMUYsS0FBTCxDQUFXd0YsTUFBWCxDQUFrQkcsT0FBbEIsQ0FBMEIsVUFBMUIsRUFBc0MsRUFBdEMsQ0FBUCxDQUFqQjtBQUNBLGFBQU8sS0FBSzNGLEtBQUwsQ0FBVytGLFdBQVgsQ0FBdUJOLFFBQXZCLENBQVA7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsV0FBS08sU0FBTDtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxtQkFBZixFQUFtQyxJQUFJLEtBQUtoRyxLQUFMLENBQVd3RixNQUFsRDtBQUNFO0FBQUE7QUFBQSxZQUFPLFdBQVUsbUJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UseUJBQVUsb0JBRFo7QUFFRSx3QkFBVSxrQkFBQ1IsQ0FBRDtBQUFBLHVCQUFPLE9BQUtNLFlBQUwsQ0FBa0JOLEVBQUVDLE1BQUYsQ0FBU3BELEtBQTNCLEVBQWtDLE9BQUs3QixLQUFMLENBQVd3RixNQUE3QyxDQUFQO0FBQUE7QUFGWjtBQUlHLGlCQUFLUSxTQUFMO0FBSkg7QUFERixTQURGO0FBU0U7QUFBQTtBQUFBLFlBQU8sV0FBVSxtQkFBakI7QUFDRTtBQUNFLHVCQUFVLGFBRFo7QUFFRSxrQkFBSyxNQUZQO0FBR0UseUJBQVksZ0NBSGQ7QUFJRSxtQkFBTyxLQUFLL0YsS0FBTCxDQUFXNEIsS0FKcEI7QUFLRSxzQkFBVSxrQkFBQ21ELENBQUQ7QUFBQSxxQkFBTyxPQUFLSCxXQUFMLENBQWlCRyxFQUFFQyxNQUFGLENBQVNwRCxLQUExQixFQUFpQyxPQUFLN0IsS0FBTCxDQUFXd0YsTUFBNUMsQ0FBUDtBQUFBO0FBTFo7QUFERixTQVRGO0FBa0JFLCtFQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGtDQUFoQyxFQUFtRSxTQUFTLEtBQUtELFdBQWpGO0FBbEJGLE9BREY7QUFzQkQ7Ozs7RUFuRTJCLCtDOztBQXVFOUJGLGdCQUFnQmpCLFNBQWhCLEdBQTRCO0FBQzFCL0IsZUFBYSxpREFBQWdDLENBQVVhLElBREc7QUFFMUJ0RCxtQkFBaUIsaURBQUF5QyxDQUFVRSxLQUZEO0FBRzFCdEQsbUJBQWlCLGlEQUFBb0QsQ0FBVWEsSUFIRDtBQUkxQjlDLGFBQVcsaURBQUFpQyxDQUFVQyxNQUpLO0FBSzFCa0IsVUFBUSxpREFBQW5CLENBQVVDLE1BTFE7QUFNMUJ5QixlQUFhLGlEQUFBMUIsQ0FBVWE7QUFORyxDQUE1Qjs7QUFTQSwrREFBZUcsZUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOzs7OztBQU1BO0FBQ0E7O0lBRU1ZLGM7OztBQUVKLDBCQUFZakcsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixVQUFLc0YsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCeEUsSUFBbEIsT0FBcEI7QUFGaUI7QUFHbEI7O0FBRUQ7Ozs7Ozs7aUNBR2FnRSxRLEVBQVU7QUFDckIsYUFBTyxLQUFLOUUsS0FBTCxDQUFXa0cscUJBQVgsQ0FBaUNwQixRQUFqQyxDQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1jLFFBQVEsS0FBSzVGLEtBQUwsQ0FBV21HLGNBQVgsQ0FBMEI1QyxHQUExQixDQUE4QixVQUFDc0MsS0FBRCxFQUFRQyxPQUFSO0FBQUEsZUFDMUM7QUFBQTtBQUFBLFlBQVEsS0FBS0EsT0FBYixFQUFzQixPQUFPRCxLQUE3QjtBQUFxQ0E7QUFBckMsU0FEMEM7QUFBQSxPQUE5QixDQUFkOztBQUlBLGFBQU9ELEtBQVA7QUFDRDs7QUFFRDs7Ozs7O2dDQUdZZCxRLEVBQVU7QUFDcEIsYUFBTyxLQUFLOUUsS0FBTCxDQUFXbUIsbUJBQVgsQ0FBK0IyRCxRQUEvQixDQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFdBQUtrQixTQUFMO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQU8sV0FBVSwyQ0FBakI7QUFDRTtBQUFBO0FBQUE7QUFDRSx5QkFBVSxvQkFEWjtBQUVFLHFCQUFPLEtBQUtoRyxLQUFMLENBQVd1QyxlQUZwQjtBQUdFLHdCQUFVLGtCQUFDeUMsQ0FBRDtBQUFBLHVCQUFPLE9BQUtNLFlBQUwsQ0FBa0JOLEVBQUVDLE1BQUYsQ0FBU3BELEtBQTNCLENBQVA7QUFBQSxlQUhaO0FBSUcsaUJBQUttRSxTQUFMO0FBSkg7QUFERixTQURGO0FBU0U7QUFBQTtBQUFBLFlBQU8sV0FBVSxtQkFBakI7QUFDQSxnRkFBTyxXQUFVLGFBQWpCLEVBQStCLE1BQUssTUFBcEMsRUFBMkMsYUFBWSxrREFBdkQsRUFBa0UsT0FBTyxLQUFLaEcsS0FBTCxDQUFXc0MsYUFBcEYsRUFBbUcsVUFBVSxrQkFBQzBDLENBQUQ7QUFBQSxxQkFBTyxPQUFLSCxXQUFMLENBQWlCRyxFQUFFQyxNQUFGLENBQVNwRCxLQUExQixDQUFQO0FBQUEsYUFBN0c7QUFEQTtBQVRGLE9BREY7QUFlRDs7OztFQTlDMEIsK0M7O0FBa0Q3Qm9FLGVBQWU3QixTQUFmLEdBQTJCO0FBQ3pCL0IsZUFBYSxpREFBQWdDLENBQVVhLElBREU7QUFFekJnQix5QkFBdUIsaURBQUE3QixDQUFVYSxJQUZSO0FBR3pCM0MsbUJBQWlCLGlEQUFBOEIsQ0FBVUMsTUFIRjtBQUl6QjZCLGtCQUFnQixpREFBQTlCLENBQVVFLEtBSkQ7QUFLekJwRCx1QkFBcUIsaURBQUFrRCxDQUFVYSxJQUxOO0FBTXpCNUMsaUJBQWUsaURBQUErQixDQUFVQztBQU5BLENBQTNCOztBQVNBLCtEQUFlMkIsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBOzs7OztBQUtBO0FBQ0E7O0lBRU1HLGM7OztBQUVKOzs7QUFHQSwwQkFBWXBHLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwySEFDWEEsS0FEVztBQUVsQjs7OztzQ0FFaUI7QUFDaEIsVUFBSXFHLFFBQVEsRUFBWjs7QUFFQSxjQUFPLEtBQUtyRyxLQUFMLENBQVdxQyxXQUFsQjs7QUFFRSxhQUFLLEtBQUtyQyxLQUFMLENBQVc0QixlQUFYLENBQTJCLENBQTNCLEVBQThCQyxLQUFuQztBQUNFd0Usa0JBQVE7QUFBQTtBQUFBLGNBQUksV0FBVSxlQUFkO0FBQStCLGlCQUFLckcsS0FBTCxDQUFXb0M7QUFBMUMsV0FBUjtBQUNBO0FBQ0YsYUFBSyxLQUFLcEMsS0FBTCxDQUFXNEIsZUFBWCxDQUEyQixDQUEzQixFQUE4QkMsS0FBbkM7QUFDRXdFLGtCQUFRO0FBQUE7QUFBQSxjQUFJLFdBQVUsMkJBQWQ7QUFBMkMsaUJBQUtyRyxLQUFMLENBQVdvQztBQUF0RCxXQUFSO0FBQ0E7QUFDRixhQUFLLEtBQUtwQyxLQUFMLENBQVc0QixlQUFYLENBQTJCLENBQTNCLEVBQThCQyxLQUFuQztBQUNFd0Usa0JBQVE7QUFBQTtBQUFBO0FBQUksaUJBQUtyRyxLQUFMLENBQVdvQztBQUFmLFdBQVI7QUFDQTtBQUNGLGFBQUssS0FBS3BDLEtBQUwsQ0FBVzRCLGVBQVgsQ0FBMkIsQ0FBM0IsRUFBOEJDLEtBQW5DO0FBQ0V3RSxrQkFBUTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBOEI7QUFBQTtBQUFBLGdCQUFNLFdBQVUsTUFBaEI7QUFBd0IsbUJBQUtyRyxLQUFMLENBQVdvQztBQUFuQztBQUE5QixXQUFSO0FBQ0E7QUFDRixhQUFLLEtBQUtwQyxLQUFMLENBQVc0QixlQUFYLENBQTJCLENBQTNCLEVBQThCQyxLQUFuQztBQUNFd0Usa0JBQVE7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUFzQztBQUFBO0FBQUEsZ0JBQU0sV0FBVSwyQkFBaEI7QUFBNEM7QUFBQTtBQUFBO0FBQUkscUJBQUtyRyxLQUFMLENBQVdvQztBQUFmO0FBQTVDO0FBQXRDLFdBQVI7O0FBRUE7QUFDRjtBQUNFaUUsa0JBQVE7QUFBQTtBQUFBLGNBQUksV0FBVSxlQUFkO0FBQStCLGlCQUFLckcsS0FBTCxDQUFXb0M7QUFBMUMsV0FBUjtBQUNBO0FBcEJKOztBQXVCQSxhQUFPaUUsS0FBUDtBQUVEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsbUJBQWYsRUFBbUMsSUFBSSxLQUFLckcsS0FBTCxDQUFXd0YsTUFBbEQ7QUFDSSxhQUFLYyxlQUFMO0FBREosT0FERjtBQUtEOzs7O0VBN0MwQiwrQzs7QUFpRDdCRixlQUFlaEMsU0FBZixHQUEyQjtBQUN6QmhDLGFBQVcsaURBQUFpQyxDQUFVQyxNQURJO0FBRXpCakMsZUFBYSxpREFBQWdDLENBQVVDLE1BRkU7QUFHekIxQyxtQkFBaUIsaURBQUF5QyxDQUFVRSxLQUhGO0FBSXpCaUIsVUFBUSxpREFBQW5CLENBQVVDO0FBSk8sQ0FBM0I7O0FBT0EsK0RBQWU4QixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7QUFFQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVcsR0FBTTs7QUFFckIsTUFBTUMsU0FBUyx1REFBQUMsQ0FBR0MsT0FBSCxDQUFXLHVCQUFYLENBQWY7O0FBRUFGLFNBQU9HLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLFlBQU07QUFDeEI7QUFDQXBHLFlBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsR0FIRDtBQUlELENBUkQ7O0FBVUErRixXOzs7Ozs7Ozs7OztBQ1pBLGUiLCJmaWxlIjoiY29tbW9uLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29tbW9uXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbW1vbi9jb21tb24uanN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipcbiAqIEBmaWxlcyBjb21tb24uanN4XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJ1xuXG5pbXBvcnQgRWRpdCBmcm9tICcuLi9jb21wb25lbnQvZWRpdC9FZGl0JztcbmltcG9ydCBUZXN0IGZyb20gJy4uL2NvbXBvbmVudC9UZXN0Jztcbi8vIGltcG9ydCBNb3VudCBmcm9tICcuLi9jb21wb25lbnQvTW91bnQnO1xuXG5jb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWVkaXQnKTtcbi8vIGNvbnNvbGUubG9nKFtlZGl0XS5sZW5ndGgpO1xuXG5pZiAoW2VkaXRdWzBdICE9PSBudWxsKSB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8RWRpdCAvPiwgZWRpdFxuICApO1xufVxuXG4vLyBjb25zdCBtbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1lZGl0LW0nKTtcblxuLy8gaWYgKFtlZGl0XVswXSAhPT0gbnVsbCkge1xuLy8gICBSZWFjdERPTS5yZW5kZXIoXG4vLyAgICAgPE1vdW50IC8+LCBtbVxuLy8gICApO1xuLy8gfVxuXG5cbmNvbnN0IHRlc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcblxuaWYgKFt0ZXN0c11bMF0gIT09IG51bGwpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxUZXN0IC8+LCB0ZXN0c1xuICApO1xufVxuXG5cbmhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xuXG5cbmltcG9ydCAnLi4vbW9kdWxlcy9Tb2NrZXQnO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGpzb24gPSAnLi4vLi4vcmVjb3JkL3Rlc3QuanNvbic7XG5cbmNsYXNzIFRzZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0OiAn44GC44KT44GaISEnXG4gICAgfTtcbiAgfVxuXG4gIHRlc3QoKSB7XG5cbiAgICBheGlvc1xuICAgICAgLmdldChqc29uKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRleHQ6IHJlc3VsdHMuZGF0YS5uYW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApLmNhdGNoKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy50ZXN0LmJpbmQodGhpcyl9Pnt0aGlzLnN0YXRlLnRleHR9PC9idXR0b24+KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRzZXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEVkaXRIZWFkZXJSZW5kZXIgZnJvbSAnLi9jb21wb25lbnQvRWRpdEhlYWRlclJlbmRlcic7XG5pbXBvcnQgRWRpdFRleHRSZW5kZXIgZnJvbSAnLi9jb21wb25lbnQvRWRpdFRleHRSZW5kZXInO1xuXG5pbXBvcnQgRWRpdElucHV0IGZyb20gJy4vY29tcG9uZW50L0VkaXRJbnB1dCc7XG5pbXBvcnQgRWRpdFNlbGVjdElucHV0IGZyb20gJy4vY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dCc7XG5pbXBvcnQgRWRpdFNlbGVjdExhbmcgZnJvbSAnLi9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcnO1xuXG5jbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy50aXRsZVZhbHVlQ2hhbmdlID0gdGhpcy50aXRsZVZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0VmFsdWVDaGFuZ2UgPSB0aGlzLnRleHRWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0VmFsdWVDaGFuZ2UgPSB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlID0gdGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWxlY3RWYWx1ZUNoYW5nZUxhbmcgPSB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlTGFuZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkSW5wdXQgPSB0aGlzLmFkZElucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRJbnB1dFJlbmRlciA9IHRoaXMuYWRkSW5wdXRSZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZFRleHRSZW5kZXIgPSB0aGlzLmFkZFRleHRSZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHRWYWx1ZUNoYW5nZVJlbW92ZSA9IHRoaXMudGV4dFZhbHVlQ2hhbmdlUmVtb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lZGl0Q2xvc2UgPSB0aGlzLmVkaXRDbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZWMgPSB0aGlzLm9uUmVjLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYW5jZWwgPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zZWxlY3RWYWx1ZUxpc3QgPSBbXG4gICAgICB7IHZhbHVlOiAnaDMnLCB0ZXh0OiAn5Lit6KaL5Ye644GXJyB9LFxuICAgICAgeyB2YWx1ZTogJ2g0JywgdGV4dDogJ+Wwj+imi+WHuuOBlycgfSxcbiAgICAgIHsgdmFsdWU6ICdwJywgdGV4dDogJ+aWh+iogCcgfSxcbiAgICAgIHsgdmFsdWU6ICdjb2RlJywgdGV4dDogJ+OCs+ODvOODiScgfSxcbiAgICAgIHsgdmFsdWU6ICdjbWQnLCB0ZXh0OiAn44Kz44Oe44Oz44OJJyB9XG4gICAgXTtcblxuICAgIHRoaXMubGFuZ0xpc3QgPSBbJ2phdmFzY3JpcHQnLCAnY3NzJywgJ2h0bWwnLCAncnVieScsICdweXRob24nLCAnZ28nLCAncGhwJ107XG5cbiAgICB0aGlzLmFkZElucHV0QXJyYXkgPSBbMF07XG4gICAgdGhpcy5hZGRUZXh0QXJyYXkgPSBbMF07XG4gICAgdGhpcy50ZXh0QXJyYXkgPSBbXTsgLy8g44OG44Kt44K544OI44KS5qC857SN44GZ44KL6YWN5YiXXG4gICAgdGhpcy5zZWxlY3RBcnJheSA9IFt0aGlzLnNlbGVjdFZhbHVlTGlzdFswXS52YWx1ZV07IC8vIOOCu+ODrOOCr+ODiCjopovlh7rjgZfjgoTjgrPjg7zjg4njgarjgakp44KS5qC857SN44GZ44KL6YWN5YiXXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZVRpdGxlOiAnJyxcbiAgICAgIHRleHRWYWx1ZTogdGhpcy50ZXh0QXJyYXksXG4gICAgICBzZWxlY3RWYWx1ZTogdGhpcy5zZWxlY3RBcnJheSxcbiAgICAgIHRleHRMYW5nVmFsdWU6ICcnLFxuICAgICAgc2VsZWN0TGFuZ1ZhbHVlOiB0aGlzLmxhbmdMaXN0WzBdLFxuICAgICAgaW5wdXQ6IDAsXG4gICAgICBhY3RpdmVDbGFzczogJycsXG4gICAgICBzdWJtaXRDbGFzczogJydcbiAgICB9O1xuXG4gICAgdGhpcy5hZGRGbGcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aXRsZeOBruWkieabtFxuICAgKi9cbiAgdGl0bGVWYWx1ZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVGl0bGU6IHZhbHVlfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIHRleHTjga7lpInmm7RcbiAgICovXG4gIHRleHRWYWx1ZUNoYW5nZSh2YWx1ZSwgdmFsdWVJZCkge1xuICAgIHRoaXMudGV4dEFycmF5W3ZhbHVlSWRdID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRWYWx1ZTogdGhpcy50ZXh0QXJyYXkgfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIOiogOiqnuOBruODhuOCreOCueODiOOBruWkieabtFxuICAgKi9cbiAgdGV4dExhbmdWYWx1ZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0TGFuZ1ZhbHVlOiB2YWx1ZX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZWxlY3Qo6KaL5Ye644GX44KE44Kz44O844OJ44Gq44GpKeOBruWkieabtFxuICAgKi9cbiAgc2VsZWN0VmFsdWVDaGFuZ2UodmFsdWUsIHZhbHVlSWQpIHtcbiAgICB0aGlzLnNlbGVjdEFycmF5W3ZhbHVlSWRdID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdFZhbHVlOiB0aGlzLnNlbGVjdEFycmF5fSApO1xuICB9XG5cbiAgLyoqXG4gICAqIOiogOiqnuOBrnNlbGVjdOOBruWkieabtFxuICAgKi9cbiAgc2VsZWN0VmFsdWVDaGFuZ2VMYW5nKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdExhbmdWYWx1ZTogdmFsdWV9ICk7XG4gIH1cblxuICAvKipcbiAgICog5pel5LuY6KGo56S6XG4gICAqL1xuICBzZXREYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHNldERhdGVWYWx1ZSA9IGAke3llYXJ9LiR7bW9udGh9LiR7ZGF5fWA7XG4gICAgcmV0dXJuIHNldERhdGVWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhaXlipvjga7opIfoo71cbiAgICovXG4gIGFkZElucHV0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dDogdGhpcy5zdGF0ZS5pbnB1dCArIDEgfSk7XG4gICAgdGhpcy5hZGRGbGcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOODleOCqeODvOODoOOBruikh+ijvVxuICAgKi9cbiAgYWRkSW5wdXRSZW5kZXIoKSB7XG5cbiAgICBpZiAodGhpcy5hZGRGbGcpIHtcbiAgICAgIHRoaXMuYWRkSW5wdXRBcnJheS5wdXNoKHRoaXMuc3RhdGUuaW5wdXQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFkZElucHV0QXJyYXkubWFwKChfdmFsdWUsIF9pbmRleCkgPT4gKFxuICAgICAgdGhpcy5hZGRGbGcgPSBmYWxzZSxcbiAgICAgIDxFZGl0U2VsZWN0SW5wdXRcbiAgICAgICAga2V5PXtfaW5kZXh9XG4gICAgICAgIHRleHRJZD17YGlucHV0SWQtJHtfaW5kZXh9YH1cbiAgICAgICAgdGV4dFZhbHVlPXt0aGlzLnN0YXRlLnRleHRWYWx1ZVtfaW5kZXhdfVxuICAgICAgICB0ZXh0VmFsdWVDaGFuZ2U9e3RoaXMudGV4dFZhbHVlQ2hhbmdlfVxuICAgICAgICBzZWxlY3RWYWx1ZUxpc3Q9e3RoaXMuc2VsZWN0VmFsdWVMaXN0fVxuICAgICAgICBzZWxlY3RWYWx1ZT17dGhpcy5zZWxlY3RWYWx1ZUNoYW5nZX1cbiAgICAgICAgdmFsdWVSZW1vdmU9e3RoaXMudGV4dFZhbHVlQ2hhbmdlUmVtb3ZlfVxuICAgICAgLz5cbiAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlofoqIDjga7opIfoo71cbiAgICovXG4gIGFkZFRleHRSZW5kZXIoKSB7XG5cbiAgICBpZiAodGhpcy5hZGRGbGcpIHtcbiAgICAgIHRoaXMuYWRkVGV4dEFycmF5LnB1c2godGhpcy5zdGF0ZS5pbnB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWRkVGV4dEFycmF5Lm1hcCgoX3ZhbHVlLCBfaW5kZXgpID0+IChcbiAgICAgIDxFZGl0VGV4dFJlbmRlclxuICAgICAgICBrZXk9e19pbmRleH1cbiAgICAgICAgdGV4dElkPXtgaW5wdXRUZXh0SWQtJHtfaW5kZXh9YH1cbiAgICAgICAgdGV4dFZhbHVlPXt0aGlzLnN0YXRlLnRleHRWYWx1ZVtfaW5kZXhdfVxuICAgICAgICBzZWxlY3RWYWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZVtfaW5kZXhdfVxuICAgICAgICBzZWxlY3RWYWx1ZUxpc3Q9e3RoaXMuc2VsZWN0VmFsdWVMaXN0fVxuICAgICAgLz5cbiAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhaXlipvjga7liYrpmaRcbiAgICovXG4gIHRleHRWYWx1ZUNoYW5nZVJlbW92ZShyZW1vdmVJZCkge1xuXG4gICAgdGhpcy50ZXh0QXJyYXkuc3BsaWNlKHJlbW92ZUlkLCAxKTtcbiAgICB0aGlzLmFkZElucHV0QXJyYXkucG9wKCk7XG4gICAgdGhpcy5hZGRUZXh0QXJyYXkucG9wKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0OiB0aGlzLnN0YXRlLmlucHV0IC0gMSxcbiAgICAgIHRleHRWYWx1ZTogdGhpcy50ZXh0QXJyYXksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZWRpdOmgheebruOCkumdnuihqOekuuOBq1xuICAgKi9cbiAgZWRpdENsb3NlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUNsYXNzICE9PSAnaXMtaGlkZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVDbGFzczogJ2lzLWhpZGUnfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVDbGFzczogJyd9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6KiY6Yyy44Oc44K/44OzKGhpZGVu44GrdmFsdWXjgpJzZXQpXG4gICAqL1xuICBvblJlYygpIHtcbiAgICBjb25zdCBzYXZlVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmxvY2tzJyk7XG4gICAgY29uc3Qgc2F2ZUh0bWwgPSBzYXZlVGFyZ2V0WzBdLm91dGVySFRNTDtcbiAgICBjb25zdCBzYXZlSHRtbFNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zYXZlSHRtbCcpO1xuICAgIHNhdmVIdG1sU2V0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBzYXZlSHRtbCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXRDbGFzcyAhPT0gJ2lzLXNob3cnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0Q2xhc3M6ICdpcy1zaG93J30pO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXRDbGFzcyA9PT0gJ2lzLXNob3cnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0Q2xhc3M6ICcnfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dEFycmF5KTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXQtd3JhcHBlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzYXZlXCIgaWQ9XCJqcy1zYXZlSHRtbFwiLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2tzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2JveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2lubmVyXCI+XG4gICAgICAgICAgICAgIDxFZGl0SGVhZGVyUmVuZGVyXG4gICAgICAgICAgICAgICAgaGVhZGVyVmFsdWU9e3RoaXMuc3RhdGUucGFnZVRpdGxlfVxuICAgICAgICAgICAgICAgIHNlbGVjdExhbmc9e3RoaXMuc3RhdGUuc2VsZWN0TGFuZ1ZhbHVlfVxuICAgICAgICAgICAgICAgIGxhbmdUZXh0PXt0aGlzLnN0YXRlLnRleHRMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2Nrc19fdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICA8cD57dGhpcy5zZXREYXRlKCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5hZGRUZXh0UmVuZGVyKCkgfVxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZWRpdCAke3RoaXMuc3RhdGUuYWN0aXZlQ2xhc3N9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19pbm5lclwiPlxuICAgICAgICAgICAgPEVkaXRJbnB1dFxuICAgICAgICAgICAgICBoZWFkZXJWYWx1ZT17dGhpcy5zdGF0ZS5wYWdlVGl0bGV9XG4gICAgICAgICAgICAgIGhlYWRlclZhbHVlQ2hhbmdlPXt0aGlzLnRpdGxlVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVkaXRTZWxlY3RMYW5nXG4gICAgICAgICAgICAgIHRleHRMYW5nVmFsdWU9e3RoaXMuc3RhdGUudGV4dExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgdGV4dExhbmdWYWx1ZUNoYW5nZT17dGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlfVxuICAgICAgICAgICAgICBzZWxlY3RMYW5nTGlzdD17dGhpcy5sYW5nTGlzdH1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ1ZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ1ZhbHVlQ2hhbmdlPXt0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlTGFuZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IHRoaXMuYWRkSW5wdXRSZW5kZXIoKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19idXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tY2xvc2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmVkaXRDbG9zZX0+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2J1dHRvbiBlZGl0X19idXR0b24tLXBsdXNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZElucHV0fT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tcmVjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlY30+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGVkaXRfX2J1dHRvbi13cmFwcGVyIGVkaXRfX2J1dHRvbi13cmFwcGVyLS1zdWJtaXQgJHt0aGlzLnN0YXRlLnN1Ym1pdENsYXNzfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0tc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgU1VCTUlUXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0tbmdcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2FuY2VsfT5cbiAgICAgICAgICAgICAgICBDQU5DRUxcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0LnByb3BUeXBlcyA9IHtcbiAgcGFnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0VmFsdWU6IFByb3BUeXBlcy5hcnJheSxcbiAgc2VsZWN0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5hcnJheSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsIi8qKlxuICogQGZpbGUg44K/44Kk44OI44Or5o+P55S7XG4gKiBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEVkaXRMYW5nUmVuZGVyIGZyb20gJy4vRWRpdExhbmdSZW5kZXInO1xuXG5jbGFzcyBFZGl0SGVhZGVyUmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJibG9ja3NfX2hlYWRlclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmxvY2tzX190aXRsZVwiPnt0aGlzLnByb3BzLmhlYWRlclZhbHVlfTwvaDI+XG4gICAgICAgIDxFZGl0TGFuZ1JlbmRlciBcbiAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLnNlbGVjdExhbmd9XG4gICAgICAgICAgdGV4dD17dGhpcy5wcm9wcy5sYW5nVGV4dH1cbiAgICAgICAgLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0SGVhZGVyUmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgaGVhZGVyVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdExhbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmdUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRIZWFkZXJSZW5kZXI7XG4iLCIvKipcbiAqIEBmaWxlIOODhuOCreOCueODiOWFpeWKm+ODleOCqeODvOODoFxuICogXG4gKi9cblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlID0gdGhpcy52YWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2Uoc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5oZWFkZXJWYWx1ZUNoYW5nZShzZXRWYWx1ZSk7XG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtYmxvY2tcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWlucHV0XCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuODmuODvOOCuOOCv+OCpOODiOODq+OCkuWFpeWKm1wiIHZhbHVlPXt0aGlzLnByb3BzLmhlYWRlclZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHRoaXMudmFsdWVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGhlYWRlclZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGVhZGVyVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdElucHV0O1xuIiwiLyoqXG4gKiBAZmlsZSDjgr/jgqTjg4jjg6vmj4/nlLtcbiAqIFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0TGFuZ1JlbmRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYWJlbHNfX2xpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbGFiZWxzX19tYWluIGxhYmVsc19fbWFpbi0tJHt0aGlzLnByb3BzLmxhbmd9YH0+e3RoaXMucHJvcHMubGFuZ308L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhYmVsc19fbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BsYWJlbHNfX3N1YiBsYWJlbHNfX3N1Yi0tJHt0aGlzLnByb3BzLmxhbmd9YH0+e3RoaXMucHJvcHMudGV4dH08L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdExhbmdSZW5kZXIucHJvcFR5cGVzID0ge1xuICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRMYW5nUmVuZGVyO1xuIiwiLyoqXG4gKiBAZmlsZSDjg4bjgq3jgrnjg4jlhaXlipvjg5Xjgqnjg7zjg6Ao6YG45oqe5Z6LKVxuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRTZWxlY3RJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlSW5wdXQgPSB0aGlzLnJlbW92ZUlucHV0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCu+ODrOOCr+ODiOODnOODg+OCr+OCuVxuICAgKi9cbiAgaGFuZGxlQ2hhbmdlKHNldFZhbHVlLCB0ZXh0SWQpIHtcbiAgICBjb25zdCBpZE51bWJlciA9IE51bWJlcih0ZXh0SWQucmVwbGFjZSgnaW5wdXRJZC0nLCAnJykpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFZhbHVlKHNldFZhbHVlLCBpZE51bWJlcilcbiAgfVxuXG4gIHNldE9wdGlvbigpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0Lm1hcCgoX2l0ZW0sIF9udW1iZXIpID0+IChcbiAgICAgIDxvcHRpb24ga2V5PXtfbnVtYmVyfSB2YWx1ZT17X2l0ZW0udmFsdWV9PntfaXRlbS50ZXh0fTwvb3B0aW9uPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGlucHV0XG4gICAqL1xuICB2YWx1ZUNoYW5nZShzZXRWYWx1ZSwgdGV4dElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBzZXRWYWx1ZX0pO1xuICAgIGNvbnN0IGlkTnVtYmVyID0gTnVtYmVyKHRleHRJZC5yZXBsYWNlKCdpbnB1dElkLScsICcnKSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGV4dFZhbHVlQ2hhbmdlKHNldFZhbHVlLCBpZE51bWJlcik7XG4gIH1cblxuICByZW1vdmVJbnB1dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnfSk7XG4gICAgY29uc3QgaWROdW1iZXIgPSBOdW1iZXIodGhpcy5wcm9wcy50ZXh0SWQucmVwbGFjZSgnaW5wdXRJZC0nLCAnJykpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlUmVtb3ZlKGlkTnVtYmVyKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNldE9wdGlvbigpO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtYmxvY2tcIiBpZD17dGhpcy5wcm9wcy50ZXh0SWR9PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtdGl0bGVcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1zZWxlY3RcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSwgdGhpcy5wcm9wcy50ZXh0SWQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnNldE9wdGlvbigpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5paH6KiA44KS5YWl5YqbXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnZhbHVlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCB0aGlzLnByb3BzLnRleHRJZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tbWludXNcIiBvbkNsaWNrPXt0aGlzLnJlbW92ZUlucHV0fT48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0U2VsZWN0SW5wdXQucHJvcFR5cGVzID0ge1xuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdFZhbHVlTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICB0ZXh0VmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWVSZW1vdmU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRTZWxlY3RJbnB1dDtcbiIsIi8qKlxuICogQGZpbGUg6KiA6Kqe44OV44Kp44O844OgKOmBuOaKnuWeiylcbiAqIFxuICovXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRTZWxlY3RMYW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICog44K744Os44Kv44OI44Oc44OD44Kv44K5XG4gICAqL1xuICBoYW5kbGVDaGFuZ2Uoc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RMYW5nVmFsdWVDaGFuZ2Uoc2V0VmFsdWUpXG4gIH1cblxuICBzZXRPcHRpb24oKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnNlbGVjdExhbmdMaXN0Lm1hcCgoX2l0ZW0sIF9udW1iZXIpID0+IChcbiAgICAgIDxvcHRpb24ga2V5PXtfbnVtYmVyfSB2YWx1ZT17X2l0ZW19PntfaXRlbX08L29wdGlvbj5cbiAgICApKTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBpbnB1dFxuICAgKi9cbiAgdmFsdWVDaGFuZ2Uoc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlKHNldFZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNldE9wdGlvbigpO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtYmxvY2tcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXRpdGxlIGVkaXRfX2lucHV0LXRpdGxlLS1sYW5nXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtc2VsZWN0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlbGVjdExhbmdWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIHt0aGlzLnNldE9wdGlvbigpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtaW5wdXRcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIumWoumAo+ODr+ODvOODieOCkuWFpeWKm1wiIHZhbHVlPXt0aGlzLnByb3BzLnRleHRMYW5nVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy52YWx1ZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdFNlbGVjdExhbmcucHJvcFR5cGVzID0ge1xuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdExhbmdWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdExhbmdWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0TGFuZ0xpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgdGV4dExhbmdWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRMYW5nVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFNlbGVjdExhbmc7XG4iLCIvKipcbiAqIEBmaWxlIOOCv+OCpOODiOODq+aPj+eUu1xuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRUZXh0UmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvKipcbiAgICog5pys5paH44Ko44Oq44Ki44Gu44OR44O844OEXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlclRleHRCbG9jaygpIHtcbiAgICBsZXQgYmxvY2sgPSAnJztcblxuICAgIHN3aXRjaCh0aGlzLnByb3BzLnNlbGVjdFZhbHVlKSB7XG5cbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbMF0udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFsxXS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8aDMgY2xhc3NOYW1lPVwiYmxvY2tzX19kZXNjcmlwdGlvbi10aXRsZVwiPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L2gzPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzJdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxwPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L3A+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbM10udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPHByZSBjbGFzc05hbWU9XCJibG9ja3NfX2NvZGVcIj48Y29kZSBjbGFzc05hbWU9XCJydWJ5XCI+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvY29kZT48L3ByZT47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFs0XS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19fY29kZS1wcmV2aWV3XCI+PGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tzX19jb2RlLXByZXZpZXctdGV4dFwiPjxwPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L3A+PC9jb2RlPjwvZGl2PjtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX19wYXJhZ3JhcGhcIiBpZD17dGhpcy5wcm9wcy50ZXh0SWR9PlxuICAgICAgICB7IHRoaXMucmVuZGVyVGV4dEJsb2NrKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRUZXh0UmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgdGV4dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0VmFsdWVMaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIHRleHRJZDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0VGV4dFJlbmRlcjtcbiIsImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuY29uc3Qgc29ja2V0Rm4gPSAoKSA9PiB7XG5cbiAgY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG5cbiAgc29ja2V0Lm9uKCdyZWxvYWQnLCAoKSA9PiB7XG4gICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpO1xuICB9KTtcbn07XG5cbnNvY2tldEZuKCk7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9
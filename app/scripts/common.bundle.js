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
              className: 'edit__button edit__button--close' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
              type: 'button',
              className: 'edit__button edit__button--plus',
              onClick: this.addInput }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
              type: 'submit',
              className: 'edit__button edit__button--submit' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21tb24vY29tbW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9UZXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9lZGl0L0VkaXQuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRIZWFkZXJSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdExhbmdSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRUZXh0UmVuZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL21vZHVsZXMvU29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInRlc3RzIiwiaGxqcyIsImluaXRIaWdobGlnaHRpbmdPbkxvYWQiLCJqc29uIiwiVHNldCIsInByb3BzIiwic3RhdGUiLCJ0ZXh0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImRhdGEiLCJuYW1lIiwiY2F0Y2giLCJ0ZXN0IiwiYmluZCIsIkVkaXQiLCJ0aXRsZVZhbHVlQ2hhbmdlIiwidGV4dFZhbHVlQ2hhbmdlIiwic2VsZWN0VmFsdWVDaGFuZ2UiLCJ0ZXh0TGFuZ1ZhbHVlQ2hhbmdlIiwic2VsZWN0VmFsdWVDaGFuZ2VMYW5nIiwiYWRkSW5wdXQiLCJhZGRJbnB1dFJlbmRlciIsImFkZFRleHRSZW5kZXIiLCJ0ZXh0VmFsdWVDaGFuZ2VSZW1vdmUiLCJzZWxlY3RWYWx1ZUxpc3QiLCJ2YWx1ZSIsImxhbmdMaXN0IiwiYWRkSW5wdXRBcnJheSIsImFkZFRleHRBcnJheSIsInRleHRBcnJheSIsInNlbGVjdEFycmF5IiwicGFnZVRpdGxlIiwidGV4dFZhbHVlIiwic2VsZWN0VmFsdWUiLCJ0ZXh0TGFuZ1ZhbHVlIiwic2VsZWN0TGFuZ1ZhbHVlIiwiaW5wdXQiLCJhZGRGbGciLCJ2YWx1ZUlkIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInNldERhdGVWYWx1ZSIsInB1c2giLCJtYXAiLCJfdmFsdWUiLCJfaW5kZXgiLCJyZW1vdmVJZCIsInNwbGljZSIsInBvcCIsInNldERhdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsIkVkaXRIZWFkZXJSZW5kZXIiLCJoZWFkZXJWYWx1ZSIsInNlbGVjdExhbmciLCJsYW5nVGV4dCIsIkVkaXRJbnB1dCIsInZhbHVlQ2hhbmdlIiwic2V0VmFsdWUiLCJoZWFkZXJWYWx1ZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmdW5jIiwiRWRpdExhbmdSZW5kZXIiLCJsYW5nIiwiRWRpdFNlbGVjdElucHV0IiwiaGFuZGxlQ2hhbmdlIiwicmVtb3ZlSW5wdXQiLCJ0ZXh0SWQiLCJpZE51bWJlciIsIk51bWJlciIsInJlcGxhY2UiLCJpdGVtcyIsIl9pdGVtIiwiX251bWJlciIsInZhbHVlUmVtb3ZlIiwic2V0T3B0aW9uIiwiRWRpdFNlbGVjdExhbmciLCJzZWxlY3RMYW5nVmFsdWVDaGFuZ2UiLCJzZWxlY3RMYW5nTGlzdCIsIkVkaXRUZXh0UmVuZGVyIiwiYmxvY2siLCJyZW5kZXJUZXh0QmxvY2siLCJzb2NrZXRGbiIsInNvY2tldCIsImlvIiwiY29ubmVjdCIsIm9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtB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O0FBQ0E7QUFwQko7O0FBdUJBLGFBQU95RCxLQUFQO0FBRUQ7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxtQkFBZixFQUFtQyxJQUFJLEtBQUsxRixLQUFMLENBQVc2RSxNQUFsRDtBQUNJLGFBQUtjLGVBQUw7QUFESixPQURGO0FBS0Q7Ozs7RUE3QzBCLCtDOztBQWlEN0JGLGVBQWVoQyxTQUFmLEdBQTJCO0FBQ3pCeEIsYUFBVyxpREFBQXlCLENBQVVDLE1BREk7QUFFekJ6QixlQUFhLGlEQUFBd0IsQ0FBVUMsTUFGRTtBQUd6QmxDLG1CQUFpQixpREFBQWlDLENBQVVFO0FBSEYsQ0FBM0I7O0FBTUEsK0RBQWU2QixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTs7QUFFQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVcsR0FBTTs7QUFFckIsTUFBTUMsU0FBUyx1REFBQUMsQ0FBR0MsT0FBSCxDQUFXLHVCQUFYLENBQWY7O0FBRUFGLFNBQU9HLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLFlBQU07QUFDeEI7QUFDQXpGLFlBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsR0FIRDtBQUlELENBUkQ7O0FBVUFvRixXOzs7Ozs7Ozs7OztBQ1pBLGUiLCJmaWxlIjoiY29tbW9uLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29tbW9uXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbW1vbi9jb21tb24uanN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipcbiAqIEBmaWxlcyBjb21tb24uanN4XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJ1xuXG5pbXBvcnQgRWRpdCBmcm9tICcuLi9jb21wb25lbnQvZWRpdC9FZGl0JztcbmltcG9ydCBUZXN0IGZyb20gJy4uL2NvbXBvbmVudC9UZXN0Jztcbi8vIGltcG9ydCBNb3VudCBmcm9tICcuLi9jb21wb25lbnQvTW91bnQnO1xuXG5jb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWVkaXQnKTtcbi8vIGNvbnNvbGUubG9nKFtlZGl0XS5sZW5ndGgpO1xuXG5pZiAoW2VkaXRdWzBdICE9PSBudWxsKSB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8RWRpdCAvPiwgZWRpdFxuICApO1xufVxuXG4vLyBjb25zdCBtbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1lZGl0LW0nKTtcblxuLy8gaWYgKFtlZGl0XVswXSAhPT0gbnVsbCkge1xuLy8gICBSZWFjdERPTS5yZW5kZXIoXG4vLyAgICAgPE1vdW50IC8+LCBtbVxuLy8gICApO1xuLy8gfVxuXG5cbmNvbnN0IHRlc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcblxuaWYgKFt0ZXN0c11bMF0gIT09IG51bGwpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxUZXN0IC8+LCB0ZXN0c1xuICApO1xufVxuXG5cbmhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xuXG5cbmltcG9ydCAnLi4vbW9kdWxlcy9Tb2NrZXQnO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGpzb24gPSAnLi4vLi4vcmVjb3JkL3Rlc3QuanNvbic7XG5cbmNsYXNzIFRzZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0OiAn44GC44KT44GaISEnXG4gICAgfTtcbiAgfVxuXG4gIHRlc3QoKSB7XG5cbiAgICBheGlvc1xuICAgICAgLmdldChqc29uKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRleHQ6IHJlc3VsdHMuZGF0YS5uYW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApLmNhdGNoKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy50ZXN0LmJpbmQodGhpcyl9Pnt0aGlzLnN0YXRlLnRleHR9PC9idXR0b24+KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRzZXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEVkaXRIZWFkZXJSZW5kZXIgZnJvbSAnLi9jb21wb25lbnQvRWRpdEhlYWRlclJlbmRlcic7XG5pbXBvcnQgRWRpdFRleHRSZW5kZXIgZnJvbSAnLi9jb21wb25lbnQvRWRpdFRleHRSZW5kZXInO1xuXG5pbXBvcnQgRWRpdElucHV0IGZyb20gJy4vY29tcG9uZW50L0VkaXRJbnB1dCc7XG5pbXBvcnQgRWRpdFNlbGVjdElucHV0IGZyb20gJy4vY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dCc7XG5pbXBvcnQgRWRpdFNlbGVjdExhbmcgZnJvbSAnLi9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcnO1xuXG5jbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy50aXRsZVZhbHVlQ2hhbmdlID0gdGhpcy50aXRsZVZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0VmFsdWVDaGFuZ2UgPSB0aGlzLnRleHRWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0VmFsdWVDaGFuZ2UgPSB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlID0gdGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWxlY3RWYWx1ZUNoYW5nZUxhbmcgPSB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlTGFuZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkSW5wdXQgPSB0aGlzLmFkZElucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRJbnB1dFJlbmRlciA9IHRoaXMuYWRkSW5wdXRSZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZFRleHRSZW5kZXIgPSB0aGlzLmFkZFRleHRSZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHRWYWx1ZUNoYW5nZVJlbW92ZSA9IHRoaXMudGV4dFZhbHVlQ2hhbmdlUmVtb3ZlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNlbGVjdFZhbHVlTGlzdCA9IFtcbiAgICAgIHsgdmFsdWU6ICdoMycsIHRleHQ6ICfkuK3opovlh7rjgZcnIH0sXG4gICAgICB7IHZhbHVlOiAnaDQnLCB0ZXh0OiAn5bCP6KaL5Ye644GXJyB9LFxuICAgICAgeyB2YWx1ZTogJ3AnLCB0ZXh0OiAn5paH6KiAJyB9LFxuICAgICAgeyB2YWx1ZTogJ2NvZGUnLCB0ZXh0OiAn44Kz44O844OJJyB9LFxuICAgICAgeyB2YWx1ZTogJ2NtZCcsIHRleHQ6ICfjgrPjg57jg7Pjg4knIH1cbiAgICBdO1xuXG4gICAgdGhpcy5sYW5nTGlzdCA9IFsnamF2YXNjcmlwdCcsICdjc3MnLCAnaHRtbCcsICdydWJ5JywgJ3B5dGhvbicsICdnbycsICdwaHAnXTtcblxuICAgIHRoaXMuYWRkSW5wdXRBcnJheSA9IFswXTtcbiAgICB0aGlzLmFkZFRleHRBcnJheSA9IFswXTtcbiAgICB0aGlzLnRleHRBcnJheSA9IFtdOyAvLyDjg4bjgq3jgrnjg4jjgpLmoLzntI3jgZnjgovphY3liJdcbiAgICB0aGlzLnNlbGVjdEFycmF5ID0gW3RoaXMuc2VsZWN0VmFsdWVMaXN0WzBdLnZhbHVlXTsgLy8g44K744Os44Kv44OIKOimi+WHuuOBl+OChOOCs+ODvOODieOBquOBqSnjgpLmoLzntI3jgZnjgovphY3liJdcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlVGl0bGU6ICcnLFxuICAgICAgdGV4dFZhbHVlOiB0aGlzLnRleHRBcnJheSxcbiAgICAgIHNlbGVjdFZhbHVlOiB0aGlzLnNlbGVjdEFycmF5LFxuICAgICAgdGV4dExhbmdWYWx1ZTogJycsXG4gICAgICBzZWxlY3RMYW5nVmFsdWU6IHRoaXMubGFuZ0xpc3RbMF0sXG4gICAgICBpbnB1dDogMFxuICAgIH07XG5cbiAgICB0aGlzLmFkZEZsZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHRpdGxl44Gu5aSJ5pu0XG4gICAqL1xuICB0aXRsZVZhbHVlQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VUaXRsZTogdmFsdWV9ICk7XG4gIH1cblxuICAvKipcbiAgICogdGV4dOOBruWkieabtFxuICAgKi9cbiAgdGV4dFZhbHVlQ2hhbmdlKHZhbHVlLCB2YWx1ZUlkKSB7XG4gICAgdGhpcy50ZXh0QXJyYXlbdmFsdWVJZF0gPSB2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dFZhbHVlOiB0aGlzLnRleHRBcnJheSB9ICk7XG4gIH1cblxuICAvKipcbiAgICog6KiA6Kqe44Gu44OG44Kt44K544OI44Gu5aSJ5pu0XG4gICAqL1xuICB0ZXh0TGFuZ1ZhbHVlQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRMYW5nVmFsdWU6IHZhbHVlfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCjopovlh7rjgZfjgoTjgrPjg7zjg4njgarjgakp44Gu5aSJ5pu0XG4gICAqL1xuICBzZWxlY3RWYWx1ZUNoYW5nZSh2YWx1ZSwgdmFsdWVJZCkge1xuICAgIHRoaXMuc2VsZWN0QXJyYXlbdmFsdWVJZF0gPSB2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0VmFsdWU6IHRoaXMuc2VsZWN0QXJyYXl9ICk7XG4gIH1cblxuICAvKipcbiAgICog6KiA6Kqe44Guc2VsZWN044Gu5aSJ5pu0XG4gICAqL1xuICBzZWxlY3RWYWx1ZUNoYW5nZUxhbmcodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0TGFuZ1ZhbHVlOiB2YWx1ZX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDml6Xku5jooajnpLpcbiAgICovXG4gIHNldERhdGUoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3Qgc2V0RGF0ZVZhbHVlID0gYCR7eWVhcn0uJHttb250aH0uJHtkYXl9YDtcbiAgICByZXR1cm4gc2V0RGF0ZVZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFpeWKm+OBruikh+ijvVxuICAgKi9cbiAgYWRkSW5wdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0OiB0aGlzLnN0YXRlLmlucHV0ICsgMSB9KTtcbiAgICB0aGlzLmFkZEZsZyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICog44OV44Kp44O844Og44Gu6KSH6KO9XG4gICAqL1xuICBhZGRJbnB1dFJlbmRlcigpIHtcblxuICAgIGlmICh0aGlzLmFkZEZsZykge1xuICAgICAgdGhpcy5hZGRJbnB1dEFycmF5LnB1c2godGhpcy5zdGF0ZS5pbnB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWRkSW5wdXRBcnJheS5tYXAoKF92YWx1ZSwgX2luZGV4KSA9PiAoXG4gICAgICB0aGlzLmFkZEZsZyA9IGZhbHNlLFxuICAgICAgPEVkaXRTZWxlY3RJbnB1dFxuICAgICAgICBrZXk9e19pbmRleH1cbiAgICAgICAgdGV4dElkPXtgaW5wdXRJZC0ke19pbmRleH1gfVxuICAgICAgICB0ZXh0VmFsdWU9e3RoaXMuc3RhdGUudGV4dFZhbHVlW19pbmRleF19XG4gICAgICAgIHRleHRWYWx1ZUNoYW5nZT17dGhpcy50ZXh0VmFsdWVDaGFuZ2V9XG4gICAgICAgIHNlbGVjdFZhbHVlTGlzdD17dGhpcy5zZWxlY3RWYWx1ZUxpc3R9XG4gICAgICAgIHNlbGVjdFZhbHVlPXt0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlfVxuICAgICAgICB2YWx1ZVJlbW92ZT17dGhpcy50ZXh0VmFsdWVDaGFuZ2VSZW1vdmV9XG4gICAgICAvPlxuICAgICkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaWh+iogOOBruikh+ijvVxuICAgKi9cbiAgYWRkVGV4dFJlbmRlcigpIHtcblxuICAgIGlmICh0aGlzLmFkZEZsZykge1xuICAgICAgdGhpcy5hZGRUZXh0QXJyYXkucHVzaCh0aGlzLnN0YXRlLmlucHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hZGRUZXh0QXJyYXkubWFwKChfdmFsdWUsIF9pbmRleCkgPT4gKFxuICAgICAgPEVkaXRUZXh0UmVuZGVyXG4gICAgICAgIGtleT17X2luZGV4fVxuICAgICAgICB0ZXh0SWQ9e2BpbnB1dFRleHRJZC0ke19pbmRleH1gfVxuICAgICAgICB0ZXh0VmFsdWU9e3RoaXMuc3RhdGUudGV4dFZhbHVlW19pbmRleF19XG4gICAgICAgIHNlbGVjdFZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdFZhbHVlW19pbmRleF19XG4gICAgICAgIHNlbGVjdFZhbHVlTGlzdD17dGhpcy5zZWxlY3RWYWx1ZUxpc3R9XG4gICAgICAvPlxuICAgICkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFpeWKm+OBruWJiumZpFxuICAgKi9cbiAgdGV4dFZhbHVlQ2hhbmdlUmVtb3ZlKHJlbW92ZUlkKSB7XG5cbiAgICB0aGlzLnRleHRBcnJheS5zcGxpY2UocmVtb3ZlSWQsIDEpO1xuICAgIHRoaXMuYWRkSW5wdXRBcnJheS5wb3AoKTtcbiAgICB0aGlzLmFkZFRleHRBcnJheS5wb3AoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXQ6IHRoaXMuc3RhdGUuaW5wdXQgLSAxLFxuICAgICAgdGV4dFZhbHVlOiB0aGlzLnRleHRBcnJheSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRleHRBcnJheSk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0LXdyYXBwZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2tzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2JveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2lubmVyXCI+XG4gICAgICAgICAgICAgIDxFZGl0SGVhZGVyUmVuZGVyXG4gICAgICAgICAgICAgICAgaGVhZGVyVmFsdWU9e3RoaXMuc3RhdGUucGFnZVRpdGxlfVxuICAgICAgICAgICAgICAgIHNlbGVjdExhbmc9e3RoaXMuc3RhdGUuc2VsZWN0TGFuZ1ZhbHVlfVxuICAgICAgICAgICAgICAgIGxhbmdUZXh0PXt0aGlzLnN0YXRlLnRleHRMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2Nrc19fdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICA8cD57dGhpcy5zZXREYXRlKCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5hZGRUZXh0UmVuZGVyKCkgfVxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5uZXJcIj5cbiAgICAgICAgICAgIDxFZGl0SW5wdXRcbiAgICAgICAgICAgICAgaGVhZGVyVmFsdWU9e3RoaXMuc3RhdGUucGFnZVRpdGxlfVxuICAgICAgICAgICAgICBoZWFkZXJWYWx1ZUNoYW5nZT17dGhpcy50aXRsZVZhbHVlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFZGl0U2VsZWN0TGFuZ1xuICAgICAgICAgICAgICB0ZXh0TGFuZ1ZhbHVlPXt0aGlzLnN0YXRlLnRleHRMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIHRleHRMYW5nVmFsdWVDaGFuZ2U9e3RoaXMudGV4dExhbmdWYWx1ZUNoYW5nZX1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ0xpc3Q9e3RoaXMubGFuZ0xpc3R9XG4gICAgICAgICAgICAgIHNlbGVjdExhbmdWYWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIHNlbGVjdExhbmdWYWx1ZUNoYW5nZT17dGhpcy5zZWxlY3RWYWx1ZUNoYW5nZUxhbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyB0aGlzLmFkZElucHV0UmVuZGVyKCkgfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tY2xvc2VcIj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tcGx1c1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkSW5wdXR9PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19idXR0b24gZWRpdF9fYnV0dG9uLS1zdWJtaXRcIj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXQucHJvcFR5cGVzID0ge1xuICBwYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRWYWx1ZTogUHJvcFR5cGVzLmFycmF5LFxuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLmFycmF5LFxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiLyoqXG4gKiBAZmlsZSDjgr/jgqTjg4jjg6vmj4/nlLtcbiAqIFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRWRpdExhbmdSZW5kZXIgZnJvbSAnLi9FZGl0TGFuZ1JlbmRlcic7XG5cbmNsYXNzIEVkaXRIZWFkZXJSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJsb2Nrc19faGVhZGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJibG9ja3NfX3RpdGxlXCI+e3RoaXMucHJvcHMuaGVhZGVyVmFsdWV9PC9oMj5cbiAgICAgICAgPEVkaXRMYW5nUmVuZGVyIFxuICAgICAgICAgIGxhbmc9e3RoaXMucHJvcHMuc2VsZWN0TGFuZ31cbiAgICAgICAgICB0ZXh0PXt0aGlzLnByb3BzLmxhbmdUZXh0fVxuICAgICAgICAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRIZWFkZXJSZW5kZXIucHJvcFR5cGVzID0ge1xuICBoZWFkZXJWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0TGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZ1RleHQ6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdEhlYWRlclJlbmRlcjtcbiIsIi8qKlxuICogQGZpbGUg44OG44Kt44K544OI5YWl5Yqb44OV44Kp44O844OgXG4gKiBcbiAqL1xuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UgPSB0aGlzLnZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZShzZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmhlYWRlclZhbHVlQ2hhbmdlKHNldFZhbHVlKTtcbiAgfVxuICBcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1ibG9ja1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi44Oa44O844K444K/44Kk44OI44Or44KS5YWl5YqbXCIgdmFsdWU9e3RoaXMucHJvcHMuaGVhZGVyVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy52YWx1ZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdElucHV0LnByb3BUeXBlcyA9IHtcbiAgaGVhZGVyVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBoZWFkZXJWYWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0SW5wdXQ7XG4iLCIvKipcbiAqIEBmaWxlIOOCv+OCpOODiOODq+aPj+eUu1xuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRMYW5nUmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsc1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhYmVsc19fbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BsYWJlbHNfX21haW4gbGFiZWxzX19tYWluLS0ke3RoaXMucHJvcHMubGFuZ31gfT57dGhpcy5wcm9wcy5sYW5nfTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFiZWxzX19saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGxhYmVsc19fc3ViIGxhYmVsc19fc3ViLS0ke3RoaXMucHJvcHMubGFuZ31gfT57dGhpcy5wcm9wcy50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0TGFuZ1JlbmRlci5wcm9wVHlwZXMgPSB7XG4gIGxhbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdExhbmdSZW5kZXI7XG4iLCIvKipcbiAqIEBmaWxlIOODhuOCreOCueODiOWFpeWKm+ODleOCqeODvOODoCjpgbjmip7lnospXG4gKiBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdFNlbGVjdElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVJbnB1dCA9IHRoaXMucmVtb3ZlSW5wdXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44K744Os44Kv44OI44Oc44OD44Kv44K5XG4gICAqL1xuICBoYW5kbGVDaGFuZ2Uoc2V0VmFsdWUsIHRleHRJZCkge1xuICAgIGNvbnN0IGlkTnVtYmVyID0gTnVtYmVyKHRleHRJZC5yZXBsYWNlKCdpbnB1dElkLScsICcnKSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0VmFsdWUoc2V0VmFsdWUsIGlkTnVtYmVyKVxuICB9XG5cbiAgc2V0T3B0aW9uKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3QubWFwKChfaXRlbSwgX251bWJlcikgPT4gKFxuICAgICAgPG9wdGlvbiBrZXk9e19udW1iZXJ9IHZhbHVlPXtfaXRlbS52YWx1ZX0+e19pdGVtLnRleHR9PC9vcHRpb24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogaW5wdXRcbiAgICovXG4gIHZhbHVlQ2hhbmdlKHNldFZhbHVlLCB0ZXh0SWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHNldFZhbHVlfSk7XG4gICAgY29uc3QgaWROdW1iZXIgPSBOdW1iZXIodGV4dElkLnJlcGxhY2UoJ2lucHV0SWQtJywgJycpKTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50ZXh0VmFsdWVDaGFuZ2Uoc2V0VmFsdWUsIGlkTnVtYmVyKTtcbiAgfVxuXG4gIHJlbW92ZUlucHV0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJyd9KTtcbiAgICBjb25zdCBpZE51bWJlciA9IE51bWJlcih0aGlzLnByb3BzLnRleHRJZC5yZXBsYWNlKCdpbnB1dElkLScsICcnKSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWVSZW1vdmUoaWROdW1iZXIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuc2V0T3B0aW9uKCk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1ibG9ja1wiIGlkPXt0aGlzLnByb3BzLnRleHRJZH0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC10aXRsZVwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXNlbGVjdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCB0aGlzLnByb3BzLnRleHRJZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuc2V0T3B0aW9uKCl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1pbnB1dFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmlofoqIDjgpLlhaXliptcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudmFsdWVDaGFuZ2UoZS50YXJnZXQudmFsdWUsIHRoaXMucHJvcHMudGV4dElkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJlZGl0X19idXR0b24gZWRpdF9fYnV0dG9uLS1taW51c1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSW5wdXR9PjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRTZWxlY3RJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIHNlbGVjdFZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0VmFsdWVMaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIHRleHRWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dElkOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRTZWxlY3RJbnB1dDtcbiIsIi8qKlxuICogQGZpbGUg6KiA6Kqe44OV44Kp44O844OgKOmBuOaKnuWeiylcbiAqIFxuICovXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRTZWxlY3RMYW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICog44K744Os44Kv44OI44Oc44OD44Kv44K5XG4gICAqL1xuICBoYW5kbGVDaGFuZ2Uoc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RMYW5nVmFsdWVDaGFuZ2Uoc2V0VmFsdWUpXG4gIH1cblxuICBzZXRPcHRpb24oKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnNlbGVjdExhbmdMaXN0Lm1hcCgoX2l0ZW0sIF9udW1iZXIpID0+IChcbiAgICAgIDxvcHRpb24ga2V5PXtfbnVtYmVyfSB2YWx1ZT17X2l0ZW19PntfaXRlbX08L29wdGlvbj5cbiAgICApKTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBpbnB1dFxuICAgKi9cbiAgdmFsdWVDaGFuZ2Uoc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlKHNldFZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNldE9wdGlvbigpO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtYmxvY2tcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXRpdGxlIGVkaXRfX2lucHV0LXRpdGxlLS1sYW5nXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtc2VsZWN0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlbGVjdExhbmdWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIHt0aGlzLnNldE9wdGlvbigpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtaW5wdXRcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIumWoumAo+ODr+ODvOODieOCkuWFpeWKm1wiIHZhbHVlPXt0aGlzLnByb3BzLnRleHRMYW5nVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy52YWx1ZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdFNlbGVjdExhbmcucHJvcFR5cGVzID0ge1xuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdExhbmdWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdExhbmdWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0TGFuZ0xpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgdGV4dExhbmdWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRMYW5nVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFNlbGVjdExhbmc7XG4iLCIvKipcbiAqIEBmaWxlIOOCv+OCpOODiOODq+aPj+eUu1xuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRUZXh0UmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvKipcbiAgICog5pys5paH44Ko44Oq44Ki44Gu44OR44O844OEXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlclRleHRCbG9jaygpIHtcbiAgICBsZXQgYmxvY2sgPSAnJztcblxuICAgIHN3aXRjaCh0aGlzLnByb3BzLnNlbGVjdFZhbHVlKSB7XG5cbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbMF0udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFsxXS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8aDMgY2xhc3NOYW1lPVwiYmxvY2tzX19kZXNjcmlwdGlvbi10aXRsZVwiPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L2gzPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzJdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxwPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L3A+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbM10udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPHByZSBjbGFzc05hbWU9XCJibG9ja3NfX2NvZGVcIj48Y29kZSBjbGFzc05hbWU9XCJydWJ5XCI+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvY29kZT48L3ByZT47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFs0XS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19fY29kZS1wcmV2aWV3XCI+PGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tzX19jb2RlLXByZXZpZXctdGV4dFwiPjxwPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L3A+PC9jb2RlPjwvZGl2PjtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX19wYXJhZ3JhcGhcIiBpZD17dGhpcy5wcm9wcy50ZXh0SWR9PlxuICAgICAgICB7IHRoaXMucmVuZGVyVGV4dEJsb2NrKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRUZXh0UmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgdGV4dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0VmFsdWVMaXN0OiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFRleHRSZW5kZXI7XG4iLCJpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmNvbnN0IHNvY2tldEZuID0gKCkgPT4ge1xuXG4gIGNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuXG4gIHNvY2tldC5vbigncmVsb2FkJywgKCkgPT4ge1xuICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKTtcbiAgfSk7XG59O1xuXG5zb2NrZXRGbigpO1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==
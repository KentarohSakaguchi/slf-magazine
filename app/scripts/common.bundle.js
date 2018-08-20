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
    _this.onSubmit = _this.onSubmit.bind(_this);

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
    key: 'editClose',
    value: function editClose() {
      console.log('editClose');
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      console.log('onSubmit');
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
              className: 'edit__button edit__button--close',
              onClick: this.editClose }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
              type: 'button',
              className: 'edit__button edit__button--plus',
              onClick: this.addInput }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('button', {
              type: 'submit',
              className: 'edit__button edit__button--submit',
              onClick: this.onSubmit })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21tb24vY29tbW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9UZXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9lZGl0L0VkaXQuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRIZWFkZXJSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdExhbmdSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRUZXh0UmVuZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL21vZHVsZXMvU29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInRlc3RzIiwiaGxqcyIsImluaXRIaWdobGlnaHRpbmdPbkxvYWQiLCJqc29uIiwiVHNldCIsInByb3BzIiwic3RhdGUiLCJ0ZXh0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImRhdGEiLCJuYW1lIiwiY2F0Y2giLCJ0ZXN0IiwiYmluZCIsIkVkaXQiLCJ0aXRsZVZhbHVlQ2hhbmdlIiwidGV4dFZhbHVlQ2hhbmdlIiwic2VsZWN0VmFsdWVDaGFuZ2UiLCJ0ZXh0TGFuZ1ZhbHVlQ2hhbmdlIiwic2VsZWN0VmFsdWVDaGFuZ2VMYW5nIiwiYWRkSW5wdXQiLCJhZGRJbnB1dFJlbmRlciIsImFkZFRleHRSZW5kZXIiLCJ0ZXh0VmFsdWVDaGFuZ2VSZW1vdmUiLCJlZGl0Q2xvc2UiLCJvblN1Ym1pdCIsInNlbGVjdFZhbHVlTGlzdCIsInZhbHVlIiwibGFuZ0xpc3QiLCJhZGRJbnB1dEFycmF5IiwiYWRkVGV4dEFycmF5IiwidGV4dEFycmF5Iiwic2VsZWN0QXJyYXkiLCJwYWdlVGl0bGUiLCJ0ZXh0VmFsdWUiLCJzZWxlY3RWYWx1ZSIsInRleHRMYW5nVmFsdWUiLCJzZWxlY3RMYW5nVmFsdWUiLCJpbnB1dCIsImFkZEZsZyIsInZhbHVlSWQiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwic2V0RGF0ZVZhbHVlIiwicHVzaCIsIm1hcCIsIl92YWx1ZSIsIl9pbmRleCIsInJlbW92ZUlkIiwic3BsaWNlIiwicG9wIiwic2V0RGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiRWRpdEhlYWRlclJlbmRlciIsImhlYWRlclZhbHVlIiwic2VsZWN0TGFuZyIsImxhbmdUZXh0IiwiRWRpdElucHV0IiwidmFsdWVDaGFuZ2UiLCJzZXRWYWx1ZSIsImhlYWRlclZhbHVlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZ1bmMiLCJFZGl0TGFuZ1JlbmRlciIsImxhbmciLCJFZGl0U2VsZWN0SW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJyZW1vdmVJbnB1dCIsInRleHRJZCIsImlkTnVtYmVyIiwiTnVtYmVyIiwicmVwbGFjZSIsIml0ZW1zIiwiX2l0ZW0iLCJfbnVtYmVyIiwidmFsdWVSZW1vdmUiLCJzZXRPcHRpb24iLCJFZGl0U2VsZWN0TGFuZyIsInNlbGVjdExhbmdWYWx1ZUNoYW5nZSIsInNlbGVjdExhbmdMaXN0IiwiRWRpdFRleHRSZW5kZXIiLCJibG9jayIsInJlbmRlclRleHRCbG9jayIsInNvY2tldEZuIiwic29ja2V0IiwiaW8iLCJjb25uZWN0Iiwib24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7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Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjb21tb25cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tbW9uL2NvbW1vbi5qc3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKlxuICogQGZpbGVzIGNvbW1vbi5qc3hcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnXG5cbmltcG9ydCBFZGl0IGZyb20gJy4uL2NvbXBvbmVudC9lZGl0L0VkaXQnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi4vY29tcG9uZW50L1Rlc3QnO1xuLy8gaW1wb3J0IE1vdW50IGZyb20gJy4uL2NvbXBvbmVudC9Nb3VudCc7XG5cbmNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtZWRpdCcpO1xuLy8gY29uc29sZS5sb2coW2VkaXRdLmxlbmd0aCk7XG5cbmlmIChbZWRpdF1bMF0gIT09IG51bGwpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxFZGl0IC8+LCBlZGl0XG4gICk7XG59XG5cbi8vIGNvbnN0IG1tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWVkaXQtbScpO1xuXG4vLyBpZiAoW2VkaXRdWzBdICE9PSBudWxsKSB7XG4vLyAgIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgICA8TW91bnQgLz4sIG1tXG4vLyAgICk7XG4vLyB9XG5cblxuY29uc3QgdGVzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuXG5pZiAoW3Rlc3RzXVswXSAhPT0gbnVsbCkge1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFRlc3QgLz4sIHRlc3RzXG4gICk7XG59XG5cblxuaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCk7XG5cblxuaW1wb3J0ICcuLi9tb2R1bGVzL1NvY2tldCc7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QganNvbiA9ICcuLi8uLi9yZWNvcmQvdGVzdC5qc29uJztcblxuY2xhc3MgVHNldCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICfjgYLjgpPjgZohISdcbiAgICB9O1xuICB9XG5cbiAgdGVzdCgpIHtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KGpzb24pXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGV4dDogcmVzdWx0cy5kYXRhLm5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICkuY2F0Y2goKHJlc3VsdHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnRlc3QuYmluZCh0aGlzKX0+e3RoaXMuc3RhdGUudGV4dH08L2J1dHRvbj4pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHNldDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRWRpdEhlYWRlclJlbmRlciBmcm9tICcuL2NvbXBvbmVudC9FZGl0SGVhZGVyUmVuZGVyJztcbmltcG9ydCBFZGl0VGV4dFJlbmRlciBmcm9tICcuL2NvbXBvbmVudC9FZGl0VGV4dFJlbmRlcic7XG5cbmltcG9ydCBFZGl0SW5wdXQgZnJvbSAnLi9jb21wb25lbnQvRWRpdElucHV0JztcbmltcG9ydCBFZGl0U2VsZWN0SW5wdXQgZnJvbSAnLi9jb21wb25lbnQvRWRpdFNlbGVjdElucHV0JztcbmltcG9ydCBFZGl0U2VsZWN0TGFuZyBmcm9tICcuL2NvbXBvbmVudC9FZGl0U2VsZWN0TGFuZyc7XG5cbmNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRpdGxlVmFsdWVDaGFuZ2UgPSB0aGlzLnRpdGxlVmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHRWYWx1ZUNoYW5nZSA9IHRoaXMudGV4dFZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWxlY3RWYWx1ZUNoYW5nZSA9IHRoaXMuc2VsZWN0VmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHRMYW5nVmFsdWVDaGFuZ2UgPSB0aGlzLnRleHRMYW5nVmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlTGFuZyA9IHRoaXMuc2VsZWN0VmFsdWVDaGFuZ2VMYW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRJbnB1dCA9IHRoaXMuYWRkSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZElucHV0UmVuZGVyID0gdGhpcy5hZGRJbnB1dFJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkVGV4dFJlbmRlciA9IHRoaXMuYWRkVGV4dFJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dFZhbHVlQ2hhbmdlUmVtb3ZlID0gdGhpcy50ZXh0VmFsdWVDaGFuZ2VSZW1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVkaXRDbG9zZSA9IHRoaXMuZWRpdENsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc2VsZWN0VmFsdWVMaXN0ID0gW1xuICAgICAgeyB2YWx1ZTogJ2gzJywgdGV4dDogJ+S4reimi+WHuuOBlycgfSxcbiAgICAgIHsgdmFsdWU6ICdoNCcsIHRleHQ6ICflsI/opovlh7rjgZcnIH0sXG4gICAgICB7IHZhbHVlOiAncCcsIHRleHQ6ICfmlofoqIAnIH0sXG4gICAgICB7IHZhbHVlOiAnY29kZScsIHRleHQ6ICfjgrPjg7zjg4knIH0sXG4gICAgICB7IHZhbHVlOiAnY21kJywgdGV4dDogJ+OCs+ODnuODs+ODiScgfVxuICAgIF07XG5cbiAgICB0aGlzLmxhbmdMaXN0ID0gWydqYXZhc2NyaXB0JywgJ2NzcycsICdodG1sJywgJ3J1YnknLCAncHl0aG9uJywgJ2dvJywgJ3BocCddO1xuXG4gICAgdGhpcy5hZGRJbnB1dEFycmF5ID0gWzBdO1xuICAgIHRoaXMuYWRkVGV4dEFycmF5ID0gWzBdO1xuICAgIHRoaXMudGV4dEFycmF5ID0gW107IC8vIOODhuOCreOCueODiOOCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHRoaXMuc2VsZWN0QXJyYXkgPSBbdGhpcy5zZWxlY3RWYWx1ZUxpc3RbMF0udmFsdWVdOyAvLyDjgrvjg6zjgq/jg4go6KaL5Ye644GX44KE44Kz44O844OJ44Gq44GpKeOCkuagvOe0jeOBmeOCi+mFjeWIl1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2VUaXRsZTogJycsXG4gICAgICB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5LFxuICAgICAgc2VsZWN0VmFsdWU6IHRoaXMuc2VsZWN0QXJyYXksXG4gICAgICB0ZXh0TGFuZ1ZhbHVlOiAnJyxcbiAgICAgIHNlbGVjdExhbmdWYWx1ZTogdGhpcy5sYW5nTGlzdFswXSxcbiAgICAgIGlucHV0OiAwXG4gICAgfTtcblxuICAgIHRoaXMuYWRkRmxnID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogdGl0bGXjga7lpInmm7RcbiAgICovXG4gIHRpdGxlVmFsdWVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFnZVRpdGxlOiB2YWx1ZX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0ZXh044Gu5aSJ5pu0XG4gICAqL1xuICB0ZXh0VmFsdWVDaGFuZ2UodmFsdWUsIHZhbHVlSWQpIHtcbiAgICB0aGlzLnRleHRBcnJheVt2YWx1ZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5IH0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDoqIDoqp7jga7jg4bjgq3jgrnjg4jjga7lpInmm7RcbiAgICovXG4gIHRleHRMYW5nVmFsdWVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dExhbmdWYWx1ZTogdmFsdWV9ICk7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0KOimi+WHuuOBl+OChOOCs+ODvOODieOBquOBqSnjga7lpInmm7RcbiAgICovXG4gIHNlbGVjdFZhbHVlQ2hhbmdlKHZhbHVlLCB2YWx1ZUlkKSB7XG4gICAgdGhpcy5zZWxlY3RBcnJheVt2YWx1ZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RWYWx1ZTogdGhpcy5zZWxlY3RBcnJheX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDoqIDoqp7jga5zZWxlY3Tjga7lpInmm7RcbiAgICovXG4gIHNlbGVjdFZhbHVlQ2hhbmdlTGFuZyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RMYW5nVmFsdWU6IHZhbHVlfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeS7mOihqOekulxuICAgKi9cbiAgc2V0RGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBzZXREYXRlVmFsdWUgPSBgJHt5ZWFyfS4ke21vbnRofS4ke2RheX1gO1xuICAgIHJldHVybiBzZXREYXRlVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog5YWl5Yqb44Gu6KSH6KO9XG4gICAqL1xuICBhZGRJbnB1dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXQ6IHRoaXMuc3RhdGUuaW5wdXQgKyAxIH0pO1xuICAgIHRoaXMuYWRkRmxnID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Xjgqnjg7zjg6Djga7opIfoo71cbiAgICovXG4gIGFkZElucHV0UmVuZGVyKCkge1xuXG4gICAgaWYgKHRoaXMuYWRkRmxnKSB7XG4gICAgICB0aGlzLmFkZElucHV0QXJyYXkucHVzaCh0aGlzLnN0YXRlLmlucHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hZGRJbnB1dEFycmF5Lm1hcCgoX3ZhbHVlLCBfaW5kZXgpID0+IChcbiAgICAgIHRoaXMuYWRkRmxnID0gZmFsc2UsXG4gICAgICA8RWRpdFNlbGVjdElucHV0XG4gICAgICAgIGtleT17X2luZGV4fVxuICAgICAgICB0ZXh0SWQ9e2BpbnB1dElkLSR7X2luZGV4fWB9XG4gICAgICAgIHRleHRWYWx1ZT17dGhpcy5zdGF0ZS50ZXh0VmFsdWVbX2luZGV4XX1cbiAgICAgICAgdGV4dFZhbHVlQ2hhbmdlPXt0aGlzLnRleHRWYWx1ZUNoYW5nZX1cbiAgICAgICAgc2VsZWN0VmFsdWVMaXN0PXt0aGlzLnNlbGVjdFZhbHVlTGlzdH1cbiAgICAgICAgc2VsZWN0VmFsdWU9e3RoaXMuc2VsZWN0VmFsdWVDaGFuZ2V9XG4gICAgICAgIHZhbHVlUmVtb3ZlPXt0aGlzLnRleHRWYWx1ZUNoYW5nZVJlbW92ZX1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICAvKipcbiAgICog5paH6KiA44Gu6KSH6KO9XG4gICAqL1xuICBhZGRUZXh0UmVuZGVyKCkge1xuXG4gICAgaWYgKHRoaXMuYWRkRmxnKSB7XG4gICAgICB0aGlzLmFkZFRleHRBcnJheS5wdXNoKHRoaXMuc3RhdGUuaW5wdXQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFkZFRleHRBcnJheS5tYXAoKF92YWx1ZSwgX2luZGV4KSA9PiAoXG4gICAgICA8RWRpdFRleHRSZW5kZXJcbiAgICAgICAga2V5PXtfaW5kZXh9XG4gICAgICAgIHRleHRJZD17YGlucHV0VGV4dElkLSR7X2luZGV4fWB9XG4gICAgICAgIHRleHRWYWx1ZT17dGhpcy5zdGF0ZS50ZXh0VmFsdWVbX2luZGV4XX1cbiAgICAgICAgc2VsZWN0VmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0VmFsdWVbX2luZGV4XX1cbiAgICAgICAgc2VsZWN0VmFsdWVMaXN0PXt0aGlzLnNlbGVjdFZhbHVlTGlzdH1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICAvKipcbiAgICog5YWl5Yqb44Gu5YmK6ZmkXG4gICAqL1xuICB0ZXh0VmFsdWVDaGFuZ2VSZW1vdmUocmVtb3ZlSWQpIHtcblxuICAgIHRoaXMudGV4dEFycmF5LnNwbGljZShyZW1vdmVJZCwgMSk7XG4gICAgdGhpcy5hZGRJbnB1dEFycmF5LnBvcCgpO1xuICAgIHRoaXMuYWRkVGV4dEFycmF5LnBvcCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dDogdGhpcy5zdGF0ZS5pbnB1dCAtIDEsXG4gICAgICB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5LFxuICAgIH0pO1xuICB9XG5cbiAgZWRpdENsb3NlKCkge1xuICAgIGNvbnNvbGUubG9nKCdlZGl0Q2xvc2UnKTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKCdvblN1Ym1pdCcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dEFycmF5KTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXQtd3JhcHBlclwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9ja3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19fYm94XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19faW5uZXJcIj5cbiAgICAgICAgICAgICAgPEVkaXRIZWFkZXJSZW5kZXJcbiAgICAgICAgICAgICAgICBoZWFkZXJWYWx1ZT17dGhpcy5zdGF0ZS5wYWdlVGl0bGV9XG4gICAgICAgICAgICAgICAgc2VsZWN0TGFuZz17dGhpcy5zdGF0ZS5zZWxlY3RMYW5nVmFsdWV9XG4gICAgICAgICAgICAgICAgbGFuZ1RleHQ9e3RoaXMuc3RhdGUudGV4dExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2tzX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX3RpbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnNldERhdGUoKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyB0aGlzLmFkZFRleHRSZW5kZXIoKSB9XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19pbm5lclwiPlxuICAgICAgICAgICAgPEVkaXRJbnB1dFxuICAgICAgICAgICAgICBoZWFkZXJWYWx1ZT17dGhpcy5zdGF0ZS5wYWdlVGl0bGV9XG4gICAgICAgICAgICAgIGhlYWRlclZhbHVlQ2hhbmdlPXt0aGlzLnRpdGxlVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVkaXRTZWxlY3RMYW5nXG4gICAgICAgICAgICAgIHRleHRMYW5nVmFsdWU9e3RoaXMuc3RhdGUudGV4dExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgdGV4dExhbmdWYWx1ZUNoYW5nZT17dGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlfVxuICAgICAgICAgICAgICBzZWxlY3RMYW5nTGlzdD17dGhpcy5sYW5nTGlzdH1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ1ZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ1ZhbHVlQ2hhbmdlPXt0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlTGFuZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IHRoaXMuYWRkSW5wdXRSZW5kZXIoKSB9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19idXR0b24gZWRpdF9fYnV0dG9uLS1jbG9zZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZWRpdENsb3NlfT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tcGx1c1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkSW5wdXR9PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19idXR0b24gZWRpdF9fYnV0dG9uLS1zdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXQucHJvcFR5cGVzID0ge1xuICBwYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRWYWx1ZTogUHJvcFR5cGVzLmFycmF5LFxuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLmFycmF5LFxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiLyoqXG4gKiBAZmlsZSDjgr/jgqTjg4jjg6vmj4/nlLtcbiAqIFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRWRpdExhbmdSZW5kZXIgZnJvbSAnLi9FZGl0TGFuZ1JlbmRlcic7XG5cbmNsYXNzIEVkaXRIZWFkZXJSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJsb2Nrc19faGVhZGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJibG9ja3NfX3RpdGxlXCI+e3RoaXMucHJvcHMuaGVhZGVyVmFsdWV9PC9oMj5cbiAgICAgICAgPEVkaXRMYW5nUmVuZGVyIFxuICAgICAgICAgIGxhbmc9e3RoaXMucHJvcHMuc2VsZWN0TGFuZ31cbiAgICAgICAgICB0ZXh0PXt0aGlzLnByb3BzLmxhbmdUZXh0fVxuICAgICAgICAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRIZWFkZXJSZW5kZXIucHJvcFR5cGVzID0ge1xuICBoZWFkZXJWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0TGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZ1RleHQ6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdEhlYWRlclJlbmRlcjtcbiIsIi8qKlxuICogQGZpbGUg44OG44Kt44K544OI5YWl5Yqb44OV44Kp44O844OgXG4gKiBcbiAqL1xuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UgPSB0aGlzLnZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZShzZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmhlYWRlclZhbHVlQ2hhbmdlKHNldFZhbHVlKTtcbiAgfVxuICBcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1ibG9ja1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi44Oa44O844K444K/44Kk44OI44Or44KS5YWl5YqbXCIgdmFsdWU9e3RoaXMucHJvcHMuaGVhZGVyVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy52YWx1ZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdElucHV0LnByb3BUeXBlcyA9IHtcbiAgaGVhZGVyVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBoZWFkZXJWYWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0SW5wdXQ7XG4iLCIvKipcbiAqIEBmaWxlIOOCv+OCpOODiOODq+aPj+eUu1xuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRMYW5nUmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsc1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhYmVsc19fbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BsYWJlbHNfX21haW4gbGFiZWxzX19tYWluLS0ke3RoaXMucHJvcHMubGFuZ31gfT57dGhpcy5wcm9wcy5sYW5nfTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFiZWxzX19saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGxhYmVsc19fc3ViIGxhYmVsc19fc3ViLS0ke3RoaXMucHJvcHMubGFuZ31gfT57dGhpcy5wcm9wcy50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0TGFuZ1JlbmRlci5wcm9wVHlwZXMgPSB7XG4gIGxhbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdExhbmdSZW5kZXI7XG4iLCIvKipcbiAqIEBmaWxlIOODhuOCreOCueODiOWFpeWKm+ODleOCqeODvOODoCjpgbjmip7lnospXG4gKiBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdFNlbGVjdElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVJbnB1dCA9IHRoaXMucmVtb3ZlSW5wdXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44K744Os44Kv44OI44Oc44OD44Kv44K5XG4gICAqL1xuICBoYW5kbGVDaGFuZ2Uoc2V0VmFsdWUsIHRleHRJZCkge1xuICAgIGNvbnN0IGlkTnVtYmVyID0gTnVtYmVyKHRleHRJZC5yZXBsYWNlKCdpbnB1dElkLScsICcnKSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0VmFsdWUoc2V0VmFsdWUsIGlkTnVtYmVyKVxuICB9XG5cbiAgc2V0T3B0aW9uKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3QubWFwKChfaXRlbSwgX251bWJlcikgPT4gKFxuICAgICAgPG9wdGlvbiBrZXk9e19udW1iZXJ9IHZhbHVlPXtfaXRlbS52YWx1ZX0+e19pdGVtLnRleHR9PC9vcHRpb24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogaW5wdXRcbiAgICovXG4gIHZhbHVlQ2hhbmdlKHNldFZhbHVlLCB0ZXh0SWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHNldFZhbHVlfSk7XG4gICAgY29uc3QgaWROdW1iZXIgPSBOdW1iZXIodGV4dElkLnJlcGxhY2UoJ2lucHV0SWQtJywgJycpKTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50ZXh0VmFsdWVDaGFuZ2Uoc2V0VmFsdWUsIGlkTnVtYmVyKTtcbiAgfVxuXG4gIHJlbW92ZUlucHV0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJyd9KTtcbiAgICBjb25zdCBpZE51bWJlciA9IE51bWJlcih0aGlzLnByb3BzLnRleHRJZC5yZXBsYWNlKCdpbnB1dElkLScsICcnKSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWVSZW1vdmUoaWROdW1iZXIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuc2V0T3B0aW9uKCk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1ibG9ja1wiIGlkPXt0aGlzLnByb3BzLnRleHRJZH0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC10aXRsZVwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXNlbGVjdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCB0aGlzLnByb3BzLnRleHRJZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuc2V0T3B0aW9uKCl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1pbnB1dFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmlofoqIDjgpLlhaXliptcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudmFsdWVDaGFuZ2UoZS50YXJnZXQudmFsdWUsIHRoaXMucHJvcHMudGV4dElkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJlZGl0X19idXR0b24gZWRpdF9fYnV0dG9uLS1taW51c1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSW5wdXR9PjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRTZWxlY3RJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIHNlbGVjdFZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0VmFsdWVMaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIHRleHRWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZVJlbW92ZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFNlbGVjdElucHV0O1xuIiwiLyoqXG4gKiBAZmlsZSDoqIDoqp7jg5Xjgqnjg7zjg6Ao6YG45oqe5Z6LKVxuICogXG4gKi9cblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdFNlbGVjdExhbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrvjg6zjgq/jg4jjg5zjg4Pjgq/jgrlcbiAgICovXG4gIGhhbmRsZUNoYW5nZShzZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdExhbmdWYWx1ZUNoYW5nZShzZXRWYWx1ZSlcbiAgfVxuXG4gIHNldE9wdGlvbigpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuc2VsZWN0TGFuZ0xpc3QubWFwKChfaXRlbSwgX251bWJlcikgPT4gKFxuICAgICAgPG9wdGlvbiBrZXk9e19udW1iZXJ9IHZhbHVlPXtfaXRlbX0+e19pdGVtfTwvb3B0aW9uPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGlucHV0XG4gICAqL1xuICB2YWx1ZUNoYW5nZShzZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRleHRMYW5nVmFsdWVDaGFuZ2Uoc2V0VmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuc2V0T3B0aW9uKCk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1ibG9ja1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtdGl0bGUgZWRpdF9faW5wdXQtdGl0bGUtLWxhbmdcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1zZWxlY3RcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc2VsZWN0TGFuZ1ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAge3RoaXMuc2V0T3B0aW9uKCl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1pbnB1dFwiPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6Zai6YCj44Ov44O844OJ44KS5YWl5YqbXCIgdmFsdWU9e3RoaXMucHJvcHMudGV4dExhbmdWYWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnZhbHVlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0U2VsZWN0TGFuZy5wcm9wVHlwZXMgPSB7XG4gIHNlbGVjdFZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0TGFuZ1ZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0TGFuZ1ZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RMYW5nTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICB0ZXh0TGFuZ1ZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGV4dExhbmdWYWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0U2VsZWN0TGFuZztcbiIsIi8qKlxuICogQGZpbGUg44K/44Kk44OI44Or5o+P55S7XG4gKiBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdFRleHRSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiDmnKzmlofjgqjjg6rjgqLjga7jg5Hjg7zjg4RcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyVGV4dEJsb2NrKCkge1xuICAgIGxldCBibG9jayA9ICcnO1xuXG4gICAgc3dpdGNoKHRoaXMucHJvcHMuc2VsZWN0VmFsdWUpIHtcblxuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFswXS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8aDMgY2xhc3NOYW1lPVwiYmxvY2tzX190aXRsZVwiPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L2gzPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzFdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxoMyBjbGFzc05hbWU9XCJibG9ja3NfX2Rlc2NyaXB0aW9uLXRpdGxlXCI+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvaDM+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbMl0udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPHA+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvcD47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFszXS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8cHJlIGNsYXNzTmFtZT1cImJsb2Nrc19fY29kZVwiPjxjb2RlIGNsYXNzTmFtZT1cInJ1YnlcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9jb2RlPjwvcHJlPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzRdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX19jb2RlLXByZXZpZXdcIj48Y29kZSBjbGFzc05hbWU9XCJibG9ja3NfX2NvZGUtcHJldmlldy10ZXh0XCI+PHA+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvcD48L2NvZGU+PC9kaXY+O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYmxvY2sgPSA8aDMgY2xhc3NOYW1lPVwiYmxvY2tzX190aXRsZVwiPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L2gzPjtcbiAgICAgICAgYnJlYWs7XG4gICB9XG5cbiAgICByZXR1cm4gYmxvY2s7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX3BhcmFncmFwaFwiIGlkPXt0aGlzLnByb3BzLnRleHRJZH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJUZXh0QmxvY2soKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdFRleHRSZW5kZXIucHJvcFR5cGVzID0ge1xuICB0ZXh0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RWYWx1ZUxpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgdGV4dElkOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRUZXh0UmVuZGVyO1xuIiwiaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5jb25zdCBzb2NrZXRGbiA9ICgpID0+IHtcblxuICBjb25zdCBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcblxuICBzb2NrZXQub24oJ3JlbG9hZCcsICgpID0+IHtcbiAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJyk7XG4gIH0pO1xufTtcblxuc29ja2V0Rm4oKTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=
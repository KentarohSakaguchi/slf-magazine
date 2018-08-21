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
/* harmony import */ var _modules_Socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/Socket */ "./app/scripts/develop/modules/Socket.js");
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


highlight_js__WEBPACK_IMPORTED_MODULE_2___default.a.initHighlightingOnLoad();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21tb24vY29tbW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9lZGl0L0VkaXQuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRIZWFkZXJSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdExhbmdSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRUZXh0UmVuZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL21vZHVsZXMvU29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsImhsanMiLCJpbml0SGlnaGxpZ2h0aW5nT25Mb2FkIiwiRWRpdCIsInByb3BzIiwidGl0bGVWYWx1ZUNoYW5nZSIsImJpbmQiLCJ0ZXh0VmFsdWVDaGFuZ2UiLCJzZWxlY3RWYWx1ZUNoYW5nZSIsInRleHRMYW5nVmFsdWVDaGFuZ2UiLCJzZWxlY3RWYWx1ZUNoYW5nZUxhbmciLCJhZGRJbnB1dCIsImFkZElucHV0UmVuZGVyIiwiYWRkVGV4dFJlbmRlciIsInRleHRWYWx1ZUNoYW5nZVJlbW92ZSIsImVkaXRDbG9zZSIsIm9uUmVjIiwiY2FuY2VsIiwic2VsZWN0VmFsdWVMaXN0IiwidmFsdWUiLCJ0ZXh0IiwibGFuZ0xpc3QiLCJhZGRJbnB1dEFycmF5IiwiYWRkVGV4dEFycmF5IiwidGV4dEFycmF5Iiwic2VsZWN0QXJyYXkiLCJzdGF0ZSIsInBhZ2VUaXRsZSIsInRleHRWYWx1ZSIsInNlbGVjdFZhbHVlIiwidGV4dExhbmdWYWx1ZSIsInNlbGVjdExhbmdWYWx1ZSIsImlucHV0IiwiYWN0aXZlQ2xhc3MiLCJzdWJtaXRDbGFzcyIsImFkZEZsZyIsInNldFN0YXRlIiwidmFsdWVJZCIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJzZXREYXRlVmFsdWUiLCJwdXNoIiwibWFwIiwiX3ZhbHVlIiwiX2luZGV4IiwicmVtb3ZlSWQiLCJzcGxpY2UiLCJwb3AiLCJzYXZlVGFyZ2V0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNhdmVIdG1sIiwib3V0ZXJIVE1MIiwic2F2ZUh0bWxTZXQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwic2V0RGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiRWRpdEhlYWRlclJlbmRlciIsImhlYWRlclZhbHVlIiwic2VsZWN0TGFuZyIsImxhbmdUZXh0IiwiRWRpdElucHV0IiwidmFsdWVDaGFuZ2UiLCJzZXRWYWx1ZSIsImhlYWRlclZhbHVlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZ1bmMiLCJFZGl0TGFuZ1JlbmRlciIsImxhbmciLCJFZGl0U2VsZWN0SW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJyZW1vdmVJbnB1dCIsInRleHRJZCIsImlkTnVtYmVyIiwiTnVtYmVyIiwicmVwbGFjZSIsIml0ZW1zIiwiX2l0ZW0iLCJfbnVtYmVyIiwidmFsdWVSZW1vdmUiLCJzZXRPcHRpb24iLCJFZGl0U2VsZWN0TGFuZyIsInNlbGVjdExhbmdWYWx1ZUNoYW5nZSIsInNlbGVjdExhbmdMaXN0IiwiRWRpdFRleHRSZW5kZXIiLCJibG9jayIsInJlbmRlclRleHRCbG9jayIsInNvY2tldEZuIiwic29ja2V0IiwiaW8iLCJjb25uZWN0Iiwib24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7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LFlBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsR0FIRDtBQUlELENBUkQ7O0FBVUFxQyxXOzs7Ozs7Ozs7OztBQ1pBLGUiLCJmaWxlIjoiY29tbW9uLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29tbW9uXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbW1vbi9jb21tb24uanN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipcbiAqIEBmaWxlcyBjb21tb24uanN4XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJ1xuXG5pbXBvcnQgRWRpdCBmcm9tICcuLi9jb21wb25lbnQvZWRpdC9FZGl0Jztcbi8vIGltcG9ydCBNb3VudCBmcm9tICcuLi9jb21wb25lbnQvTW91bnQnO1xuXG5jb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWVkaXQnKTtcbi8vIGNvbnNvbGUubG9nKFtlZGl0XS5sZW5ndGgpO1xuXG5pZiAoW2VkaXRdWzBdICE9PSBudWxsKSB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8RWRpdCAvPiwgZWRpdFxuICApO1xufVxuXG4vLyBjb25zdCBtbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1lZGl0LW0nKTtcblxuLy8gaWYgKFtlZGl0XVswXSAhPT0gbnVsbCkge1xuLy8gICBSZWFjdERPTS5yZW5kZXIoXG4vLyAgICAgPE1vdW50IC8+LCBtbVxuLy8gICApO1xuLy8gfVxuXG5cbmhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xuXG5cbmltcG9ydCAnLi4vbW9kdWxlcy9Tb2NrZXQnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBFZGl0SGVhZGVyUmVuZGVyIGZyb20gJy4vY29tcG9uZW50L0VkaXRIZWFkZXJSZW5kZXInO1xuaW1wb3J0IEVkaXRUZXh0UmVuZGVyIGZyb20gJy4vY29tcG9uZW50L0VkaXRUZXh0UmVuZGVyJztcblxuaW1wb3J0IEVkaXRJbnB1dCBmcm9tICcuL2NvbXBvbmVudC9FZGl0SW5wdXQnO1xuaW1wb3J0IEVkaXRTZWxlY3RJbnB1dCBmcm9tICcuL2NvbXBvbmVudC9FZGl0U2VsZWN0SW5wdXQnO1xuaW1wb3J0IEVkaXRTZWxlY3RMYW5nIGZyb20gJy4vY29tcG9uZW50L0VkaXRTZWxlY3RMYW5nJztcblxuY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudGl0bGVWYWx1ZUNoYW5nZSA9IHRoaXMudGl0bGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dFZhbHVlQ2hhbmdlID0gdGhpcy50ZXh0VmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlID0gdGhpcy5zZWxlY3RWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dExhbmdWYWx1ZUNoYW5nZSA9IHRoaXMudGV4dExhbmdWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0VmFsdWVDaGFuZ2VMYW5nID0gdGhpcy5zZWxlY3RWYWx1ZUNoYW5nZUxhbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZElucHV0ID0gdGhpcy5hZGRJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkSW5wdXRSZW5kZXIgPSB0aGlzLmFkZElucHV0UmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRUZXh0UmVuZGVyID0gdGhpcy5hZGRUZXh0UmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0VmFsdWVDaGFuZ2VSZW1vdmUgPSB0aGlzLnRleHRWYWx1ZUNoYW5nZVJlbW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWRpdENsb3NlID0gdGhpcy5lZGl0Q2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVjID0gdGhpcy5vblJlYy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FuY2VsID0gdGhpcy5jYW5jZWwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc2VsZWN0VmFsdWVMaXN0ID0gW1xuICAgICAgeyB2YWx1ZTogJ2gzJywgdGV4dDogJ+S4reimi+WHuuOBlycgfSxcbiAgICAgIHsgdmFsdWU6ICdoNCcsIHRleHQ6ICflsI/opovlh7rjgZcnIH0sXG4gICAgICB7IHZhbHVlOiAncCcsIHRleHQ6ICfmlofoqIAnIH0sXG4gICAgICB7IHZhbHVlOiAnY29kZScsIHRleHQ6ICfjgrPjg7zjg4knIH0sXG4gICAgICB7IHZhbHVlOiAnY21kJywgdGV4dDogJ+OCs+ODnuODs+ODiScgfVxuICAgIF07XG5cbiAgICB0aGlzLmxhbmdMaXN0ID0gWydqYXZhc2NyaXB0JywgJ2NzcycsICdodG1sJywgJ3J1YnknLCAncHl0aG9uJywgJ2dvJywgJ3BocCddO1xuXG4gICAgdGhpcy5hZGRJbnB1dEFycmF5ID0gWzBdO1xuICAgIHRoaXMuYWRkVGV4dEFycmF5ID0gWzBdO1xuICAgIHRoaXMudGV4dEFycmF5ID0gW107IC8vIOODhuOCreOCueODiOOCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHRoaXMuc2VsZWN0QXJyYXkgPSBbdGhpcy5zZWxlY3RWYWx1ZUxpc3RbMF0udmFsdWVdOyAvLyDjgrvjg6zjgq/jg4go6KaL5Ye644GX44KE44Kz44O844OJ44Gq44GpKeOCkuagvOe0jeOBmeOCi+mFjeWIl1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2VUaXRsZTogJycsXG4gICAgICB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5LFxuICAgICAgc2VsZWN0VmFsdWU6IHRoaXMuc2VsZWN0QXJyYXksXG4gICAgICB0ZXh0TGFuZ1ZhbHVlOiAnJyxcbiAgICAgIHNlbGVjdExhbmdWYWx1ZTogdGhpcy5sYW5nTGlzdFswXSxcbiAgICAgIGlucHV0OiAwLFxuICAgICAgYWN0aXZlQ2xhc3M6ICcnLFxuICAgICAgc3VibWl0Q2xhc3M6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuYWRkRmxnID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogdGl0bGXjga7lpInmm7RcbiAgICovXG4gIHRpdGxlVmFsdWVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFnZVRpdGxlOiB2YWx1ZX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0ZXh044Gu5aSJ5pu0XG4gICAqL1xuICB0ZXh0VmFsdWVDaGFuZ2UodmFsdWUsIHZhbHVlSWQpIHtcbiAgICB0aGlzLnRleHRBcnJheVt2YWx1ZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5IH0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDoqIDoqp7jga7jg4bjgq3jgrnjg4jjga7lpInmm7RcbiAgICovXG4gIHRleHRMYW5nVmFsdWVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dExhbmdWYWx1ZTogdmFsdWV9ICk7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0KOimi+WHuuOBl+OChOOCs+ODvOODieOBquOBqSnjga7lpInmm7RcbiAgICovXG4gIHNlbGVjdFZhbHVlQ2hhbmdlKHZhbHVlLCB2YWx1ZUlkKSB7XG4gICAgdGhpcy5zZWxlY3RBcnJheVt2YWx1ZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RWYWx1ZTogdGhpcy5zZWxlY3RBcnJheX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDoqIDoqp7jga5zZWxlY3Tjga7lpInmm7RcbiAgICovXG4gIHNlbGVjdFZhbHVlQ2hhbmdlTGFuZyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RMYW5nVmFsdWU6IHZhbHVlfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeS7mOihqOekulxuICAgKi9cbiAgc2V0RGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBzZXREYXRlVmFsdWUgPSBgJHt5ZWFyfS4ke21vbnRofS4ke2RheX1gO1xuICAgIHJldHVybiBzZXREYXRlVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog5YWl5Yqb44Gu6KSH6KO9XG4gICAqL1xuICBhZGRJbnB1dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXQ6IHRoaXMuc3RhdGUuaW5wdXQgKyAxIH0pO1xuICAgIHRoaXMuYWRkRmxnID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Xjgqnjg7zjg6Djga7opIfoo71cbiAgICovXG4gIGFkZElucHV0UmVuZGVyKCkge1xuXG4gICAgaWYgKHRoaXMuYWRkRmxnKSB7XG4gICAgICB0aGlzLmFkZElucHV0QXJyYXkucHVzaCh0aGlzLnN0YXRlLmlucHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hZGRJbnB1dEFycmF5Lm1hcCgoX3ZhbHVlLCBfaW5kZXgpID0+IChcbiAgICAgIHRoaXMuYWRkRmxnID0gZmFsc2UsXG4gICAgICA8RWRpdFNlbGVjdElucHV0XG4gICAgICAgIGtleT17X2luZGV4fVxuICAgICAgICB0ZXh0SWQ9e2BpbnB1dElkLSR7X2luZGV4fWB9XG4gICAgICAgIHRleHRWYWx1ZT17dGhpcy5zdGF0ZS50ZXh0VmFsdWVbX2luZGV4XX1cbiAgICAgICAgdGV4dFZhbHVlQ2hhbmdlPXt0aGlzLnRleHRWYWx1ZUNoYW5nZX1cbiAgICAgICAgc2VsZWN0VmFsdWVMaXN0PXt0aGlzLnNlbGVjdFZhbHVlTGlzdH1cbiAgICAgICAgc2VsZWN0VmFsdWU9e3RoaXMuc2VsZWN0VmFsdWVDaGFuZ2V9XG4gICAgICAgIHZhbHVlUmVtb3ZlPXt0aGlzLnRleHRWYWx1ZUNoYW5nZVJlbW92ZX1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICAvKipcbiAgICog5paH6KiA44Gu6KSH6KO9XG4gICAqL1xuICBhZGRUZXh0UmVuZGVyKCkge1xuXG4gICAgaWYgKHRoaXMuYWRkRmxnKSB7XG4gICAgICB0aGlzLmFkZFRleHRBcnJheS5wdXNoKHRoaXMuc3RhdGUuaW5wdXQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFkZFRleHRBcnJheS5tYXAoKF92YWx1ZSwgX2luZGV4KSA9PiAoXG4gICAgICA8RWRpdFRleHRSZW5kZXJcbiAgICAgICAga2V5PXtfaW5kZXh9XG4gICAgICAgIHRleHRJZD17YGlucHV0VGV4dElkLSR7X2luZGV4fWB9XG4gICAgICAgIHRleHRWYWx1ZT17dGhpcy5zdGF0ZS50ZXh0VmFsdWVbX2luZGV4XX1cbiAgICAgICAgc2VsZWN0VmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0VmFsdWVbX2luZGV4XX1cbiAgICAgICAgc2VsZWN0VmFsdWVMaXN0PXt0aGlzLnNlbGVjdFZhbHVlTGlzdH1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cblxuICAvKipcbiAgICog5YWl5Yqb44Gu5YmK6ZmkXG4gICAqL1xuICB0ZXh0VmFsdWVDaGFuZ2VSZW1vdmUocmVtb3ZlSWQpIHtcblxuICAgIHRoaXMudGV4dEFycmF5LnNwbGljZShyZW1vdmVJZCwgMSk7XG4gICAgdGhpcy5hZGRJbnB1dEFycmF5LnBvcCgpO1xuICAgIHRoaXMuYWRkVGV4dEFycmF5LnBvcCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dDogdGhpcy5zdGF0ZS5pbnB1dCAtIDEsXG4gICAgICB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGVkaXTpoIXnm67jgpLpnZ7ooajnpLrjgatcbiAgICovXG4gIGVkaXRDbG9zZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVDbGFzcyAhPT0gJ2lzLWhpZGUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlQ2xhc3M6ICdpcy1oaWRlJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlQ2xhc3M6ICcnfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiomOmMsuODnOOCv+ODsyhoaWRlbuOBq3ZhbHVl44KSc2V0KVxuICAgKi9cbiAgb25SZWMoKSB7XG4gICAgY29uc3Qgc2F2ZVRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Jsb2NrcycpO1xuICAgIGNvbnN0IHNhdmVIdG1sID0gc2F2ZVRhcmdldFswXS5vdXRlckhUTUw7XG4gICAgY29uc3Qgc2F2ZUh0bWxTZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2F2ZUh0bWwnKTtcbiAgICBzYXZlSHRtbFNldC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc2F2ZUh0bWwpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc3VibWl0Q2xhc3MgIT09ICdpcy1zaG93Jykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdENsYXNzOiAnaXMtc2hvdyd9KTtcbiAgICB9XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3VibWl0Q2xhc3MgPT09ICdpcy1zaG93Jykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdENsYXNzOiAnJ30pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRleHRBcnJheSk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0LXdyYXBwZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2F2ZVwiIGlkPVwianMtc2F2ZUh0bWxcIi8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2Nrc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX19ib3hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX19pbm5lclwiPlxuICAgICAgICAgICAgICA8RWRpdEhlYWRlclJlbmRlclxuICAgICAgICAgICAgICAgIGhlYWRlclZhbHVlPXt0aGlzLnN0YXRlLnBhZ2VUaXRsZX1cbiAgICAgICAgICAgICAgICBzZWxlY3RMYW5nPXt0aGlzLnN0YXRlLnNlbGVjdExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgICBsYW5nVGV4dD17dGhpcy5zdGF0ZS50ZXh0TGFuZ1ZhbHVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9ja3NfX3RleHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19fdGltZVwiPlxuICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc2V0RGF0ZSgpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7IHRoaXMuYWRkVGV4dFJlbmRlcigpIH1cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGVkaXQgJHt0aGlzLnN0YXRlLmFjdGl2ZUNsYXNzfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5uZXJcIj5cbiAgICAgICAgICAgIDxFZGl0SW5wdXRcbiAgICAgICAgICAgICAgaGVhZGVyVmFsdWU9e3RoaXMuc3RhdGUucGFnZVRpdGxlfVxuICAgICAgICAgICAgICBoZWFkZXJWYWx1ZUNoYW5nZT17dGhpcy50aXRsZVZhbHVlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFZGl0U2VsZWN0TGFuZ1xuICAgICAgICAgICAgICB0ZXh0TGFuZ1ZhbHVlPXt0aGlzLnN0YXRlLnRleHRMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIHRleHRMYW5nVmFsdWVDaGFuZ2U9e3RoaXMudGV4dExhbmdWYWx1ZUNoYW5nZX1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ0xpc3Q9e3RoaXMubGFuZ0xpc3R9XG4gICAgICAgICAgICAgIHNlbGVjdExhbmdWYWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIHNlbGVjdExhbmdWYWx1ZUNoYW5nZT17dGhpcy5zZWxlY3RWYWx1ZUNoYW5nZUxhbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyB0aGlzLmFkZElucHV0UmVuZGVyKCkgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2J1dHRvbiBlZGl0X19idXR0b24tLWNsb3NlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5lZGl0Q2xvc2V9PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19idXR0b24gZWRpdF9fYnV0dG9uLS1wbHVzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRJbnB1dH0+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2J1dHRvbiBlZGl0X19idXR0b24tLXJlY1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZWN9PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BlZGl0X19idXR0b24td3JhcHBlciBlZGl0X19idXR0b24td3JhcHBlci0tc3VibWl0ICR7dGhpcy5zdGF0ZS5zdWJtaXRDbGFzc31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tLXN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIFNVQk1JVFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tLW5nXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNhbmNlbH0+XG4gICAgICAgICAgICAgICAgQ0FOQ0VMXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdC5wcm9wVHlwZXMgPSB7XG4gIHBhZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dFZhbHVlOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNlbGVjdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuYXJyYXksXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCIvKipcbiAqIEBmaWxlIOOCv+OCpOODiOODq+aPj+eUu1xuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBFZGl0TGFuZ1JlbmRlciBmcm9tICcuL0VkaXRMYW5nUmVuZGVyJztcblxuY2xhc3MgRWRpdEhlYWRlclJlbmRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmxvY2tzX19oZWFkZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy5oZWFkZXJWYWx1ZX08L2gyPlxuICAgICAgICA8RWRpdExhbmdSZW5kZXIgXG4gICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5zZWxlY3RMYW5nfVxuICAgICAgICAgIHRleHQ9e3RoaXMucHJvcHMubGFuZ1RleHR9XG4gICAgICAgIC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdEhlYWRlclJlbmRlci5wcm9wVHlwZXMgPSB7XG4gIGhlYWRlclZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RMYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5nVGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0SGVhZGVyUmVuZGVyO1xuIiwiLyoqXG4gKiBAZmlsZSDjg4bjgq3jgrnjg4jlhaXlipvjg5Xjgqnjg7zjg6BcbiAqIFxuICovXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZSA9IHRoaXMudmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlKHNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaGVhZGVyVmFsdWVDaGFuZ2Uoc2V0VmFsdWUpO1xuICB9XG4gIFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWJsb2NrXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1pbnB1dFwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLjg5rjg7zjgrjjgr/jgqTjg4jjg6vjgpLlhaXliptcIiB2YWx1ZT17dGhpcy5wcm9wcy5oZWFkZXJWYWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnZhbHVlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0SW5wdXQucHJvcFR5cGVzID0ge1xuICBoZWFkZXJWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGhlYWRlclZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRJbnB1dDtcbiIsIi8qKlxuICogQGZpbGUg44K/44Kk44OI44Or5o+P55S7XG4gKiBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdExhbmdSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFiZWxzX19saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGxhYmVsc19fbWFpbiBsYWJlbHNfX21haW4tLSR7dGhpcy5wcm9wcy5sYW5nfWB9Pnt0aGlzLnByb3BzLmxhbmd9PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYWJlbHNfX2xpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbGFiZWxzX19zdWIgbGFiZWxzX19zdWItLSR7dGhpcy5wcm9wcy5sYW5nfWB9Pnt0aGlzLnByb3BzLnRleHR9PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRMYW5nUmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0TGFuZ1JlbmRlcjtcbiIsIi8qKlxuICogQGZpbGUg44OG44Kt44K544OI5YWl5Yqb44OV44Kp44O844OgKOmBuOaKnuWeiylcbiAqIFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0U2VsZWN0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUlucHV0ID0gdGhpcy5yZW1vdmVJbnB1dC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrvjg6zjgq/jg4jjg5zjg4Pjgq/jgrlcbiAgICovXG4gIGhhbmRsZUNoYW5nZShzZXRWYWx1ZSwgdGV4dElkKSB7XG4gICAgY29uc3QgaWROdW1iZXIgPSBOdW1iZXIodGV4dElkLnJlcGxhY2UoJ2lucHV0SWQtJywgJycpKTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZShzZXRWYWx1ZSwgaWROdW1iZXIpXG4gIH1cblxuICBzZXRPcHRpb24oKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdC5tYXAoKF9pdGVtLCBfbnVtYmVyKSA9PiAoXG4gICAgICA8b3B0aW9uIGtleT17X251bWJlcn0gdmFsdWU9e19pdGVtLnZhbHVlfT57X2l0ZW0udGV4dH08L29wdGlvbj5cbiAgICApKTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBpbnB1dFxuICAgKi9cbiAgdmFsdWVDaGFuZ2Uoc2V0VmFsdWUsIHRleHRJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogc2V0VmFsdWV9KTtcbiAgICBjb25zdCBpZE51bWJlciA9IE51bWJlcih0ZXh0SWQucmVwbGFjZSgnaW5wdXRJZC0nLCAnJykpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRleHRWYWx1ZUNoYW5nZShzZXRWYWx1ZSwgaWROdW1iZXIpO1xuICB9XG5cbiAgcmVtb3ZlSW5wdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJ30pO1xuICAgIGNvbnN0IGlkTnVtYmVyID0gTnVtYmVyKHRoaXMucHJvcHMudGV4dElkLnJlcGxhY2UoJ2lucHV0SWQtJywgJycpKTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZVJlbW92ZShpZE51bWJlcik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRPcHRpb24oKTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWJsb2NrXCIgaWQ9e3RoaXMucHJvcHMudGV4dElkfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXRpdGxlXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtc2VsZWN0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUsIHRoaXMucHJvcHMudGV4dElkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5zZXRPcHRpb24oKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWlucHV0XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19pbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuaWh+iogOOCkuWFpeWKm1wiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy52YWx1ZUNoYW5nZShlLnRhcmdldC52YWx1ZSwgdGhpcy5wcm9wcy50ZXh0SWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImVkaXRfX2J1dHRvbiBlZGl0X19idXR0b24tLW1pbnVzXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbnB1dH0+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdFNlbGVjdElucHV0LnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RWYWx1ZUxpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgdGV4dFZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGV4dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlUmVtb3ZlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0U2VsZWN0SW5wdXQ7XG4iLCIvKipcbiAqIEBmaWxlIOiogOiqnuODleOCqeODvOODoCjpgbjmip7lnospXG4gKiBcbiAqL1xuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0U2VsZWN0TGFuZyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCu+ODrOOCr+ODiOODnOODg+OCr+OCuVxuICAgKi9cbiAgaGFuZGxlQ2hhbmdlKHNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0TGFuZ1ZhbHVlQ2hhbmdlKHNldFZhbHVlKVxuICB9XG5cbiAgc2V0T3B0aW9uKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5zZWxlY3RMYW5nTGlzdC5tYXAoKF9pdGVtLCBfbnVtYmVyKSA9PiAoXG4gICAgICA8b3B0aW9uIGtleT17X251bWJlcn0gdmFsdWU9e19pdGVtfT57X2l0ZW19PC9vcHRpb24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogaW5wdXRcbiAgICovXG4gIHZhbHVlQ2hhbmdlKHNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGV4dExhbmdWYWx1ZUNoYW5nZShzZXRWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRPcHRpb24oKTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWJsb2NrXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC10aXRsZSBlZGl0X19pbnB1dC10aXRsZS0tbGFuZ1wiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXNlbGVjdFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zZWxlY3RMYW5nVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICB7dGhpcy5zZXRPcHRpb24oKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWlucHV0XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLplqLpgKPjg6/jg7zjg4njgpLlhaXliptcIiB2YWx1ZT17dGhpcy5wcm9wcy50ZXh0TGFuZ1ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHRoaXMudmFsdWVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRTZWxlY3RMYW5nLnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RMYW5nVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RMYW5nVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdExhbmdMaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIHRleHRMYW5nVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0TGFuZ1ZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRTZWxlY3RMYW5nO1xuIiwiLyoqXG4gKiBAZmlsZSDjgr/jgqTjg4jjg6vmj4/nlLtcbiAqIFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0VGV4dFJlbmRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIOacrOaWh+OCqOODquOCouOBruODkeODvOODhFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXJUZXh0QmxvY2soKSB7XG4gICAgbGV0IGJsb2NrID0gJyc7XG5cbiAgICBzd2l0Y2godGhpcy5wcm9wcy5zZWxlY3RWYWx1ZSkge1xuXG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzBdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxoMyBjbGFzc05hbWU9XCJibG9ja3NfX3RpdGxlXCI+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvaDM+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbMV0udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fZGVzY3JpcHRpb24tdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFsyXS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8cD57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9wPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzNdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxwcmUgY2xhc3NOYW1lPVwiYmxvY2tzX19jb2RlXCI+PGNvZGUgY2xhc3NOYW1lPVwicnVieVwiPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L2NvZGU+PC9wcmU+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbNF0udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2NvZGUtcHJldmlld1wiPjxjb2RlIGNsYXNzTmFtZT1cImJsb2Nrc19fY29kZS1wcmV2aWV3LXRleHRcIj48cD57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9wPjwvY29kZT48L2Rpdj47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBibG9jayA9IDxoMyBjbGFzc05hbWU9XCJibG9ja3NfX3RpdGxlXCI+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvaDM+O1xuICAgICAgICBicmVhaztcbiAgIH1cblxuICAgIHJldHVybiBibG9jaztcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19fcGFyYWdyYXBoXCIgaWQ9e3RoaXMucHJvcHMudGV4dElkfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlclRleHRCbG9jaygpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0VGV4dFJlbmRlci5wcm9wVHlwZXMgPSB7XG4gIHRleHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdFZhbHVlTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICB0ZXh0SWQ6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFRleHRSZW5kZXI7XG4iLCJpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmNvbnN0IHNvY2tldEZuID0gKCkgPT4ge1xuXG4gIGNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuXG4gIHNvY2tldC5vbigncmVsb2FkJywgKCkgPT4ge1xuICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKTtcbiAgfSk7XG59O1xuXG5zb2NrZXRGbigpO1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21tb24vY29tbW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9lZGl0L0VkaXQuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRIZWFkZXJSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdExhbmdSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRUZXh0UmVuZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL21vZHVsZXMvU29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsImhsanMiLCJpbml0SGlnaGxpZ2h0aW5nT25Mb2FkIiwiRWRpdCIsInByb3BzIiwidGl0bGVWYWx1ZUNoYW5nZSIsImJpbmQiLCJ0ZXh0VmFsdWVDaGFuZ2UiLCJzZWxlY3RWYWx1ZUNoYW5nZSIsInRleHRMYW5nVmFsdWVDaGFuZ2UiLCJzZWxlY3RWYWx1ZUNoYW5nZUxhbmciLCJhZGRJbnB1dCIsImFkZElucHV0UmVuZGVyIiwiYWRkVGV4dFJlbmRlciIsInRleHRWYWx1ZUNoYW5nZVJlbW92ZSIsImVkaXRDbG9zZSIsIm9uUmVjIiwiY2FuY2VsIiwic2VsZWN0VmFsdWVMaXN0IiwidmFsdWUiLCJ0ZXh0IiwibGFuZ0xpc3QiLCJhZGRJbnB1dEFycmF5IiwiYWRkVGV4dEFycmF5IiwidGV4dEFycmF5Iiwic2VsZWN0QXJyYXkiLCJzdGF0ZSIsInBhZ2VUaXRsZSIsInRleHRWYWx1ZSIsInNlbGVjdFZhbHVlIiwidGV4dExhbmdWYWx1ZSIsInNlbGVjdExhbmdWYWx1ZSIsImlucHV0IiwiYWN0aXZlQ2xhc3MiLCJzdWJtaXRDbGFzcyIsImFkZEZsZyIsInNldFN0YXRlIiwidmFsdWVJZCIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJzZXREYXRlVmFsdWUiLCJwdXNoIiwibWFwIiwiX3ZhbHVlIiwiX2luZGV4IiwicmVtb3ZlSWQiLCJzcGxpY2UiLCJwb3AiLCJzYXZlVGFyZ2V0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNhdmVIdG1sIiwib3V0ZXJIVE1MIiwic2F2ZUh0bWxTZXQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwic2V0RGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiRWRpdEhlYWRlclJlbmRlciIsImhlYWRlclZhbHVlIiwic2VsZWN0TGFuZyIsImxhbmdUZXh0IiwiRWRpdElucHV0IiwidmFsdWVDaGFuZ2UiLCJzZXRWYWx1ZSIsImhlYWRlclZhbHVlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZ1bmMiLCJFZGl0TGFuZ1JlbmRlciIsImxhbmciLCJFZGl0U2VsZWN0SW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJyZW1vdmVJbnB1dCIsInRleHRJZCIsImlkTnVtYmVyIiwiTnVtYmVyIiwicmVwbGFjZSIsIml0ZW1zIiwiX2l0ZW0iLCJfbnVtYmVyIiwidmFsdWVSZW1vdmUiLCJzZXRPcHRpb24iLCJFZGl0U2VsZWN0TGFuZyIsInNlbGVjdExhbmdWYWx1ZUNoYW5nZSIsInNlbGVjdExhbmdMaXN0IiwiRWRpdFRleHRSZW5kZXIiLCJibG9jayIsInJlbmRlclRleHRCbG9jayIsInNvY2tldEZuIiwic29ja2V0IiwiaW8iLCJjb25uZWN0Iiwib24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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T05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImNvbW1vblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tbW9uL2NvbW1vbi5qc3hcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKlxuICogQGZpbGVzIGNvbW1vbi5qc3hcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnXG5cbmltcG9ydCBFZGl0IGZyb20gJy4uL2NvbXBvbmVudC9lZGl0L0VkaXQnO1xuLy8gaW1wb3J0IE1vdW50IGZyb20gJy4uL2NvbXBvbmVudC9Nb3VudCc7XG5cbmNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtZWRpdCcpO1xuLy8gY29uc29sZS5sb2coW2VkaXRdLmxlbmd0aCk7XG5cbmlmIChbZWRpdF1bMF0gIT09IG51bGwpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxFZGl0IC8+LCBlZGl0XG4gICk7XG59XG5cbi8vIGNvbnN0IG1tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWVkaXQtbScpO1xuXG4vLyBpZiAoW2VkaXRdWzBdICE9PSBudWxsKSB7XG4vLyAgIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgICA8TW91bnQgLz4sIG1tXG4vLyAgICk7XG4vLyB9XG5cblxuaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCk7XG5cblxuaW1wb3J0ICcuLi9tb2R1bGVzL1NvY2tldCc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEVkaXRIZWFkZXJSZW5kZXIgZnJvbSAnLi9jb21wb25lbnQvRWRpdEhlYWRlclJlbmRlcic7XG5pbXBvcnQgRWRpdFRleHRSZW5kZXIgZnJvbSAnLi9jb21wb25lbnQvRWRpdFRleHRSZW5kZXInO1xuXG5pbXBvcnQgRWRpdElucHV0IGZyb20gJy4vY29tcG9uZW50L0VkaXRJbnB1dCc7XG5pbXBvcnQgRWRpdFNlbGVjdElucHV0IGZyb20gJy4vY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dCc7XG5pbXBvcnQgRWRpdFNlbGVjdExhbmcgZnJvbSAnLi9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcnO1xuXG5jbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy50aXRsZVZhbHVlQ2hhbmdlID0gdGhpcy50aXRsZVZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0VmFsdWVDaGFuZ2UgPSB0aGlzLnRleHRWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0VmFsdWVDaGFuZ2UgPSB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlID0gdGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWxlY3RWYWx1ZUNoYW5nZUxhbmcgPSB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlTGFuZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkSW5wdXQgPSB0aGlzLmFkZElucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRJbnB1dFJlbmRlciA9IHRoaXMuYWRkSW5wdXRSZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZFRleHRSZW5kZXIgPSB0aGlzLmFkZFRleHRSZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHRWYWx1ZUNoYW5nZVJlbW92ZSA9IHRoaXMudGV4dFZhbHVlQ2hhbmdlUmVtb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lZGl0Q2xvc2UgPSB0aGlzLmVkaXRDbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZWMgPSB0aGlzLm9uUmVjLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYW5jZWwgPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zZWxlY3RWYWx1ZUxpc3QgPSBbXG4gICAgICB7IHZhbHVlOiAnaDMnLCB0ZXh0OiAn5Lit6KaL5Ye644GXJyB9LFxuICAgICAgeyB2YWx1ZTogJ2g0JywgdGV4dDogJ+Wwj+imi+WHuuOBlycgfSxcbiAgICAgIHsgdmFsdWU6ICdwJywgdGV4dDogJ+aWh+iogCcgfSxcbiAgICAgIHsgdmFsdWU6ICdjb2RlJywgdGV4dDogJ+OCs+ODvOODiScgfSxcbiAgICAgIHsgdmFsdWU6ICdjbWQnLCB0ZXh0OiAn44Kz44Oe44Oz44OJJyB9XG4gICAgXTtcblxuICAgIHRoaXMubGFuZ0xpc3QgPSBbJ2phdmFzY3JpcHQnLCAnY3NzJywgJ2h0bWwnLCAncnVieScsICdweXRob24nLCAnZ28nLCAncGhwJ107XG5cbiAgICB0aGlzLmFkZElucHV0QXJyYXkgPSBbMF07XG4gICAgdGhpcy5hZGRUZXh0QXJyYXkgPSBbMF07XG4gICAgdGhpcy50ZXh0QXJyYXkgPSBbXTsgLy8g44OG44Kt44K544OI44KS5qC857SN44GZ44KL6YWN5YiXXG4gICAgdGhpcy5zZWxlY3RBcnJheSA9IFt0aGlzLnNlbGVjdFZhbHVlTGlzdFswXS52YWx1ZV07IC8vIOOCu+ODrOOCr+ODiCjopovlh7rjgZfjgoTjgrPjg7zjg4njgarjgakp44KS5qC857SN44GZ44KL6YWN5YiXXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZVRpdGxlOiAnJyxcbiAgICAgIHRleHRWYWx1ZTogdGhpcy50ZXh0QXJyYXksXG4gICAgICBzZWxlY3RWYWx1ZTogdGhpcy5zZWxlY3RBcnJheSxcbiAgICAgIHRleHRMYW5nVmFsdWU6ICcnLFxuICAgICAgc2VsZWN0TGFuZ1ZhbHVlOiB0aGlzLmxhbmdMaXN0WzBdLFxuICAgICAgaW5wdXQ6IDAsXG4gICAgICBhY3RpdmVDbGFzczogJycsXG4gICAgICBzdWJtaXRDbGFzczogJydcbiAgICB9O1xuXG4gICAgdGhpcy5hZGRGbGcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aXRsZeOBruWkieabtFxuICAgKi9cbiAgdGl0bGVWYWx1ZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlVGl0bGU6IHZhbHVlfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIHRleHTjga7lpInmm7RcbiAgICovXG4gIHRleHRWYWx1ZUNoYW5nZSh2YWx1ZSwgdmFsdWVJZCkge1xuICAgIHRoaXMudGV4dEFycmF5W3ZhbHVlSWRdID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRWYWx1ZTogdGhpcy50ZXh0QXJyYXkgfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIOiogOiqnuOBruODhuOCreOCueODiOOBruWkieabtFxuICAgKi9cbiAgdGV4dExhbmdWYWx1ZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0TGFuZ1ZhbHVlOiB2YWx1ZX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZWxlY3Qo6KaL5Ye644GX44KE44Kz44O844OJ44Gq44GpKeOBruWkieabtFxuICAgKi9cbiAgc2VsZWN0VmFsdWVDaGFuZ2UodmFsdWUsIHZhbHVlSWQpIHtcbiAgICB0aGlzLnNlbGVjdEFycmF5W3ZhbHVlSWRdID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdFZhbHVlOiB0aGlzLnNlbGVjdEFycmF5fSApO1xuICB9XG5cbiAgLyoqXG4gICAqIOiogOiqnuOBrnNlbGVjdOOBruWkieabtFxuICAgKi9cbiAgc2VsZWN0VmFsdWVDaGFuZ2VMYW5nKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdExhbmdWYWx1ZTogdmFsdWV9ICk7XG4gIH1cblxuICAvKipcbiAgICog5pel5LuY6KGo56S6XG4gICAqL1xuICBzZXREYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHNldERhdGVWYWx1ZSA9IGAke3llYXJ9LiR7bW9udGh9LiR7ZGF5fWA7XG4gICAgcmV0dXJuIHNldERhdGVWYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhaXlipvjga7opIfoo71cbiAgICovXG4gIGFkZElucHV0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dDogdGhpcy5zdGF0ZS5pbnB1dCArIDEgfSk7XG4gICAgdGhpcy5hZGRGbGcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOODleOCqeODvOODoOOBruikh+ijvVxuICAgKi9cbiAgYWRkSW5wdXRSZW5kZXIoKSB7XG5cbiAgICBpZiAodGhpcy5hZGRGbGcpIHtcbiAgICAgIHRoaXMuYWRkSW5wdXRBcnJheS5wdXNoKHRoaXMuc3RhdGUuaW5wdXQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFkZElucHV0QXJyYXkubWFwKChfdmFsdWUsIF9pbmRleCkgPT4gKFxuICAgICAgdGhpcy5hZGRGbGcgPSBmYWxzZSxcbiAgICAgIDxFZGl0U2VsZWN0SW5wdXRcbiAgICAgICAga2V5PXtfaW5kZXh9XG4gICAgICAgIHRleHRJZD17YGlucHV0SWQtJHtfaW5kZXh9YH1cbiAgICAgICAgdGV4dFZhbHVlPXt0aGlzLnN0YXRlLnRleHRWYWx1ZVtfaW5kZXhdfVxuICAgICAgICB0ZXh0VmFsdWVDaGFuZ2U9e3RoaXMudGV4dFZhbHVlQ2hhbmdlfVxuICAgICAgICBzZWxlY3RWYWx1ZUxpc3Q9e3RoaXMuc2VsZWN0VmFsdWVMaXN0fVxuICAgICAgICBzZWxlY3RWYWx1ZT17dGhpcy5zZWxlY3RWYWx1ZUNoYW5nZX1cbiAgICAgICAgdmFsdWVSZW1vdmU9e3RoaXMudGV4dFZhbHVlQ2hhbmdlUmVtb3ZlfVxuICAgICAgLz5cbiAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlofoqIDjga7opIfoo71cbiAgICovXG4gIGFkZFRleHRSZW5kZXIoKSB7XG5cbiAgICBpZiAodGhpcy5hZGRGbGcpIHtcbiAgICAgIHRoaXMuYWRkVGV4dEFycmF5LnB1c2godGhpcy5zdGF0ZS5pbnB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWRkVGV4dEFycmF5Lm1hcCgoX3ZhbHVlLCBfaW5kZXgpID0+IChcbiAgICAgIDxFZGl0VGV4dFJlbmRlclxuICAgICAgICBrZXk9e19pbmRleH1cbiAgICAgICAgdGV4dElkPXtgaW5wdXRUZXh0SWQtJHtfaW5kZXh9YH1cbiAgICAgICAgdGV4dFZhbHVlPXt0aGlzLnN0YXRlLnRleHRWYWx1ZVtfaW5kZXhdfVxuICAgICAgICBzZWxlY3RWYWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZVtfaW5kZXhdfVxuICAgICAgICBzZWxlY3RWYWx1ZUxpc3Q9e3RoaXMuc2VsZWN0VmFsdWVMaXN0fVxuICAgICAgLz5cbiAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhaXlipvjga7liYrpmaRcbiAgICovXG4gIHRleHRWYWx1ZUNoYW5nZVJlbW92ZShyZW1vdmVJZCkge1xuXG4gICAgdGhpcy50ZXh0QXJyYXkuc3BsaWNlKHJlbW92ZUlkLCAxKTtcbiAgICB0aGlzLmFkZElucHV0QXJyYXkucG9wKCk7XG4gICAgdGhpcy5hZGRUZXh0QXJyYXkucG9wKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0OiB0aGlzLnN0YXRlLmlucHV0IC0gMSxcbiAgICAgIHRleHRWYWx1ZTogdGhpcy50ZXh0QXJyYXksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZWRpdOmgheebruOCkumdnuihqOekuuOBq1xuICAgKi9cbiAgZWRpdENsb3NlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUNsYXNzICE9PSAnaXMtaGlkZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVDbGFzczogJ2lzLWhpZGUnfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVDbGFzczogJyd9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6KiY6Yyy44Oc44K/44OzKGhpZGVu44GrdmFsdWXjgpJzZXQpXG4gICAqL1xuICBvblJlYygpIHtcbiAgICBjb25zdCBzYXZlVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmxvY2tzJyk7XG4gICAgY29uc3Qgc2F2ZUh0bWwgPSBzYXZlVGFyZ2V0WzBdLm91dGVySFRNTDtcbiAgICBjb25zdCBzYXZlSHRtbFNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zYXZlSHRtbCcpO1xuICAgIHNhdmVIdG1sU2V0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBzYXZlSHRtbCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXRDbGFzcyAhPT0gJ2lzLXNob3cnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0Q2xhc3M6ICdpcy1zaG93J30pO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXRDbGFzcyA9PT0gJ2lzLXNob3cnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0Q2xhc3M6ICcnfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dEFycmF5KTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXQtd3JhcHBlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzYXZlXCIgaWQ9XCJqcy1zYXZlSHRtbFwiLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2tzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2JveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2lubmVyXCI+XG4gICAgICAgICAgICAgIDxFZGl0SGVhZGVyUmVuZGVyXG4gICAgICAgICAgICAgICAgaGVhZGVyVmFsdWU9e3RoaXMuc3RhdGUucGFnZVRpdGxlfVxuICAgICAgICAgICAgICAgIHNlbGVjdExhbmc9e3RoaXMuc3RhdGUuc2VsZWN0TGFuZ1ZhbHVlfVxuICAgICAgICAgICAgICAgIGxhbmdUZXh0PXt0aGlzLnN0YXRlLnRleHRMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2Nrc19fdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICA8cD57dGhpcy5zZXREYXRlKCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5hZGRUZXh0UmVuZGVyKCkgfVxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZWRpdCAke3RoaXMuc3RhdGUuYWN0aXZlQ2xhc3N9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19pbm5lclwiPlxuICAgICAgICAgICAgPEVkaXRJbnB1dFxuICAgICAgICAgICAgICBoZWFkZXJWYWx1ZT17dGhpcy5zdGF0ZS5wYWdlVGl0bGV9XG4gICAgICAgICAgICAgIGhlYWRlclZhbHVlQ2hhbmdlPXt0aGlzLnRpdGxlVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEVkaXRTZWxlY3RMYW5nXG4gICAgICAgICAgICAgIHRleHRMYW5nVmFsdWU9e3RoaXMuc3RhdGUudGV4dExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgdGV4dExhbmdWYWx1ZUNoYW5nZT17dGhpcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlfVxuICAgICAgICAgICAgICBzZWxlY3RMYW5nTGlzdD17dGhpcy5sYW5nTGlzdH1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ1ZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdExhbmdWYWx1ZX1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ1ZhbHVlQ2hhbmdlPXt0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlTGFuZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IHRoaXMuYWRkSW5wdXRSZW5kZXIoKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X19idXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tY2xvc2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmVkaXRDbG9zZX0+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2J1dHRvbiBlZGl0X19idXR0b24tLXBsdXNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZElucHV0fT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tcmVjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlY30+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGVkaXRfX2J1dHRvbi13cmFwcGVyIGVkaXRfX2J1dHRvbi13cmFwcGVyLS1zdWJtaXQgJHt0aGlzLnN0YXRlLnN1Ym1pdENsYXNzfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0tc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgU1VCTUlUXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi0tbmdcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2FuY2VsfT5cbiAgICAgICAgICAgICAgICBDQU5DRUxcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0LnByb3BUeXBlcyA9IHtcbiAgcGFnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0VmFsdWU6IFByb3BUeXBlcy5hcnJheSxcbiAgc2VsZWN0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5hcnJheSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsIi8qKlxuICogQGZpbGUg44K/44Kk44OI44Or5o+P55S7XG4gKiBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEVkaXRMYW5nUmVuZGVyIGZyb20gJy4vRWRpdExhbmdSZW5kZXInO1xuXG5jbGFzcyBFZGl0SGVhZGVyUmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJibG9ja3NfX2hlYWRlclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmxvY2tzX190aXRsZVwiPnt0aGlzLnByb3BzLmhlYWRlclZhbHVlfTwvaDI+XG4gICAgICAgIDxFZGl0TGFuZ1JlbmRlciBcbiAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLnNlbGVjdExhbmd9XG4gICAgICAgICAgdGV4dD17dGhpcy5wcm9wcy5sYW5nVGV4dH1cbiAgICAgICAgLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0SGVhZGVyUmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgaGVhZGVyVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdExhbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmdUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRIZWFkZXJSZW5kZXI7XG4iLCIvKipcbiAqIEBmaWxlIOODhuOCreOCueODiOWFpeWKm+ODleOCqeODvOODoFxuICogXG4gKi9cblxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlID0gdGhpcy52YWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2Uoc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5oZWFkZXJWYWx1ZUNoYW5nZShzZXRWYWx1ZSk7XG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtYmxvY2tcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWlucHV0XCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuODmuODvOOCuOOCv+OCpOODiOODq+OCkuWFpeWKm1wiIHZhbHVlPXt0aGlzLnByb3BzLmhlYWRlclZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHRoaXMudmFsdWVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGhlYWRlclZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGVhZGVyVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdElucHV0O1xuIiwiLyoqXG4gKiBAZmlsZSDjgr/jgqTjg4jjg6vmj4/nlLtcbiAqIFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0TGFuZ1JlbmRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYWJlbHNfX2xpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbGFiZWxzX19tYWluIGxhYmVsc19fbWFpbi0tJHt0aGlzLnByb3BzLmxhbmd9YH0+e3RoaXMucHJvcHMubGFuZ308L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhYmVsc19fbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BsYWJlbHNfX3N1YiBsYWJlbHNfX3N1Yi0tJHt0aGlzLnByb3BzLmxhbmd9YH0+e3RoaXMucHJvcHMudGV4dH08L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdExhbmdSZW5kZXIucHJvcFR5cGVzID0ge1xuICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRMYW5nUmVuZGVyO1xuIiwiLyoqXG4gKiBAZmlsZSDjg4bjgq3jgrnjg4jlhaXlipvjg5Xjgqnjg7zjg6Ao6YG45oqe5Z6LKVxuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRTZWxlY3RJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlSW5wdXQgPSB0aGlzLnJlbW92ZUlucHV0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCu+ODrOOCr+ODiOODnOODg+OCr+OCuVxuICAgKi9cbiAgaGFuZGxlQ2hhbmdlKHNldFZhbHVlLCB0ZXh0SWQpIHtcbiAgICBjb25zdCBpZE51bWJlciA9IE51bWJlcih0ZXh0SWQucmVwbGFjZSgnaW5wdXRJZC0nLCAnJykpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFZhbHVlKHNldFZhbHVlLCBpZE51bWJlcilcbiAgfVxuXG4gIHNldE9wdGlvbigpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0Lm1hcCgoX2l0ZW0sIF9udW1iZXIpID0+IChcbiAgICAgIDxvcHRpb24ga2V5PXtfbnVtYmVyfSB2YWx1ZT17X2l0ZW0udmFsdWV9PntfaXRlbS50ZXh0fTwvb3B0aW9uPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGlucHV0XG4gICAqL1xuICB2YWx1ZUNoYW5nZShzZXRWYWx1ZSwgdGV4dElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBzZXRWYWx1ZX0pO1xuICAgIGNvbnN0IGlkTnVtYmVyID0gTnVtYmVyKHRleHRJZC5yZXBsYWNlKCdpbnB1dElkLScsICcnKSk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGV4dFZhbHVlQ2hhbmdlKHNldFZhbHVlLCBpZE51bWJlcik7XG4gIH1cblxuICByZW1vdmVJbnB1dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnfSk7XG4gICAgY29uc3QgaWROdW1iZXIgPSBOdW1iZXIodGhpcy5wcm9wcy50ZXh0SWQucmVwbGFjZSgnaW5wdXRJZC0nLCAnJykpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlUmVtb3ZlKGlkTnVtYmVyKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNldE9wdGlvbigpO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtYmxvY2tcIiBpZD17dGhpcy5wcm9wcy50ZXh0SWR9PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtdGl0bGVcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1zZWxlY3RcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSwgdGhpcy5wcm9wcy50ZXh0SWQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnNldE9wdGlvbigpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5paH6KiA44KS5YWl5YqbXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnZhbHVlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCB0aGlzLnByb3BzLnRleHRJZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uIGVkaXRfX2J1dHRvbi0tbWludXNcIiBvbkNsaWNrPXt0aGlzLnJlbW92ZUlucHV0fT48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0U2VsZWN0SW5wdXQucHJvcFR5cGVzID0ge1xuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdFZhbHVlTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICB0ZXh0VmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWVSZW1vdmU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRTZWxlY3RJbnB1dDtcbiIsIi8qKlxuICogQGZpbGUg6KiA6Kqe44OV44Kp44O844OgKOmBuOaKnuWeiylcbiAqIFxuICovXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRTZWxlY3RMYW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICog44K744Os44Kv44OI44Oc44OD44Kv44K5XG4gICAqL1xuICBoYW5kbGVDaGFuZ2Uoc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RMYW5nVmFsdWVDaGFuZ2Uoc2V0VmFsdWUpXG4gIH1cblxuICBzZXRPcHRpb24oKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnNlbGVjdExhbmdMaXN0Lm1hcCgoX2l0ZW0sIF9udW1iZXIpID0+IChcbiAgICAgIDxvcHRpb24ga2V5PXtfbnVtYmVyfSB2YWx1ZT17X2l0ZW19PntfaXRlbX08L29wdGlvbj5cbiAgICApKTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBpbnB1dFxuICAgKi9cbiAgdmFsdWVDaGFuZ2Uoc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50ZXh0TGFuZ1ZhbHVlQ2hhbmdlKHNldFZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNldE9wdGlvbigpO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtYmxvY2tcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXRpdGxlIGVkaXRfX2lucHV0LXRpdGxlLS1sYW5nXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtc2VsZWN0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlbGVjdExhbmdWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIHt0aGlzLnNldE9wdGlvbigpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtaW5wdXRcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIumWoumAo+ODr+ODvOODieOCkuWFpeWKm1wiIHZhbHVlPXt0aGlzLnByb3BzLnRleHRMYW5nVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy52YWx1ZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdFNlbGVjdExhbmcucHJvcFR5cGVzID0ge1xuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdExhbmdWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdExhbmdWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0TGFuZ0xpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgdGV4dExhbmdWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRMYW5nVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFNlbGVjdExhbmc7XG4iLCIvKipcbiAqIEBmaWxlIOOCv+OCpOODiOODq+aPj+eUu1xuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRUZXh0UmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvKipcbiAgICog5pys5paH44Ko44Oq44Ki44Gu44OR44O844OEXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlclRleHRCbG9jaygpIHtcbiAgICBsZXQgYmxvY2sgPSAnJztcblxuICAgIHN3aXRjaCh0aGlzLnByb3BzLnNlbGVjdFZhbHVlKSB7XG5cbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbMF0udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFsxXS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8aDMgY2xhc3NOYW1lPVwiYmxvY2tzX19kZXNjcmlwdGlvbi10aXRsZVwiPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L2gzPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzJdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxwPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L3A+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbM10udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPHByZSBjbGFzc05hbWU9XCJibG9ja3NfX2NvZGVcIj48Y29kZSBjbGFzc05hbWU9XCJydWJ5XCI+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvY29kZT48L3ByZT47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFs0XS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19fY29kZS1wcmV2aWV3XCI+PGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tzX19jb2RlLXByZXZpZXctdGV4dFwiPjxwPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L3A+PC9jb2RlPjwvZGl2PjtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX19wYXJhZ3JhcGhcIiBpZD17dGhpcy5wcm9wcy50ZXh0SWR9PlxuICAgICAgICB7IHRoaXMucmVuZGVyVGV4dEJsb2NrKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRUZXh0UmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgdGV4dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0VmFsdWVMaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIHRleHRJZDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0VGV4dFJlbmRlcjtcbiIsImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuY29uc3Qgc29ja2V0Rm4gPSAoKSA9PiB7XG5cbiAgY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG5cbiAgc29ja2V0Lm9uKCdyZWxvYWQnLCAoKSA9PiB7XG4gICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpO1xuICB9KTtcbn07XG5cbnNvY2tldEZuKCk7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9
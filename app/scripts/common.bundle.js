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
/* harmony import */ var _component_submit_Submit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/submit/Submit */ "./app/scripts/develop/component/submit/Submit.jsx");
/* harmony import */ var _modules_Socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/Socket */ "./app/scripts/develop/modules/Socket.js");
/**
 * @files common.jsx
 */







// import Mount from '../component/Mount';

var edit = document.getElementById('js-edit');

if ([edit][0] !== null) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_edit_Edit__WEBPACK_IMPORTED_MODULE_3__["default"], null), edit);
}

var submit = document.getElementById('js-submit');

if ([submit][0] !== null) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_submit_Submit__WEBPACK_IMPORTED_MODULE_4__["default"], null), submit);
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
          textId: 'inputId' + _index,
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
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'hidden', name: 'time', value: this.setDate() })
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
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { className: 'edit__input', type: 'text', name: 'title', placeholder: '\u30DA\u30FC\u30B8\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B', value: this.props.headerValue, onChange: function onChange(e) {
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
      var idNumber = Number(textId.replace('inputId', ''));
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
      var idNumber = Number(textId.replace('inputId', ''));
      return this.props.textValueChange(setValue, idNumber);
    }
  }, {
    key: 'removeInput',
    value: function removeInput() {
      this.setState({ value: '' });
      var idNumber = Number(this.props.textId.replace('inputId', ''));
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
              },
              name: 'select' + this.props.textId
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
            },
            name: this.props.textId
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
              name: 'lang',
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
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { className: 'edit__input', type: 'text', name: 'word', placeholder: '\u95A2\u9023\u30EF\u30FC\u30C9\u3092\u5165\u529B', value: this.props.textLangValue, onChange: function onChange(e) {
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

/***/ "./app/scripts/develop/component/submit/Submit.jsx":
/*!*********************************************************!*\
  !*** ./app/scripts/develop/component/submit/Submit.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Submit = function (_Component) {
  _inherits(Submit, _Component);

  function Submit(props) {
    _classCallCheck(this, Submit);

    var _this = _possibleConstructorReturn(this, (Submit.__proto__ || Object.getPrototypeOf(Submit)).call(this, props));

    _this.onRec = _this.onRec.bind(_this);
    _this.cancel = _this.cancel.bind(_this);

    _this.state = {
      submitClass: ''
    };

    _this.addFlg = false;
    return _this;
  }

  /**
   * 記録ボタン(hidenにvalueをset)
   */


  _createClass(Submit, [{
    key: 'onRec',
    value: function onRec() {

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'edit-wrapper' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: 'edit result' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'edit__button-wrapper' },
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
                'OK'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                {
                  href: '/edit',
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

  return Submit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Submit);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21tb24vY29tbW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9lZGl0L0VkaXQuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRIZWFkZXJSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdExhbmdSZW5kZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRTZWxlY3RJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21wb25lbnQvZWRpdC9jb21wb25lbnQvRWRpdFNlbGVjdExhbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2RldmVsb3AvY29tcG9uZW50L2VkaXQvY29tcG9uZW50L0VkaXRUZXh0UmVuZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL2NvbXBvbmVudC9zdWJtaXQvU3VibWl0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9kZXZlbG9wL21vZHVsZXMvU29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsiZWRpdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInN1Ym1pdCIsImhsanMiLCJpbml0SGlnaGxpZ2h0aW5nT25Mb2FkIiwiRWRpdCIsInByb3BzIiwidGl0bGVWYWx1ZUNoYW5nZSIsImJpbmQiLCJ0ZXh0VmFsdWVDaGFuZ2UiLCJzZWxlY3RWYWx1ZUNoYW5nZSIsInRleHRMYW5nVmFsdWVDaGFuZ2UiLCJzZWxlY3RWYWx1ZUNoYW5nZUxhbmciLCJhZGRJbnB1dCIsImFkZElucHV0UmVuZGVyIiwiYWRkVGV4dFJlbmRlciIsInRleHRWYWx1ZUNoYW5nZVJlbW92ZSIsImVkaXRDbG9zZSIsIm9uUmVjIiwiY2FuY2VsIiwic2VsZWN0VmFsdWVMaXN0IiwidmFsdWUiLCJ0ZXh0IiwibGFuZ0xpc3QiLCJhZGRJbnB1dEFycmF5IiwiYWRkVGV4dEFycmF5IiwidGV4dEFycmF5Iiwic2VsZWN0QXJyYXkiLCJzdGF0ZSIsInBhZ2VUaXRsZSIsInRleHRWYWx1ZSIsInNlbGVjdFZhbHVlIiwidGV4dExhbmdWYWx1ZSIsInNlbGVjdExhbmdWYWx1ZSIsImlucHV0IiwiYWN0aXZlQ2xhc3MiLCJzdWJtaXRDbGFzcyIsImFkZEZsZyIsInNldFN0YXRlIiwidmFsdWVJZCIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJzZXREYXRlVmFsdWUiLCJwdXNoIiwibWFwIiwiX3ZhbHVlIiwiX2luZGV4IiwicmVtb3ZlSWQiLCJzcGxpY2UiLCJwb3AiLCJzYXZlVGFyZ2V0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNhdmVIdG1sIiwib3V0ZXJIVE1MIiwic2F2ZUh0bWxTZXQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwic2V0RGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiRWRpdEhlYWRlclJlbmRlciIsImhlYWRlclZhbHVlIiwic2VsZWN0TGFuZyIsImxhbmdUZXh0IiwiRWRpdElucHV0IiwidmFsdWVDaGFuZ2UiLCJzZXRWYWx1ZSIsImhlYWRlclZhbHVlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZ1bmMiLCJFZGl0TGFuZ1JlbmRlciIsImxhbmciLCJFZGl0U2VsZWN0SW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJyZW1vdmVJbnB1dCIsInRleHRJZCIsImlkTnVtYmVyIiwiTnVtYmVyIiwicmVwbGFjZSIsIml0ZW1zIiwiX2l0ZW0iLCJfbnVtYmVyIiwidmFsdWVSZW1vdmUiLCJzZXRPcHRpb24iLCJFZGl0U2VsZWN0TGFuZyIsInNlbGVjdExhbmdWYWx1ZUNoYW5nZSIsInNlbGVjdExhbmdMaXN0IiwiRWRpdFRleHRSZW5kZXIiLCJibG9jayIsInJlbmRlclRleHRCbG9jayIsIlN1Ym1pdCIsInNvY2tldEZuIiwic29ja2V0IiwiaW8iLCJjb25uZWN0Iiwib24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMs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V0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHdCQUFLLFFBRFA7QUFFRSw2QkFBVSx1QkFGWjtBQUFBO0FBQUEsZUFERjtBQU1FO0FBQUE7QUFBQTtBQUNFLHdCQUFLLE9BRFA7QUFFRSw2QkFBVSxtQkFGWjtBQUdFLDJCQUFTLEtBQUtqQixNQUhoQjtBQUFBO0FBQUE7QUFORjtBQURGO0FBUkY7QUFERixPQURGO0FBNkJEOzs7O0VBOURrQiwrQzs7QUFvRXJCLCtEQUFlaUYsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7O0FBRUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLEdBQU07O0FBRXJCLE1BQU1DLFNBQVMsdURBQUFDLENBQUdDLE9BQUgsQ0FBVyx1QkFBWCxDQUFmOztBQUVBRixTQUFPRyxFQUFQLENBQVUsUUFBVixFQUFvQixZQUFNO0FBQ3hCO0FBQ0EzQyxZQUFRQyxHQUFSLENBQVksUUFBWjtBQUNELEdBSEQ7QUFJRCxDQVJEOztBQVVBc0MsVzs7Ozs7Ozs7Ozs7QUNaQSxlIiwiZmlsZSI6ImNvbW1vbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29tbW9uXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXBwL3NjcmlwdHMvZGV2ZWxvcC9jb21tb24vY29tbW9uLmpzeFwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqXG4gKiBAZmlsZXMgY29tbW9uLmpzeFxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcydcblxuaW1wb3J0IEVkaXQgZnJvbSAnLi4vY29tcG9uZW50L2VkaXQvRWRpdCc7XG5pbXBvcnQgU3VibWl0IGZyb20gJy4uL2NvbXBvbmVudC9zdWJtaXQvU3VibWl0Jztcbi8vIGltcG9ydCBNb3VudCBmcm9tICcuLi9jb21wb25lbnQvTW91bnQnO1xuXG5jb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWVkaXQnKTtcblxuaWYgKFtlZGl0XVswXSAhPT0gbnVsbCkge1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEVkaXQgLz4sIGVkaXRcbiAgKTtcbn1cblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXN1Ym1pdCcpO1xuXG5pZiAoW3N1Ym1pdF1bMF0gIT09IG51bGwpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxTdWJtaXQgLz4sIHN1Ym1pdFxuICApO1xufVxuXG4vLyBjb25zdCBtbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1lZGl0LW0nKTtcblxuLy8gaWYgKFtlZGl0XVswXSAhPT0gbnVsbCkge1xuLy8gICBSZWFjdERPTS5yZW5kZXIoXG4vLyAgICAgPE1vdW50IC8+LCBtbVxuLy8gICApO1xuLy8gfVxuXG5cbmhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xuXG5cbmltcG9ydCAnLi4vbW9kdWxlcy9Tb2NrZXQnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBFZGl0SGVhZGVyUmVuZGVyIGZyb20gJy4vY29tcG9uZW50L0VkaXRIZWFkZXJSZW5kZXInO1xuaW1wb3J0IEVkaXRUZXh0UmVuZGVyIGZyb20gJy4vY29tcG9uZW50L0VkaXRUZXh0UmVuZGVyJztcblxuaW1wb3J0IEVkaXRJbnB1dCBmcm9tICcuL2NvbXBvbmVudC9FZGl0SW5wdXQnO1xuaW1wb3J0IEVkaXRTZWxlY3RJbnB1dCBmcm9tICcuL2NvbXBvbmVudC9FZGl0U2VsZWN0SW5wdXQnO1xuaW1wb3J0IEVkaXRTZWxlY3RMYW5nIGZyb20gJy4vY29tcG9uZW50L0VkaXRTZWxlY3RMYW5nJztcblxuY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudGl0bGVWYWx1ZUNoYW5nZSA9IHRoaXMudGl0bGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dFZhbHVlQ2hhbmdlID0gdGhpcy50ZXh0VmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdFZhbHVlQ2hhbmdlID0gdGhpcy5zZWxlY3RWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dExhbmdWYWx1ZUNoYW5nZSA9IHRoaXMudGV4dExhbmdWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0VmFsdWVDaGFuZ2VMYW5nID0gdGhpcy5zZWxlY3RWYWx1ZUNoYW5nZUxhbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZElucHV0ID0gdGhpcy5hZGRJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkSW5wdXRSZW5kZXIgPSB0aGlzLmFkZElucHV0UmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRUZXh0UmVuZGVyID0gdGhpcy5hZGRUZXh0UmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0VmFsdWVDaGFuZ2VSZW1vdmUgPSB0aGlzLnRleHRWYWx1ZUNoYW5nZVJlbW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWRpdENsb3NlID0gdGhpcy5lZGl0Q2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVjID0gdGhpcy5vblJlYy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FuY2VsID0gdGhpcy5jYW5jZWwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc2VsZWN0VmFsdWVMaXN0ID0gW1xuICAgICAgeyB2YWx1ZTogJ2gzJywgdGV4dDogJ+S4reimi+WHuuOBlycgfSxcbiAgICAgIHsgdmFsdWU6ICdoNCcsIHRleHQ6ICflsI/opovlh7rjgZcnIH0sXG4gICAgICB7IHZhbHVlOiAncCcsIHRleHQ6ICfmlofoqIAnIH0sXG4gICAgICB7IHZhbHVlOiAnY29kZScsIHRleHQ6ICfjgrPjg7zjg4knIH0sXG4gICAgICB7IHZhbHVlOiAnY21kJywgdGV4dDogJ+OCs+ODnuODs+ODiScgfVxuICAgIF07XG5cbiAgICB0aGlzLmxhbmdMaXN0ID0gWydqYXZhc2NyaXB0JywgJ2NzcycsICdodG1sJywgJ3J1YnknLCAncHl0aG9uJywgJ2dvJywgJ3BocCddO1xuXG4gICAgdGhpcy5hZGRJbnB1dEFycmF5ID0gWzBdO1xuICAgIHRoaXMuYWRkVGV4dEFycmF5ID0gWzBdO1xuICAgIHRoaXMudGV4dEFycmF5ID0gW107IC8vIOODhuOCreOCueODiOOCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHRoaXMuc2VsZWN0QXJyYXkgPSBbdGhpcy5zZWxlY3RWYWx1ZUxpc3RbMF0udmFsdWVdOyAvLyDjgrvjg6zjgq/jg4go6KaL5Ye644GX44KE44Kz44O844OJ44Gq44GpKeOCkuagvOe0jeOBmeOCi+mFjeWIl1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2VUaXRsZTogJycsXG4gICAgICB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5LFxuICAgICAgc2VsZWN0VmFsdWU6IHRoaXMuc2VsZWN0QXJyYXksXG4gICAgICB0ZXh0TGFuZ1ZhbHVlOiAnJyxcbiAgICAgIHNlbGVjdExhbmdWYWx1ZTogdGhpcy5sYW5nTGlzdFswXSxcbiAgICAgIGlucHV0OiAwLFxuICAgICAgYWN0aXZlQ2xhc3M6ICcnLFxuICAgICAgc3VibWl0Q2xhc3M6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuYWRkRmxnID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogdGl0bGXjga7lpInmm7RcbiAgICovXG4gIHRpdGxlVmFsdWVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFnZVRpdGxlOiB2YWx1ZX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0ZXh044Gu5aSJ5pu0XG4gICAqL1xuICB0ZXh0VmFsdWVDaGFuZ2UodmFsdWUsIHZhbHVlSWQpIHtcbiAgICB0aGlzLnRleHRBcnJheVt2YWx1ZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0VmFsdWU6IHRoaXMudGV4dEFycmF5IH0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDoqIDoqp7jga7jg4bjgq3jgrnjg4jjga7lpInmm7RcbiAgICovXG4gIHRleHRMYW5nVmFsdWVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dExhbmdWYWx1ZTogdmFsdWV9ICk7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0KOimi+WHuuOBl+OChOOCs+ODvOODieOBquOBqSnjga7lpInmm7RcbiAgICovXG4gIHNlbGVjdFZhbHVlQ2hhbmdlKHZhbHVlLCB2YWx1ZUlkKSB7XG4gICAgdGhpcy5zZWxlY3RBcnJheVt2YWx1ZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RWYWx1ZTogdGhpcy5zZWxlY3RBcnJheX0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDoqIDoqp7jga5zZWxlY3Tjga7lpInmm7RcbiAgICovXG4gIHNlbGVjdFZhbHVlQ2hhbmdlTGFuZyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RMYW5nVmFsdWU6IHZhbHVlfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIOaXpeS7mOihqOekulxuICAgKi9cbiAgc2V0RGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBzZXREYXRlVmFsdWUgPSBgJHt5ZWFyfS4ke21vbnRofS4ke2RheX1gO1xuICAgIHJldHVybiBzZXREYXRlVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog5YWl5Yqb44Gu6KSH6KO9XG4gICAqL1xuICBhZGRJbnB1dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXQ6IHRoaXMuc3RhdGUuaW5wdXQgKyAxIH0pO1xuICAgIHRoaXMuYWRkRmxnID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Xjgqnjg7zjg6Djga7opIfoo71cbiAgICovXG4gIGFkZElucHV0UmVuZGVyKCkge1xuXG4gICAgaWYgKHRoaXMuYWRkRmxnKSB7XG4gICAgICB0aGlzLmFkZElucHV0QXJyYXkucHVzaCh0aGlzLnN0YXRlLmlucHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hZGRJbnB1dEFycmF5Lm1hcCgoX3ZhbHVlLCBfaW5kZXgpID0+IChcbiAgICAgIHRoaXMuYWRkRmxnID0gZmFsc2UsXG4gICAgICA8RWRpdFNlbGVjdElucHV0XG4gICAgICAgIGtleT17X2luZGV4fVxuICAgICAgICB0ZXh0SWQ9e2BpbnB1dElkJHtfaW5kZXh9YH1cbiAgICAgICAgdGV4dFZhbHVlPXt0aGlzLnN0YXRlLnRleHRWYWx1ZVtfaW5kZXhdfVxuICAgICAgICB0ZXh0VmFsdWVDaGFuZ2U9e3RoaXMudGV4dFZhbHVlQ2hhbmdlfVxuICAgICAgICBzZWxlY3RWYWx1ZUxpc3Q9e3RoaXMuc2VsZWN0VmFsdWVMaXN0fVxuICAgICAgICBzZWxlY3RWYWx1ZT17dGhpcy5zZWxlY3RWYWx1ZUNoYW5nZX1cbiAgICAgICAgdmFsdWVSZW1vdmU9e3RoaXMudGV4dFZhbHVlQ2hhbmdlUmVtb3ZlfVxuICAgICAgLz5cbiAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlofoqIDjga7opIfoo71cbiAgICovXG4gIGFkZFRleHRSZW5kZXIoKSB7XG5cbiAgICBpZiAodGhpcy5hZGRGbGcpIHtcbiAgICAgIHRoaXMuYWRkVGV4dEFycmF5LnB1c2godGhpcy5zdGF0ZS5pbnB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWRkVGV4dEFycmF5Lm1hcCgoX3ZhbHVlLCBfaW5kZXgpID0+IChcbiAgICAgIDxFZGl0VGV4dFJlbmRlclxuICAgICAgICBrZXk9e19pbmRleH1cbiAgICAgICAgdGV4dElkPXtgaW5wdXRUZXh0SWQtJHtfaW5kZXh9YH1cbiAgICAgICAgdGV4dFZhbHVlPXt0aGlzLnN0YXRlLnRleHRWYWx1ZVtfaW5kZXhdfVxuICAgICAgICBzZWxlY3RWYWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZVtfaW5kZXhdfVxuICAgICAgICBzZWxlY3RWYWx1ZUxpc3Q9e3RoaXMuc2VsZWN0VmFsdWVMaXN0fVxuICAgICAgLz5cbiAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhaXlipvjga7liYrpmaRcbiAgICovXG4gIHRleHRWYWx1ZUNoYW5nZVJlbW92ZShyZW1vdmVJZCkge1xuXG4gICAgdGhpcy50ZXh0QXJyYXkuc3BsaWNlKHJlbW92ZUlkLCAxKTtcbiAgICB0aGlzLmFkZElucHV0QXJyYXkucG9wKCk7XG4gICAgdGhpcy5hZGRUZXh0QXJyYXkucG9wKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0OiB0aGlzLnN0YXRlLmlucHV0IC0gMSxcbiAgICAgIHRleHRWYWx1ZTogdGhpcy50ZXh0QXJyYXksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZWRpdOmgheebruOCkumdnuihqOekuuOBq1xuICAgKi9cbiAgZWRpdENsb3NlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUNsYXNzICE9PSAnaXMtaGlkZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVDbGFzczogJ2lzLWhpZGUnfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVDbGFzczogJyd9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6KiY6Yyy44Oc44K/44OzKGhpZGVu44GrdmFsdWXjgpJzZXQpXG4gICAqL1xuICBvblJlYygpIHtcbiAgICBjb25zdCBzYXZlVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmxvY2tzJyk7XG4gICAgY29uc3Qgc2F2ZUh0bWwgPSBzYXZlVGFyZ2V0WzBdLm91dGVySFRNTDtcbiAgICBjb25zdCBzYXZlSHRtbFNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zYXZlSHRtbCcpO1xuICAgIHNhdmVIdG1sU2V0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBzYXZlSHRtbCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXRDbGFzcyAhPT0gJ2lzLXNob3cnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0Q2xhc3M6ICdpcy1zaG93J30pO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXRDbGFzcyA9PT0gJ2lzLXNob3cnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0Q2xhc3M6ICcnfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dEFycmF5KTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXQtd3JhcHBlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzYXZlXCIgaWQ9XCJqcy1zYXZlSHRtbFwiLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2tzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2JveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3NfX2lubmVyXCI+XG4gICAgICAgICAgICAgIDxFZGl0SGVhZGVyUmVuZGVyXG4gICAgICAgICAgICAgICAgaGVhZGVyVmFsdWU9e3RoaXMuc3RhdGUucGFnZVRpdGxlfVxuICAgICAgICAgICAgICAgIHNlbGVjdExhbmc9e3RoaXMuc3RhdGUuc2VsZWN0TGFuZ1ZhbHVlfVxuICAgICAgICAgICAgICAgIGxhbmdUZXh0PXt0aGlzLnN0YXRlLnRleHRMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2Nrc19fdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICA8cD57dGhpcy5zZXREYXRlKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidGltZVwiIHZhbHVlPXt0aGlzLnNldERhdGUoKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7IHRoaXMuYWRkVGV4dFJlbmRlcigpIH1cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGVkaXQgJHt0aGlzLnN0YXRlLmFjdGl2ZUNsYXNzfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9faW5uZXJcIj5cbiAgICAgICAgICAgIDxFZGl0SW5wdXRcbiAgICAgICAgICAgICAgaGVhZGVyVmFsdWU9e3RoaXMuc3RhdGUucGFnZVRpdGxlfVxuICAgICAgICAgICAgICBoZWFkZXJWYWx1ZUNoYW5nZT17dGhpcy50aXRsZVZhbHVlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFZGl0U2VsZWN0TGFuZ1xuICAgICAgICAgICAgICB0ZXh0TGFuZ1ZhbHVlPXt0aGlzLnN0YXRlLnRleHRMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIHRleHRMYW5nVmFsdWVDaGFuZ2U9e3RoaXMudGV4dExhbmdWYWx1ZUNoYW5nZX1cbiAgICAgICAgICAgICAgc2VsZWN0TGFuZ0xpc3Q9e3RoaXMubGFuZ0xpc3R9XG4gICAgICAgICAgICAgIHNlbGVjdExhbmdWYWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RMYW5nVmFsdWV9XG4gICAgICAgICAgICAgIHNlbGVjdExhbmdWYWx1ZUNoYW5nZT17dGhpcy5zZWxlY3RWYWx1ZUNoYW5nZUxhbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyB0aGlzLmFkZElucHV0UmVuZGVyKCkgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdF9fYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2J1dHRvbiBlZGl0X19idXR0b24tLWNsb3NlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5lZGl0Q2xvc2V9PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19idXR0b24gZWRpdF9fYnV0dG9uLS1wbHVzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRJbnB1dH0+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2J1dHRvbiBlZGl0X19idXR0b24tLXJlY1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZWN9PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BlZGl0X19idXR0b24td3JhcHBlciBlZGl0X19idXR0b24td3JhcHBlci0tc3VibWl0ICR7dGhpcy5zdGF0ZS5zdWJtaXRDbGFzc31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tLXN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIFNVQk1JVFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tLW5nXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNhbmNlbH0+XG4gICAgICAgICAgICAgICAgQ0FOQ0VMXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdC5wcm9wVHlwZXMgPSB7XG4gIHBhZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dFZhbHVlOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNlbGVjdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuYXJyYXksXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCIvKipcbiAqIEBmaWxlIOOCv+OCpOODiOODq+aPj+eUu1xuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBFZGl0TGFuZ1JlbmRlciBmcm9tICcuL0VkaXRMYW5nUmVuZGVyJztcblxuY2xhc3MgRWRpdEhlYWRlclJlbmRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmxvY2tzX19oZWFkZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy5oZWFkZXJWYWx1ZX08L2gyPlxuICAgICAgICA8RWRpdExhbmdSZW5kZXIgXG4gICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5zZWxlY3RMYW5nfVxuICAgICAgICAgIHRleHQ9e3RoaXMucHJvcHMubGFuZ1RleHR9XG4gICAgICAgIC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdEhlYWRlclJlbmRlci5wcm9wVHlwZXMgPSB7XG4gIGhlYWRlclZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RMYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5nVGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0SGVhZGVyUmVuZGVyO1xuIiwiLyoqXG4gKiBAZmlsZSDjg4bjgq3jgrnjg4jlhaXlipvjg5Xjgqnjg7zjg6BcbiAqIFxuICovXG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZSA9IHRoaXMudmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlKHNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaGVhZGVyVmFsdWVDaGFuZ2Uoc2V0VmFsdWUpO1xuICB9XG4gIFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWJsb2NrXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1pbnB1dFwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCLjg5rjg7zjgrjjgr/jgqTjg4jjg6vjgpLlhaXliptcIiB2YWx1ZT17dGhpcy5wcm9wcy5oZWFkZXJWYWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnZhbHVlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5FZGl0SW5wdXQucHJvcFR5cGVzID0ge1xuICBoZWFkZXJWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGhlYWRlclZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRJbnB1dDtcbiIsIi8qKlxuICogQGZpbGUg44K/44Kk44OI44Or5o+P55S7XG4gKiBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdExhbmdSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFiZWxzX19saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGxhYmVsc19fbWFpbiBsYWJlbHNfX21haW4tLSR7dGhpcy5wcm9wcy5sYW5nfWB9Pnt0aGlzLnByb3BzLmxhbmd9PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYWJlbHNfX2xpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbGFiZWxzX19zdWIgbGFiZWxzX19zdWItLSR7dGhpcy5wcm9wcy5sYW5nfWB9Pnt0aGlzLnByb3BzLnRleHR9PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRMYW5nUmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0TGFuZ1JlbmRlcjtcbiIsIi8qKlxuICogQGZpbGUg44OG44Kt44K544OI5YWl5Yqb44OV44Kp44O844OgKOmBuOaKnuWeiylcbiAqIFxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0U2VsZWN0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUlucHV0ID0gdGhpcy5yZW1vdmVJbnB1dC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrvjg6zjgq/jg4jjg5zjg4Pjgq/jgrlcbiAgICovXG4gIGhhbmRsZUNoYW5nZShzZXRWYWx1ZSwgdGV4dElkKSB7XG4gICAgY29uc3QgaWROdW1iZXIgPSBOdW1iZXIodGV4dElkLnJlcGxhY2UoJ2lucHV0SWQnLCAnJykpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFZhbHVlKHNldFZhbHVlLCBpZE51bWJlcilcbiAgfVxuXG4gIHNldE9wdGlvbigpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0Lm1hcCgoX2l0ZW0sIF9udW1iZXIpID0+IChcbiAgICAgIDxvcHRpb24ga2V5PXtfbnVtYmVyfSB2YWx1ZT17X2l0ZW0udmFsdWV9PntfaXRlbS50ZXh0fTwvb3B0aW9uPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGlucHV0XG4gICAqL1xuICB2YWx1ZUNoYW5nZShzZXRWYWx1ZSwgdGV4dElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBzZXRWYWx1ZX0pO1xuICAgIGNvbnN0IGlkTnVtYmVyID0gTnVtYmVyKHRleHRJZC5yZXBsYWNlKCdpbnB1dElkJywgJycpKTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50ZXh0VmFsdWVDaGFuZ2Uoc2V0VmFsdWUsIGlkTnVtYmVyKTtcbiAgfVxuXG4gIHJlbW92ZUlucHV0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJyd9KTtcbiAgICBjb25zdCBpZE51bWJlciA9IE51bWJlcih0aGlzLnByb3BzLnRleHRJZC5yZXBsYWNlKCdpbnB1dElkJywgJycpKTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZVJlbW92ZShpZE51bWJlcik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRPcHRpb24oKTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWJsb2NrXCIgaWQ9e3RoaXMucHJvcHMudGV4dElkfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXRpdGxlXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXQtc2VsZWN0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUsIHRoaXMucHJvcHMudGV4dElkKX1cbiAgICAgICAgICAgIG5hbWU9e2BzZWxlY3Qke3RoaXMucHJvcHMudGV4dElkfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuc2V0T3B0aW9uKCl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC1pbnB1dFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdF9faW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmlofoqIDjgpLlhaXliptcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudmFsdWVDaGFuZ2UoZS50YXJnZXQudmFsdWUsIHRoaXMucHJvcHMudGV4dElkKX1cbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMudGV4dElkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImVkaXRfX2J1dHRvbiBlZGl0X19idXR0b24tLW1pbnVzXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbnB1dH0+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdFNlbGVjdElucHV0LnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RWYWx1ZUxpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgdGV4dFZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGV4dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlUmVtb3ZlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0U2VsZWN0SW5wdXQ7XG4iLCIvKipcbiAqIEBmaWxlIOiogOiqnuODleOCqeODvOODoCjpgbjmip7lnospXG4gKiBcbiAqL1xuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFZGl0U2VsZWN0TGFuZyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCu+ODrOOCr+ODiOODnOODg+OCr+OCuVxuICAgKi9cbiAgaGFuZGxlQ2hhbmdlKHNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0TGFuZ1ZhbHVlQ2hhbmdlKHNldFZhbHVlKVxuICB9XG5cbiAgc2V0T3B0aW9uKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5zZWxlY3RMYW5nTGlzdC5tYXAoKF9pdGVtLCBfbnVtYmVyKSA9PiAoXG4gICAgICA8b3B0aW9uIGtleT17X251bWJlcn0gdmFsdWU9e19pdGVtfT57X2l0ZW19PC9vcHRpb24+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogaW5wdXRcbiAgICovXG4gIHZhbHVlQ2hhbmdlKHNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGV4dExhbmdWYWx1ZUNoYW5nZShzZXRWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRPcHRpb24oKTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWJsb2NrXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dC10aXRsZSBlZGl0X19pbnB1dC10aXRsZS0tbGFuZ1wiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LXNlbGVjdFwiXG4gICAgICAgICAgICBuYW1lPVwibGFuZ1wiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zZWxlY3RMYW5nVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICB7dGhpcy5zZXRPcHRpb24oKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImVkaXRfX2lucHV0LWlucHV0XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJlZGl0X19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIndvcmRcIiBwbGFjZWhvbGRlcj1cIumWoumAo+ODr+ODvOODieOCkuWFpeWKm1wiIHZhbHVlPXt0aGlzLnByb3BzLnRleHRMYW5nVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy52YWx1ZUNoYW5nZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRWRpdFNlbGVjdExhbmcucHJvcFR5cGVzID0ge1xuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdExhbmdWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdExhbmdWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0TGFuZ0xpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgdGV4dExhbmdWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRMYW5nVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFNlbGVjdExhbmc7XG4iLCIvKipcbiAqIEBmaWxlIOOCv+OCpOODiOODq+aPj+eUu1xuICogXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEVkaXRUZXh0UmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvKipcbiAgICog5pys5paH44Ko44Oq44Ki44Gu44OR44O844OEXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlclRleHRCbG9jaygpIHtcbiAgICBsZXQgYmxvY2sgPSAnJztcblxuICAgIHN3aXRjaCh0aGlzLnByb3BzLnNlbGVjdFZhbHVlKSB7XG5cbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbMF0udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFsxXS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8aDMgY2xhc3NOYW1lPVwiYmxvY2tzX19kZXNjcmlwdGlvbi10aXRsZVwiPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L2gzPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMucHJvcHMuc2VsZWN0VmFsdWVMaXN0WzJdLnZhbHVlOlxuICAgICAgICBibG9jayA9IDxwPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L3A+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5wcm9wcy5zZWxlY3RWYWx1ZUxpc3RbM10udmFsdWU6XG4gICAgICAgIGJsb2NrID0gPHByZSBjbGFzc05hbWU9XCJibG9ja3NfX2NvZGVcIj48Y29kZSBjbGFzc05hbWU9XCJydWJ5XCI+e3RoaXMucHJvcHMudGV4dFZhbHVlfTwvY29kZT48L3ByZT47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLnByb3BzLnNlbGVjdFZhbHVlTGlzdFs0XS52YWx1ZTpcbiAgICAgICAgYmxvY2sgPSA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc19fY29kZS1wcmV2aWV3XCI+PGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tzX19jb2RlLXByZXZpZXctdGV4dFwiPjxwPnt0aGlzLnByb3BzLnRleHRWYWx1ZX08L3A+PC9jb2RlPjwvZGl2PjtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJsb2NrID0gPGgzIGNsYXNzTmFtZT1cImJsb2Nrc19fdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0VmFsdWV9PC9oMz47XG4gICAgICAgIGJyZWFrO1xuICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tzX19wYXJhZ3JhcGhcIiBpZD17dGhpcy5wcm9wcy50ZXh0SWR9PlxuICAgICAgICB7IHRoaXMucmVuZGVyVGV4dEJsb2NrKCkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkVkaXRUZXh0UmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgdGV4dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0VmFsdWVMaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIHRleHRJZDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0VGV4dFJlbmRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFN1Ym1pdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMub25SZWMgPSB0aGlzLm9uUmVjLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYW5jZWwgPSB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Ym1pdENsYXNzOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLmFkZEZsZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOiomOmMsuODnOOCv+ODsyhoaWRlbuOBq3ZhbHVl44KSc2V0KVxuICAgKi9cbiAgb25SZWMoKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXRDbGFzcyAhPT0gJ2lzLXNob3cnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0Q2xhc3M6ICdpcy1zaG93J30pO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXRDbGFzcyA9PT0gJ2lzLXNob3cnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0Q2xhc3M6ICcnfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdCByZXN1bHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfX2J1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0X19idXR0b24gZWRpdF9fYnV0dG9uLS1yZWNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVjfT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZWRpdF9fYnV0dG9uLXdyYXBwZXIgZWRpdF9fYnV0dG9uLXdyYXBwZXItLXN1Ym1pdCAke3RoaXMuc3RhdGUuc3VibWl0Q2xhc3N9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLS1zdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiL2VkaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tLW5nXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNhbmNlbH0+XG4gICAgICAgICAgICAgICAgQ0FOQ0VMXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBTdWJtaXQ7XG4iLCJpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmNvbnN0IHNvY2tldEZuID0gKCkgPT4ge1xuXG4gIGNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuXG4gIHNvY2tldC5vbigncmVsb2FkJywgKCkgPT4ge1xuICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKTtcbiAgfSk7XG59O1xuXG5zb2NrZXRGbigpO1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==
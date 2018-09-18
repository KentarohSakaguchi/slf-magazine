import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditHeaderRender from './component/EditHeaderRender';
import EditTextRender from './component/EditTextRender';

import EditInput from './component/EditInput';
import EditSelectInput from './component/EditSelectInput';
import EditSelectLang from './component/EditSelectLang';

/**
 * Editページの処理
 */
class Edit extends Component {

  constructor(props) {

    super(props);

    this.titleValueChange = this.titleValueChange.bind(this);
    this.textValueChange = this.textValueChange.bind(this);
    this.selectValueChange = this.selectValueChange.bind(this);
    this.textLangValueChange = this.textLangValueChange.bind(this);
    this.selectValueChangeLang = this.selectValueChangeLang.bind(this);
    this.addInput = this.addInput.bind(this);
    this.addInputRender = this.addInputRender.bind(this);
    this.addTextRender = this.addTextRender.bind(this);
    this.textValueChangeRemove = this.textValueChangeRemove.bind(this);
    this.editClose = this.editClose.bind(this);
    this.onRec = this.onRec.bind(this);
    this.cancel = this.cancel.bind(this);

    this.selectValueList = [
      { value: 'h3', text: '中見出し' },
      { value: 'h4', text: '小見出し' },
      { value: 'p', text: '文言' },
      { value: 'code', text: 'コード' },
      { value: 'cmd', text: 'コマンド' },
      { value: 'img', text: '画像' }
    ];

    this.langList = ['javascript', 'css', 'html', 'ruby', 'python', 'go', 'php'];

    this.addInputArray = [0];
    this.addTextArray = [0];
    this.textArray = []; // テキストを格納する配列
    this.selectArray = [this.selectValueList[0].value]; // セレクト(見出しやコードなど)を格納する配列

    this.state = {
      pageTitle: '',
      textValue: this.textArray,
      selectValue: this.selectArray,
      textLangValue: '',
      selectLangValue: this.langList[0],
      input: 0,
      activeClass: '',
      submitClass: ''
    };

    this.addFlg = false;
  }

  /**
   * titleの変更
   */
  titleValueChange(value) {
    this.setState({ pageTitle: value} );
  }

  /**
   * textの変更
   */
  textValueChange(value, valueId) {
    this.textArray[valueId] = value;
    this.setState({ textValue: this.textArray } );
  }

  /**
   * 言語のテキストの変更
   */
  textLangValueChange(value) {
    this.setState({ textLangValue: value} );
  }

  /**
   * select(見出しやコードなど)の変更
   */
  selectValueChange(value, valueId) {
    this.selectArray[valueId] = value;
    this.setState({ selectValue: this.selectArray} );
  }

  /**
   * 言語のselectの変更
   */
  selectValueChangeLang(value) {
    this.setState({ selectLangValue: value} );
  }

  /**
   * 日付表示
   */
  setDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const setDateValue = `${year}.${month}.${day}`;
    return setDateValue;
  }

  /**
   * 入力の複製
   */
  addInput() {
    this.setState({ input: this.state.input + 1 });
    this.addFlg = true;
  }

  /**
   * フォームの複製
   */
  addInputRender() {

    if (this.addFlg) {
      this.addInputArray.push(this.state.input);
    }

    return this.addInputArray.map((_value, _index) => (
      this.addFlg = false,
      <EditSelectInput
        key={_index}
        textId={`inputId${_index}`}
        textValue={this.state.textValue[_index]}
        textValueChange={this.textValueChange}
        selectValueList={this.selectValueList}
        selectValue={this.selectValueChange}
        valueRemove={this.textValueChangeRemove}
      />
    ));
  }

  /**
   * 文言の複製
   */
  addTextRender() {

    if (this.addFlg) {
      this.addTextArray.push(this.state.input);
    }

    return this.addTextArray.map((_value, _index) => (
      <EditTextRender
        key={_index}
        textId={`inputTextId-${_index}`}
        textValue={this.state.textValue[_index]}
        selectValue={this.state.selectValue[_index]}
        selectValueList={this.selectValueList}
      />
    ));
  }

  /**
   * 入力の削除
   */
  textValueChangeRemove(removeId) {

    this.textArray.splice(removeId, 1);
    this.addInputArray.pop();
    this.addTextArray.pop();

    this.setState({
      input: this.state.input - 1,
      textValue: this.textArray,
    });
  }

  /**
   * edit項目を非表示に
   */
  editClose() {
    if (this.state.activeClass !== 'is-hide') {
      this.setState({ activeClass: 'is-hide'});
    } else {
      this.setState({ activeClass: ''});
    }
  }

  /**
   * 記録ボタン(hidenにvalueをset)
   */
  onRec() {
    const saveTarget = document.getElementsByClassName('blocks');
    const saveHtml = saveTarget[0].outerHTML;
    const saveHtmlSet = document.getElementById('js-saveHtml');
    saveHtmlSet.setAttribute('value', saveHtml);

    if (this.state.submitClass !== 'is-show') {
      this.setState({ submitClass: 'is-show'});
    }
  }

  cancel() {
    if (this.state.submitClass === 'is-show') {
      this.setState({ submitClass: ''});
    }
  }

  render() {
    console.log(this.textArray);
    return(
      <div className="edit-wrapper">
        <input type="hidden" name="delete" value="false" />
        <input type="hidden" name="save" id="js-saveHtml"/>
        <section className="blocks">
          <div className="blocks__box">
            <div className="blocks__inner">
              <EditHeaderRender
                headerValue={this.state.pageTitle}
                selectLang={this.state.selectLangValue}
                langText={this.state.textLangValue}
              />
              <section className="blocks__text">
                <div className="blocks__time">
                  <p>{this.setDate()}</p>
                  <input type="hidden" name="time" value={this.setDate()} />
                </div>
                { this.addTextRender() }
              </section>
            </div>
          </div>
        </section>

        <div className={`edit ${this.state.activeClass}`}>
          <div className="edit__inner">
            <EditInput
              headerValue={this.state.pageTitle}
              headerValueChange={this.titleValueChange}
            />
            <EditSelectLang
              textLangValue={this.state.textLangValue}
              textLangValueChange={this.textLangValueChange}
              selectLangList={this.langList}
              selectLangValue={this.state.selectLangValue}
              selectLangValueChange={this.selectValueChangeLang}
            />
            { this.addInputRender() }
          </div>
          <div className="edit__button-wrapper">
            <button
              type="button"
              className="edit__button edit__button--close"
              onClick={this.editClose}>
            </button>
            <button
              type="button"
              className="edit__button edit__button--plus"
              onClick={this.addInput}>
            </button>
            <button
              type="button"
              className="edit__button edit__button--rec"
              onClick={this.onRec}>
            </button>
          </div>
          <div className={`edit__button-wrapper edit__button-wrapper--submit ${this.state.submitClass}`}>
            <div className="button-wrapper">
              <button
                type="submit"
                className="button button--submit">
                SUBMIT
              </button>
              <button
                type="button"
                className="button button--ng"
                onClick={this.cancel}>
                CANCEL
              </button>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

Edit.propTypes = {
  pageTitle: PropTypes.string,
  textValue: PropTypes.array,
  selectValue: PropTypes.string,
  text: PropTypes.array,
}

export default Edit;

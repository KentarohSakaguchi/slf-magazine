/**
 * @file テキスト入力フォーム(選択型)
 * 
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditSelectInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.removeInput = this.removeInput.bind(this);

    this.state = {
      value: ''
    }
  }

  /**
   * セレクトボックス
   */
  handleChange(setValue, textId) {
    const idNumber = Number(textId.replace('inputId', ''));
    return this.props.selectValue(setValue, idNumber)
  }

  setOption() {
    const items = this.props.selectValueList.map((_item, _number) => (
      <option key={_number} value={_item.value}>{_item.text}</option>
    ));

    return items;
  }

  /**
   * input
   */
  valueChange(setValue, textId) {
    this.setState({ value: setValue});
    const idNumber = Number(textId.replace('inputId', ''));
    return this.props.textValueChange(setValue, idNumber);
  }

  /**
   * 改行入力で\nをvalueに入れる
   */
  keyCodeChange(keyCode, textId) {
    const submitKeyCode = 13;
    if (keyCode === submitKeyCode) {
      this.setState({ value: `${this.state.value}\n`});
      const idNumber = Number(textId.replace('inputId', ''));
      return this.props.textValueChange(this.state.value, idNumber);
    }
  }

  removeInput() {
    this.setState({ value: ''});
    const idNumber = Number(this.props.textId.replace('inputId', ''));
    return this.props.valueRemove(idNumber);
  }

  render() {
    this.setOption();
    return(
      <div className="edit__input-block" id={this.props.textId}>
        <label className="edit__input-title">
          <select
            className="edit__input-select"
            onChange={(e) => this.handleChange(e.target.value, this.props.textId)}
            name={`select${this.props.textId}`}
          >
            {this.setOption()}
          </select>
        </label>
        <label className="edit__input-input">
          {(() => {
            return (
              <textarea
                className="edit__input"
                placeholder="文言を入力"
                value={this.state.value}
                onChange={(e) => this.valueChange(e.target.value, this.props.textId)}
                onKeyDown={(e) => this.keyCodeChange(e.keyCode, this.props.textId)}
                name={this.props.textId}
              />
            );
          })()}
        </label>
        <button type="button" className="edit__button edit__button--minus" onClick={this.removeInput}></button>
      </div>
    );
  }

}

EditSelectInput.propTypes = {
  selectValue: PropTypes.func,
  selectValueList: PropTypes.array,
  textValueChange: PropTypes.func,
  textValue: PropTypes.string,
  textId: PropTypes.string,
  valueRemove: PropTypes.func
}

export default EditSelectInput;

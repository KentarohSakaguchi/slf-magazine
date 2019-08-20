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
      value: this.props.textValue,
      selectedValue: this.props.selectedValue
    }

    console.log(this.state.value);
  }

  /**
   * セレクトボックス
   */
  handleChange(setValue, textId) {
    this.setState({
      selectedValue: setValue
    })
    const idNumber = Number(textId.replace('inputId', ''));
    return this.props.selectValue(setValue, idNumber)
  }

  setOption() {
    const items = this.props.selectValueList.map((_item, _number) => (
      (() => {
        if (_item.value === this.state.selectedValue) {
          return <option key={_number} value={_item.value} selected>{_item.text}</option>
        } else {
          return <option key={_number} value={_item.value}>{_item.text}</option>
        }
      })()
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
      <div className="display__text-wrapper">
        <div className="display__input-block display__input-block--edit" id={this.props.textId}>
          <label className="display__select-type">
            <select
              className="display__input-select display__input-select--type"
              onChange={(e) => this.handleChange(e.target.value, this.props.textId)}
              name={`select${this.props.textId}`}
            >
              {this.setOption()}
            </select>
          </label>
          <label className="display__input-input">
            {(() => {
              return (
                <textarea
                  className={`display__input display__${this.state.selectedValue}`}
                  placeholder="文言を入力"
                  value={this.state.value}
                  onChange={(e) => this.valueChange(e.target.value, this.props.textId)}
                  onKeyDown={(e) => this.keyCodeChange(e.keyCode, this.props.textId)}
                  name={this.props.textId}
                />
              );
            })()}
          </label>
          <button type="button" className="edit__button edit__button--minus edit__button--display" onClick={this.removeInput}></button>
        </div>
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
  valueRemove: PropTypes.func,
  selectedValue: PropTypes.array
}

export default EditSelectInput;

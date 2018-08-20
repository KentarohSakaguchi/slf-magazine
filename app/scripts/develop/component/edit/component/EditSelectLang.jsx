/**
 * @file 言語フォーム(選択型)
 * 
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditSelectLang extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * セレクトボックス
   */
  handleChange(setValue) {
    return this.props.selectLangValueChange(setValue)
  }

  setOption() {
    const items = this.props.selectLangList.map((_item, _number) => (
      <option key={_number} value={_item}>{_item}</option>
    ));

    return items;
  }

  /**
   * input
   */
  valueChange(setValue) {
    return this.props.textLangValueChange(setValue);
  }

  render() {
    this.setOption();
    return(
      <div className="edit__input-block">
        <label className="edit__input-title edit__input-title--lang">
          <select
            className="edit__input-select"
            value={this.props.selectLangValue}
            onChange={(e) => this.handleChange(e.target.value)}>
            {this.setOption()}
          </select>
        </label>
        <label className="edit__input-input">
        <input className="edit__input" type="text" placeholder="関連ワードを入力" value={this.props.textLangValue} onChange={(e) => this.valueChange(e.target.value)} />
        </label>
      </div>
    );
  }

}

EditSelectLang.propTypes = {
  selectValue: PropTypes.func,
  selectLangValueChange: PropTypes.func,
  selectLangValue: PropTypes.string,
  selectLangList: PropTypes.array,
  textLangValueChange: PropTypes.func,
  textLangValue: PropTypes.string
}

export default EditSelectLang;

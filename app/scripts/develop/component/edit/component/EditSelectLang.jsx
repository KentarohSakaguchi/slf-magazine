/**
 * @file 言語フォーム(選択型)
 * 
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';

class displaySelectLang extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.langWidth = 0;
    this.langTextWidth = 0;
  }

  /**
   * セレクトボックス
   */
  handleChange(setValue) {

    this.setState({
      langWidth: document.getElementsByClassName('labels__main')[0].offsetWidth
    });

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

  /**
   * render後、selectboxと表示されている言語の横幅を同期させる
   */
  componentDidMount() {
    this.langWidth = document.getElementsByClassName('labels__main')[0].offsetWidth;
    this.langTextWidth = document.getElementsByClassName('labels__sub')[0].offsetWidth;
    document.getElementsByClassName('display__input-title--lang')[0].style.width = `${this.langWidth}px`;
    document.getElementsByClassName('display__input-input--lang')[0].style.width = `${this.langTextWidth}px`;
  }

  componentDidUpdate() {
    this.langWidth = document.getElementsByClassName('labels__main')[0].offsetWidth;
    this.langTextWidth = document.getElementsByClassName('labels__sub')[0].offsetWidth;
    document.getElementsByClassName('display__input-title--lang')[0].style.width = `${this.langWidth}px`;
    document.getElementsByClassName('display__input-input--lang')[0].style.width = `${this.langTextWidth}px`;
  }

  render() {
    this.setOption();
    return(
      <React.Fragment>
        <div className="labels">
          <a className="labels__link" href="#">
            <span className={`labels__main labels__main--${this.props.selectLangValue}`}>{this.props.selectLangValue}</span>
          </a>
          <a className="labels__link" href="#">
            <span className={`labels__sub labels__sub--${this.props.selectLangValue}`}>{this.props.textLangValue}</span>
          </a>
        </div>
        <div className="display__text-wrapper">
          <div className="display__input-block display__input-block--lang">
            <label
              className="display__input-title display__input-title--lang"
            >
              <select
                className="display__input-select"
                name="lang"
                value={this.props.selectLangValue}
                onChange={(e) => this.handleChange(e.target.value)}>
                {this.setOption()}
              </select>
            </label>
            <label className="display__input-input display__input-input--lang">
            <input className="display__input" type="text" name="word" placeholder="" value={this.props.textLangValue} onChange={(e) => this.valueChange(e.target.value)} />
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

displaySelectLang.propTypes = {
  selectValue: PropTypes.func,
  selectLangValueChange: PropTypes.func,
  selectLangValue: PropTypes.string,
  selectLangList: PropTypes.array,
  textLangValueChange: PropTypes.func,
  textLangValue: PropTypes.string
}

export default displaySelectLang;

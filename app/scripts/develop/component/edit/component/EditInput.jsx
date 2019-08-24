/**
 * @file テキスト入力フォーム
 * 
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditInput extends Component {

  constructor(props) {
    super(props);
    this.valueChange = this.valueChange.bind(this);
  }

  valueChange(setValue) {
    return this.props.headerValueChange(setValue);
  }

  render() {
    return(
      <div className="display__text-wrapper">
        <div className="display__input-block">
          <label className="display__input-input">
            <textarea className="display__input display__input--header" type="text" name="title" placeholder="ページタイトルを入力" autoComplete="off" value={this.props.headerValue} onChange={(e) => this.valueChange(e.target.value)} />
          </label>
        </div>
      </div>
    );
  }

}

EditInput.propTypes = {
  headerValueChange: PropTypes.func,
  headerValue: PropTypes.string
}

export default EditInput;

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
      <div className="edit__input-block">
        <label className="edit__input-input">
          <input className="edit__input" type="text" name="title" placeholder="ページタイトルを入力" value={this.props.headerValue} onChange={(e) => this.valueChange(e.target.value)} />
        </label>
      </div>
    );
  }

}

EditInput.propTypes = {
  headerValueChange: PropTypes.func,
  headerValue: PropTypes.string
}

export default EditInput;

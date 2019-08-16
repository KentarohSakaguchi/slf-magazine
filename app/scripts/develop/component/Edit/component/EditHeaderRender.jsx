/**
 * @file タイトル描画
 * 
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditHeaderRender extends Component {

  render() {
    return(
      <h2 className="blocks__title">{this.props.headerValue}</h2>
    );
  }

}

EditHeaderRender.propTypes = {
  headerValue: PropTypes.string,
  selectLang: PropTypes.string,
  langText: PropTypes.string
}

export default EditHeaderRender;

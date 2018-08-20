/**
 * @file タイトル描画
 * 
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditLangRender from './EditLangRender';

class EditHeaderRender extends Component {

  render() {
    return(
      <header className="blocks__header">
        <h2 className="blocks__title">{this.props.headerValue}</h2>
        <EditLangRender 
          lang={this.props.selectLang}
          text={this.props.langText}
        />
      </header>
    );
  }

}

EditHeaderRender.propTypes = {
  headerValue: PropTypes.string,
  selectLang: PropTypes.string,
  langText: PropTypes.string
}

export default EditHeaderRender;

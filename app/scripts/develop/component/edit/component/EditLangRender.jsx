/**
 * @file タイトル描画
 * 
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditLangRender extends Component {

  render() {
    return(
        <div className="labels">
          <a className="labels__link" href="#">
            <span className={`labels__main labels__main--${this.props.lang}`}>{this.props.lang}</span>
          </a>
          <a className="labels__link" href="#">
            <span className={`labels__sub labels__sub--${this.props.lang}`}>{this.props.text}</span>
          </a>
        </div>
    );
  }

}

EditLangRender.propTypes = {
  lang: PropTypes.string,
  text: PropTypes.string
}

export default EditLangRender;

/**
 * @file タイトル描画
 * 
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditTextRender extends Component {

  /**
   * 本文エリアのパーツ
   */
  constructor(props) {
    super(props);
  }

  renderTextBlock() {
    let block = '';

    switch(this.props.selectValue) {

      case this.props.selectValueList[0].value:
        block = <h3 className="blocks__title">{this.props.textValue}</h3>;
        break;
      case this.props.selectValueList[1].value:
        block = <h3 className="blocks__description-title">{this.props.textValue}</h3>;
        break;
      case this.props.selectValueList[2].value:
        block = <p>{this.props.textValue}</p>;
        break;
      case this.props.selectValueList[3].value:
        block = <pre className="blocks__code"><code className="ruby">{this.props.textValue}</code></pre>;
        break;
      case this.props.selectValueList[4].value:
        block = <div className="blocks__code-preview"><code className="blocks__code-preview-text"><p>{this.props.textValue}</p></code></div>;
      // case this.props.selectValueList[5].value:
      //   block = <div className="blocks__image"><img src={`/images/${this.props.textValue}`}/></div>;

        break;
      default:
        block = <h3 className="blocks__title">{this.props.textValue}</h3>;
        break;
   }

    return block;

  }

  render() {
    return (
      <div className="blocks__paragraph" id={this.props.textId}>
        { this.renderTextBlock() }
      </div>
    );
  }

}

EditTextRender.propTypes = {
  textValue: PropTypes.string,
  selectValue: PropTypes.string,
  selectValueList: PropTypes.array,
  textId: PropTypes.string
}

export default EditTextRender;

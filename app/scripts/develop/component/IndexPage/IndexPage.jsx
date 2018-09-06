/**
 * indexページの処理
 */

import React, { Component } from 'react';
import { Ajax, GetAjax, SetAjax } from '../Ajax/Ajax';

class IndexPage extends Component {

  constructor(props) {
    super(props);

    this.dataArray = [];
    this.state = {
      data: this.dataArray
    };

    this.result = {
      index: 0
    }

    // 初回読み込み
    Ajax('/record/report');
    SetAjax('id-1');

    GetAjax().then((result) => {
      this.setState({
        data: result.data
      });
    });

  }

  renderHtml() {
    const renderFile = this.state.data.map((value) => {
      return value.json.save;
    });

    return renderFile.join('');
  }
  

  render() {
    console.log(this.state.data);
    return <div className="report" dangerouslySetInnerHTML={{__html: this.renderHtml()}}></div>;
  }
}

export default IndexPage;
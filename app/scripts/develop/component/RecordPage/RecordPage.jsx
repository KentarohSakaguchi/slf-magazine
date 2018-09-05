/**
 * indexページの処理
 */

import React, { Component } from 'react';
import { Ajax, GetAjax, SetAjax } from '../Ajax/Ajax';

class RecordPage extends Component {

  constructor(props) {
    super(props);

    this.dataArray = [];
    this.state = {
      data: this.dataArray
    };

    // 初回読み込み
    Ajax('/record/list');
    const setPram = location.pathname.replace(/\//g, '');
    SetAjax(`report=${setPram}`);

    GetAjax().then((result) => { 
      console.log(result.data);
      this.setState({
        data: result.data
      });
    });

  }

  renderHtml() {
    return this.state.data.map((value) => {
      return value.json.save;
    })
  }
  

  render() {
    return <div className="report" dangerouslySetInnerHTML={{__html: this.renderHtml()}}></div>
  }
}

export default RecordPage;
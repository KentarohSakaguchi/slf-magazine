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

    this.getAjax().then(() => {

      /** 初回読み込み後の処理
       * 初回読み込みのthis.result.indexを元に全部の記事JSONを読みこむ
       */
      let readIndex = this.result.index - 1; // 初回読み込んでいるので-1をする
      for (let i = 1; i <= readIndex; i++) {

        SetAjax(`id-${i + 1}`); // id-2から読み込みたいため+1をする

        GetAjax().then((result) => {

          this.dataArray.push(result.data.json);
          this.setState({
            data: this.dataArray
          });
        });
      }
    });

  }

  /**
   * ajaxデータ取得処理(promise版)
   */
  getAjax() {

    /* eslint no-undef: 0 */
    return new Promise((resolve) => {

      GetAjax().then((result) => {
        console.log(result);
        this.dataArray.push(result.data.json);
        this.setState({
          data: this.dataArray
        });

        this.result.index = result.data.index;
        resolve();
      });
    });
  }

  renderHtml() {
    const renderFile = this.state.data.map((value) => {
      return value.save;
    });

    return renderFile.join('');
  }
  

  render() {
    console.log(this.state.data);
    return <div className="report" dangerouslySetInnerHTML={{__html: this.renderHtml()}}></div>;
  }
}

export default IndexPage;
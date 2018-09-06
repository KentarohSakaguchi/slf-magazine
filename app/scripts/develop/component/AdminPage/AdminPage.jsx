/**
 * indexページの処理
 */

import React, { Component } from 'react';
import { Ajax, GetAjax, SetAjax } from '../Ajax/Ajax';

class AdminPage extends Component {

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

    return this.state.data.map((value, index) => {
      return (
        <section  key={index} className="blocks">
          <div className="blocks__box">
            <div className="blocks__inner">
              <div className="blocks__header">
                <h2 className="blocks__title">{value.title}</h2>
                <div className="admin__label-wrap">
                  <div className="labels">
                    <a className="labels__link" href={`/${value.lang}`}>
                      <span className={`labels__main labels__main--${value.lang}`}>{value.lang}</span>
                    </a>
                    <a className="labels__link" href={`/${value.lang}`}>
                      <span className={`labels__sub labels__sub--${value.lang}`}>{value.word}</span>
                    </a>
                  </div>
                  <div className="blocks__time">
                    <p>{value.time}</p>
                  </div>
                </div>
              </div>
              <div className="admin__button-wrap">
                <button type="button" className="edit__button edit__button--minus"></button>
              </div>
            </div>
          </div>
        </section>
      );
    });
  }
  

  render() {
    return (
      <div className="report">
        <div className="admin">
          {this.renderHtml()}
        </div>
      </div>
    );
  }
}

export default AdminPage;
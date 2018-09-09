/**
 * adminページの処理
 */

import React, { Component } from 'react';
import { Ajax, GetAjax, SetAjax } from '../Ajax/Ajax';

class AdminPage extends Component {

  constructor(props) {
    super(props);

    this.dataArray = [];
    this.state = {
      data: this.dataArray,
      submitClass: ''
    };

    this.result = {
      index: 0
    }

    this.delete = this.delete.bind(this);
    this.onRec = this.onRec.bind(this);
    this.cancel = this.cancel.bind(this);

    // 初回読み込み
    Ajax('/record/report');
    SetAjax('admin');

    GetAjax().then((result) => {
      console.log(result);
      this.setState({
        data: result.data,
      });
    });

  }

  /**
   * 削除ボタン 押下でstate.data.deleteを切り替える
   */
  delete(event) {
    const deleteId = Number(event.currentTarget.getAttribute('data-id').replace('id-', ''));
    const arrData = this.state.data;
    console.log(arrData);
    arrData[deleteId - 1].delete = 'save'; // flgにsaveを付与でサーバー側で削除処理をしてくれる
    this.setState({
      data: arrData,
    });
  }

  /**
   * 記録ボタン
   */
  onRec() {
    if (this.state.submitClass !== 'is-show') {
      this.setState({ submitClass: 'is-show'});
    }
  }

  cancel() {
    if (this.state.submitClass === 'is-show') {
      this.setState({ submitClass: ''});
    }
  }

  render() {
    return (
      <div className="report">
        <div className="admin">
          {(() => {

            return this.state.data.map((value, index) => {

              let idName = index + 1;
              if (idName < 10) {
                idName = String(`0${idName}`);
              }

              return (
                <React.Fragment key={index} >
                  {(() => {
                    if (value.delete === 'true' || value.delete === true || value.delete === 'save') {
                      // deleteがtrueのものは表示しない
                      return <input className="blocks" name={`id-${idName}`} type="hidden" value={value.delete} id={`id-${idName}`} />
                    } else {
                      return(
                        <section className="blocks" id={`id-${idName}`}>
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
                                <button type="button" data-id={`id-${idName}`} className="edit__button edit__button--minus" onClick={(event) => this.delete(event)}></button>
                                <input type="hidden" value={value.delete} />
                              </div>
                            </div>
                          </div>
                        </section>
                      );
                    }
                  })()}
                </React.Fragment>
              );
            });
          })()}
          <div className="edit result">
            <div className="edit__button-wrapper">
              <button
                type="button"
                className="edit__button edit__button--rec"
                onClick={this.onRec}>
              </button>
            </div>
            <div className={`edit__button-wrapper edit__button-wrapper--submit ${this.state.submitClass}`}>
              <div className="button-wrapper">
                <button
                  type="submit"
                  className="button button--submit">
                  OK
                </button>
                <a
                  href="/admin"
                  className="button button--ng"
                  onClick={this.cancel}>
                  CANCEL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
import React, { Component } from 'react';

class Submit extends Component {

  constructor(props) {

    super(props);

    this.onRec = this.onRec.bind(this);
    this.cancel = this.cancel.bind(this);

    this.state = {
      submitClass: ''
    };

    this.addFlg = false;
  }

  /**
   * 記録ボタン(hidenにvalueをset)
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
    return(
      <div className="edit-wrapper">
        <div className={`edit ${this.state.activeClass}`}>
          <div className="edit__inner">
          </div>
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
              <button
                type="button"
                className="button button--ng"
                onClick={this.cancel}>
                CANCEL
              </button>
            </div>
          </div>
        </div>

      </div>
    );
  }

}



export default Submit;

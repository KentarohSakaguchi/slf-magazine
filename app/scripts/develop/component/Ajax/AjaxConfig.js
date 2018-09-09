import axios from 'axios';

/**
 * ajaxの設定クラス → Ajax.jsのみでインスタンスを作る
 */
class AjaxConfig{

  constructor(){
    this.url = null;
    this.param = null;
  }

  get getAjax(){

    /* eslint no-undef: 0 */
    return new Promise((resolve, reject) => {

      axios
        .get(this.url, { params: this.param })
        .then((results) => {
          resolve(results);
        })
        .catch((results) => {
          console.error(results);
          reject(results);
        });
    });
  }

  set setUrl(url){
    this.url = url;
  }

  set setAjax(param){
    this.param = param;
  }

}

export default AjaxConfig;

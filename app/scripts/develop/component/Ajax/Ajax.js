/**
 * Ajax実行関数
 */

import AjaxConfig from './AjaxConfig';

const ajaxConfig = new AjaxConfig();

// URL設定関数
export const Ajax = (url) => {
  ajaxConfig.setUrl = url;
};

// 結果取得関数
export const GetAjax = () => {
  return ajaxConfig.getAjax
};

// パラメータset関数
export const SetAjax = (param) => {
  ajaxConfig.setAjax = param;
};

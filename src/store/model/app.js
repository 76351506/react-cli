/*
 * @Author: heinan
 * @Date: 2021-04-07 15:14:10
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-26 09:43:12
 */

import { UPDATE_TOKEN, UPDATE_HEAD, UPDATE_FOOT } from "@/store/types";

const defaultState = {
  token: "",
  showHead: true,
  showFoot: true,
};

function app(state = defaultState, { payload, type }) {
  switch (type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case UPDATE_HEAD:
      console.log(payload);
      return {
        ...state,
        showHead: payload,
      };
    case UPDATE_FOOT:
      return {
        ...state,
        showHead: payload,
      };
    default:
      return state;
  }
}

export default app;

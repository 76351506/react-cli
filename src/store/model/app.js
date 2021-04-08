/*
 * @Author: heinan
 * @Date: 2021-04-07 15:14:10
 * @Last Modified by: heinan
 * @Last Modified time: 2021-04-07 15:36:39
 */

import { UPDATE_TOKEN, UPDATE_HEAD, UPDATE_FOOT } from "@/store/types";

const defaultState = {
  token: "haha",
  head: "",
  foot: "",
};
function appReducer(state = defaultState, { payload, type }) {
  switch (type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case UPDATE_HEAD:
      return {
        ...state,
        head: payload,
      };
    case UPDATE_FOOT:
      return {
        ...state,
        foot: payload,
      };
    default:
      return state;
  }
}

export default appReducer;

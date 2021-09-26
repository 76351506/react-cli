/*
 * @Author: heinan
 * @Date: 2021-04-07 15:14:50
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-26 09:35:53
 */
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createModel } from "@/utils";
import ReduxThunk from "redux-thunk";

export default createStore(
  combineReducers(createModel()),
  applyMiddleware(ReduxThunk)
);

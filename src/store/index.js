/*
 * @Author: heinan
 * @Date: 2021-04-07 15:14:50
 * @Last Modified by: heinan
 * @Last Modified time: 2021-04-07 15:46:47
 */
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducers from "./model";

export default createStore(rootReducers, applyMiddleware(ReduxThunk));

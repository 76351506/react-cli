/*
 * @Author: heinan
 * @Date: 2021-09-26 10:11:38
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-26 10:23:29
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import notFoundImg from "@/assets/images/404.png";
import "./404.css";

const mapState2props = function (store) {
  return store.app;
};
const mapDispatch2props = function (dispatch) {
  return {
    updata() {
      dispatch({ type: "UPDATE_HEAD", payload: false });
      dispatch({ type: "UPDATE_FOOT", payload: false });
    },
  };
};
@connect(mapState2props, mapDispatch2props)
class NotFound extends Component {
  render() {
    this.props.updata();
    return (
      <div className="content-wraper">
        <h3>返回主页</h3>
        <img alt="NotFound" src={notFoundImg} />
      </div>
    );
  }
}

export default NotFound;

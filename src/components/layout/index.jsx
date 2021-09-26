/*
 * @Author: heinan
 * @Date: 2021-09-26 10:01:58
 * @Last Modified by:   heinan
 * @Last Modified time: 2021-09-26 10:01:58
 */
import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { APP_ROUTER_WHITE_LIST } from "@/config";

import Header from "./header";
import Footer from "./footer";

import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/style.css";

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
@withRouter
@connect(mapState2props, mapDispatch2props)
class Layout extends Component {
  componentWillMount() {
    const inWhiteList = APP_ROUTER_WHITE_LIST.includes(
      this.props.location.pathname
    );
    if (inWhiteList) {
      this.props.updata();
    }
  }
  render() {
    return (
      <div className="wraper">
        {this.props.showHead ? <Header></Header> : null}
        <main className="content">{this.props.children}</main>
        {this.props.showHead ? <Footer></Footer> : null}
      </div>
    );
  }
}
export default Layout;

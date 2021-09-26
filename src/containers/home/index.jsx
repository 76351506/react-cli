/*
 * @Author: heinan 
 * @Date: 2021-09-26 09:19:06 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2021-09-26 09:19:06 
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { UPDATE_TOKEN } from "@/store/types";
import { actionCreator } from "@/store/actions";

const mapState2Props = (store) => {
  return store.app;
};
const mapDispatch2Props = (dispatch) => {
  return {
    handlerClick(token) {
      dispatch(actionCreator(UPDATE_TOKEN, token));
    },
  };
};

@connect(mapState2Props, mapDispatch2Props)
class Home extends Component {
  getToken() {
    this.props.handlerClick("123131");
  }
  render() {
    console.log(this.props);
    return (
      <div>
        this is Home {this.props.token}
        <button onClick={() => this.getToken()}>获得token</button>
      </div>
    );
  }
}

export default Home;

/*
 * @Author: heinan
 * @Date: 2019-12-06 13:38:00
 * @Last Modified by: heinan
 * @Last Modified time: 2021-04-07 14:40:05
 */
import React from "react";
import RouterMap from "@/router/map";
import Routes from "@/router/routes";

function RouterView(props) {
  const routes = props.routes ? props.routes : Routes;
  return <RouterMap routes={routes} {...props}></RouterMap>;
}

export default RouterView;

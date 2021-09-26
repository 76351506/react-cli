/*
 * @Author: heinan
 * @Date: 2019-12-06 13:37:54
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-26 10:09:50
 */
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class RouterMap extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Switch>
        {routes.map((item) => {
          if (item.path === "/") {
            return (
              <Redirect
                to={item.redirect}
                from={item.path}
                key={item.name}
                exact
              ></Redirect>
            );
          }
          const children = item.children === undefined ? [] : item.children;
          const Comp = item.component;
          return (
            <Route
              key={item.name}
              path={item.path}
              component={(config) => {
                return <Comp routes={children} {...config}></Comp>;
              }}
            />
          );
        })}
      </Switch>
    );
  }
}
export default RouterMap;

/*
 * @Author: heinan
 * @Date: 2019-12-06 13:37:54
 * @Last Modified by: heinan
 * @Last Modified time: 2021-04-07 14:39:33
 */
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class RouterMap extends Component {
  render() {
    const { routes } = this.props;
    const defaultRoute = (
      <Redirect from='/' to='/home' key={"default"} exact></Redirect>
    );
    return (
      <Switch>
        {routes
          .map(item => {
            const children = item.children === undefined ? [] : item.children;
            const Comp = item.component;
            return (
              <Route
                key={item.name}
                path={item.path}
                component={config => {
                  return <Comp routes={children} {...config}></Comp>;
                }}
              />
            );
          })
          .concat([defaultRoute])}
      </Switch>
    );
  }
}
export default RouterMap;

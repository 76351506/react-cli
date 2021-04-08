/*
 * @Author: heinan
 * @Date: 2019-12-06 13:37:51
 * @Last Modified by: heinan
 * @Last Modified time: 2021-04-08 10:51:33
 */
import User from "@/containers/user";
import Home from "@/containers/home";
import Mine from "@/containers/mine";
import Cart from "@/containers/cart";

const routes = [
  {
    path: "/user",
    name: "user",
    component: User,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];
export default routes;

/*
 * @Author: heinan
 * @Date: 2019-12-06 13:37:51
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-26 10:09:59
 */
import Login from "@/containers/user/login";
import Home from "@/containers/home";
import NotFound from "@/components/404";

const routes = [
  {
    path: "/",
    name: "default",
    redirect: "/home",
  },
  {
    path: "/user/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    name: "NotFound",
    component: NotFound,
  },
];
export default routes;

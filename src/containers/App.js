/*
 * @Author: heinan
 * @Date: 2021-09-26 09:12:25
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-26 09:55:53
 */
import Layout from "@/components/layout";
import RouterView from "@/router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <RouterView></RouterView>
      </Layout>
    </Router>
  );
}

export default App;

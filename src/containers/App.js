import Layout from "@/components/layout";
import RouterView from "@/router";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Router>
        <RouterView></RouterView>
      </Router>
    </Layout>
  );
}

export default App;

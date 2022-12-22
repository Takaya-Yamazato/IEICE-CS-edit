import React from "react";
import { Router } from "@reach/router";
import Layout from "../../components/Layout";
import PrivateRoute from "../../components/privateRoute";
import Profile from "../../components/profile";
import Login from "../../components/login";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/xplore/profile" component={Profile} />
      <Login path="/xplore/login" />
    </Router>
  </Layout>
);

export default App;

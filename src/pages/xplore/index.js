import React from "react";
import { Router } from "@reach/router";
import Layout from "../../components/Layout";
import PrivateRoute from "../../components/privateRoute";
import Profile from "../../components/profile";
import Login from "../../components/login";
import Migration from "../../components/migration";
import EBschedule from "../../components/ebSchedule";
import ComEXschedule from "../../components/comexSchedule";
import EBinfo from "../../components/ebInfo";
import ComEXinfo from "../../components/comexInfo";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/xplore/Migration-of-EB-and-ComEX-to-IEEE-Xplore/" component={Migration} />
      <PrivateRoute path="/xplore/EB-Migration-Schedule/" component={EBschedule} />
      <PrivateRoute path="/xplore/ComEX-Migration-Schedule/" component={ComEXschedule} />
      <PrivateRoute path="/xplore/EB-Information-for-Authors/" component={EBinfo} />
      <PrivateRoute path="/xplore/ComEX-Information-for-Authors/" component={ComEXinfo} />
      <PrivateRoute path="/xplore/profile" component={Profile} />
      <Login path="/xplore/login" />
    </Router>
  </Layout>
);

export default App;

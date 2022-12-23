import React from "react";
// import { Router } from "@reach/router";
import Layout from "../../components/Layout";
// import PrivateRoute from "../../components/privateRoute";
// import Profile from "../../components/profile";
// import Login from "../../components/login";

import { Link, navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from "../../services/auth";

const App = () => (
  <Layout>
  <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
  <p>
    {isLoggedIn() ? (
      <>
        You are logged in, so check your <Link to="/xplore/profile">profile</Link>
        <br />
        Here is the link <Link to="xplore/ComEX-Information-for-Authors">ComEX</Link>
        <br />
        <a
      href="/"
      onClick={(event) => {
        event.preventDefault();
        logout(() => navigate(`/xplore/login`));
      }}
    >
      Logout
    </a>
      </>
    ) : (
      <>
        You should <Link to="/xplore/login">log in</Link> to see restricted content
      </>
    )}
  </p>
  <hr></hr>
  {isLoggedIn() ? (
    <a
      href="/"
      onClick={(event) => {
        event.preventDefault();
        logout(() => navigate(`/xplore/login`));
      }}
    >
      Logout
    </a>
  ) : null}
</Layout>
);

export default App;

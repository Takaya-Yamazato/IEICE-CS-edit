import React from 'react'
import { Router } from '@reach/router'
import Layout from '../../components/Layout'
import PrivateRoute from '../../components/privateRoute'
import Profile from '../../components/profile'
import Login from '../../components/login'

import ComEXinfo from '../../components/comexInfo'

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute
        path="/xplore/ComEX-Information-for-Authors/"
        component={ComEXinfo}
      />
      <PrivateRoute path="/xplore/profile" component={Profile} />
      <Login path="/xplore/login" />
    </Router>
  </Layout>
)

export default App

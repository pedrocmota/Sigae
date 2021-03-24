import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './componentes/PrivateRoute/PrivateRoute'

import Login from './paginas/Login/Login'
import Registrar from './paginas/Registrar/Registrar'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/registrar" exact>
          <Registrar/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
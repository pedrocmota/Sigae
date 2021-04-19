import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './paginas/Login/Login'
import RegistrarCodigo from './paginas/Registrar/RegistrarCodigo/RegistrarCodigo'
import RegistrarForm from './paginas/Registrar/RegistrarForm/RegistrarForm'
// import Registrar from './paginas/Registrar/Registrar'

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
          <RegistrarCodigo/>
        </Route>
        <Route path="/registrar/:codigo" exact>
          <RegistrarForm/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
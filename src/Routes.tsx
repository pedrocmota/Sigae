import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './paginas/Login/Login'
import RegistrarCodigo from './paginas/Registrar/RegistrarCodigo/RegistrarCodigo'
import RegistrarForm from './paginas/Registrar/RegistrarForm/RegistrarForm'
import RegistrarValidar from './paginas/Registrar/RegistrarValidar/RegistrarValidar'
import Codigo from './paginas/RecuperarSenha/RecuperarSenha'

import Erro404 from './paginas/Erro404/Erro404'
import Teste from './paginas/Teste/Teste'

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
        <Route path="/registrar/:codigo/validar" exact>
          <RegistrarValidar/>
        </Route>
        <Route path="/codigo/recuperarSenha" exact>
          <Codigo/>
        </Route>

        <Route path="*" exact>
          <Erro404/>
        </Route>

        <Route path="/teste" exact>
          <Teste/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
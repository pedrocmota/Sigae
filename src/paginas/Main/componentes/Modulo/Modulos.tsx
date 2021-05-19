import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ModuloContainer from './ModuloContainer/ModuloContainer'

import HomeIcon from '@material-ui/icons/Home'

import ModuloInicio from '../../../../modulos/inicio/Inicio'
import ModuloCalendario from '../../../../modulos/calendario/Calendario'

import Atendimentos from '../../../../modulos/atendimentos/Atendimentos'
import Atendimento from '../../../../modulos/atendimento/Atendimento'

const Modulos: React.FC = () => {
  return (
    <Switch>
      <Route path="/modulo" exact>
        <Redirect to="/" />
      </Route>

      <Route path="/" exact>
        <ModuloContainer nome="Início" icone={HomeIcon} componente={ModuloInicio}
          condicao={{
            logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
          }} />
      </Route>
      <Route path="/modulo/calendario" exact>
        <ModuloContainer nome="Calendário" icone={HomeIcon} componente={ModuloCalendario}
          condicao={{
            logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
          }} />
      </Route>

      <Route path="/modulo/atendimentos" exact>
        <ModuloContainer nome="Atendimentos" icone={HomeIcon} componente={Atendimentos}
          condicao={{
            logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
          }} />
      </Route>
      <Route path="/modulo/atendimentos/:id" exact>
        <ModuloContainer nome="Atendimento específico" icone={HomeIcon} componente={Atendimento}
          condicao={{
            logado: false, naoLogado: false, discentes: false, docentes: false, admins: false
          }} />
      </Route>
      <Route path="*" exact>
        <h1>Nada</h1>
      </Route>
    </Switch>
  )
}

export default Modulos
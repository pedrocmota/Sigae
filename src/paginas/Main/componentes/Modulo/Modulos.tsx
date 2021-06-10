import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ModuloContainer from './ModuloContainer/ModuloContainer'

import ModuloInicio from '../../../../modulos/inicio/Inicio'
import ModuloCalendario from '../../../../modulos/calendario/Calendario'
import ModuloMinhasTurmas from '../../../../modulos/minhasTurmas/MinhasTurmas'
import ModuloMeusAtendimentos from '../../../../modulos/meusAtendimentos/MeusAtendimentos'
import ModuloTurmasInscritas from '../../../../modulos/turmasInscritas/TurmasInscritas'
import ModuloAtendimentosInscritos from '../../../../modulos/atendimentosInscritos/AtendimentosInscritos'
import ModuloMinhaTurma from '../../../../modulos/minhaTurma/MinhaTurma'
import ModuloListaDiscentes from '../../../../modulos/listaDiscentes/ListaDiscentes'
import ModuloListaDocentes from '../../../../modulos/listaDocentes/ListaDocentes'
import ModuloAlterarDados from '../../../../modulos/alterarDados/AlterarDados'
import Desconhecido from '../../../../modulos/desconhecido/Desconhecido'

import HomeIcon from '@material-ui/icons/Home'
import CalendarIcon from '@material-ui/icons/PermContactCalendar'
import SchoolIcon from '@material-ui/icons/School'
import GroupIcon from '@material-ui/icons/Group'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'

const Modulos: React.FC = () => {
  return (
    <Switch>
      <Route path="/modulo" exact>
        <Redirect to="/" />
      </Route>

      <Route path="/" exact>
        <ModuloContainer nome="Início" icone={HomeIcon} componente={ModuloInicio} sincrono
          condicao={{
            logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
          }} />
      </Route>

      <Route path="/modulo/calendario" exact>
        <ModuloContainer nome="Calendário" icone={CalendarIcon} componente={ModuloCalendario}
          condicao={{
            logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
          }} />
      </Route>
      <Route path="/modulo/turmas/minhas" exact>
        <ModuloContainer nome="Minhas turmas de atendimento" icone={SchoolIcon} componente={ModuloMinhasTurmas}
          condicao={{
            logado: true, naoLogado: false, discentes: false, docentes: true, admins: false
          }} />
      </Route>
      <Route path="/modulo/turmas/atendimentos/lista" exact>
        <ModuloContainer nome="Meus atendimentos agendados" icone={SchoolIcon} componente={ModuloMeusAtendimentos}
          condicao={{
            logado: true, naoLogado: false, discentes: false, docentes: true, admins: false
          }} />
      </Route>
      <Route path="/modulo/turmas/inscritas" exact>
        <ModuloContainer nome="Turmas inscritas" icone={SchoolIcon} componente={ModuloTurmasInscritas}
          condicao={{
            logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
          }} />
      </Route>
      <Route path="/modulo/atendimentos/inscritos" exact>
        <ModuloContainer nome="Atendimentos inscritos" icone={SchoolIcon} componente={ModuloAtendimentosInscritos}
          condicao={{
            logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
          }} />
      </Route>

      <Route path="/modulo/turmas/minha" exact>
        <ModuloContainer nome="Minha turma" icone={GroupIcon} componente={ModuloMinhaTurma}
          condicao={{
            logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
          }} />
      </Route>
      <Route path="/modulo/usuarios/discentes" exact>
        <ModuloContainer nome="Lista de discentes" icone={GroupIcon} componente={ModuloListaDiscentes}
          condicao={{
            logado: true, naoLogado: false, discentes: false, docentes: true, admins: true
          }} />
      </Route>
      <Route path="/modulo/usuarios/docentes" exact>
        <ModuloContainer nome="Lista de docentes" icone={GroupIcon} componente={ModuloListaDocentes}
          condicao={{
            logado: true, naoLogado: false, discentes: true, docentes: true, admins: true
          }} />
      </Route>

      <Route path="/modulo/dados/meu" exact>
        <ModuloContainer nome="Alterar meus dados" icone={SettingsIcon} componente={ModuloAlterarDados}
          sincrono condicao={{
            logado: true, naoLogado: false, discentes: true, docentes: true, admins: true
          }} />
      </Route>

      <Route path="*" exact>
        <ModuloContainer nome="Módulo desconhecido" icone={HelpIcon} componente={Desconhecido} sincrono
          condicao={{
            logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
          }} />
      </Route>
    </Switch>
  )
}

export default Modulos
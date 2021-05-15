import React from 'react'
import {Container} from './styles'
import Row from '../Row/Row'
import Node from '../Node/Node'

import HomeIcon from '@material-ui/icons/Home'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import CalendarIcon from '@material-ui/icons/PermContactCalendar'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const LinhasContainer: React.FC = () => {
  let tabIndex = 5
  return (
    <Container>
      <Row titulo="Início" icone={HomeIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} moduloAssociado="inicio" tabIndex={tabIndex++} />
      <Row titulo="Fazer login" icone={VpnKeyIcon} condicao={{
        logado: false, naoLogado: true, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++} />

      <Node titulo="Atendimentos" icone={CalendarIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++}>
        <Row titulo="Calendário de atendimentos" condicao={{
          logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
        }} moduloAssociado="inicio" tabIndex={tabIndex++} />

        <Row titulo="Minhas salas de atendimento" condicao={{
          logado: true, naoLogado: false, discentes: false, docentes: true, admins: false
        }} moduloAssociado="inicio" tabIndex={tabIndex++} />
        <Row titulo="Meus atendimentos agendados" condicao={{
          logado: true, naoLogado: false, discentes: false, docentes: true, admins: false
        }} moduloAssociado="inicio" tabIndex={tabIndex++} />

        <Row titulo="Criar sala de atendimento" condicao={{
          logado: true, naoLogado: false, discentes: false, docentes: true, admins: false
        }} moduloAssociado="inicio" tabIndex={tabIndex++} />

        <Row titulo="Minhas salas inscritas" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
        }} moduloAssociado="inicio" tabIndex={tabIndex++} />
      </Node>
      <Row titulo="Finalizar sessão" icone={ExitToAppIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++} />
    </Container>
  )
}

export default LinhasContainer
import React, {useContext} from 'react'
import {APIContext} from '../../../../../../hooks/APIProvider'
import {MainContext} from '../../../../Main'
import {Container} from './styles'
import Row from '../Row/Row'
import Node from '../Node/Node'

import HomeIcon from '@material-ui/icons/Home'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import CalendarIcon from '@material-ui/icons/PermContactCalendar'
import SchoolIcon from '@material-ui/icons/School'
import GroupIcon from '@material-ui/icons/Group'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const LinhasContainer: React.FC = () => {
  const {Token} = useContext(APIContext)
  const {setRedirect} = useContext(MainContext)
  let tabIndex = 5
  return (
    <Container>
      <Row titulo="Início" icone={HomeIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} moduloAssociado="inicio" tabIndex={tabIndex++} />
      <Row titulo="Fazer login" icone={VpnKeyIcon} condicao={{
        logado: false, naoLogado: true, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++} onClick={() => {
        setRedirect('/login')
      }}/>
      <Row titulo="Calendário" icone={CalendarIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} moduloAssociado="calendario" tabIndex={tabIndex++} />
      <Node titulo="Atendimentos" icone={SchoolIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++}>
        <Row titulo="Minhas turmas de atendimento" condicao={{
          logado: true, naoLogado: false, discentes: false, docentes: true, admins: false
        }} moduloAssociado="salas/minhas" tabIndex={tabIndex++} />
        <Row titulo="Meus atendimentos agendados" condicao={{
          logado: true, naoLogado: false, discentes: false, docentes: true, admins: false
        }} moduloAssociado="salas/atendimentos/lista" tabIndex={tabIndex++} />

        <Row titulo="Turmas inscritas" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
        }} moduloAssociado="salas/inscritas" tabIndex={tabIndex++} />
        <Row titulo="Atendimentos inscritos" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
        }} moduloAssociado="salas/inscritas" tabIndex={tabIndex++} />
        <Row titulo="Usar código de turma" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
        }} tabIndex={tabIndex++} />
      </Node>
      <Node titulo="Discentes e docentes" icone={GroupIcon} condicao={{
        logado: true, naoLogado: false, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++}>
        <Row titulo="Minha turma" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
        }} moduloAssociado="turmas/minha" tabIndex={tabIndex++} />
        <Row titulo="Lista de discentes" condicao={{
          logado: true, naoLogado: false, discentes: false, docentes: true, admins: true
        }} moduloAssociado="usuarios/discentes" tabIndex={tabIndex++} />
        <Row titulo="Lista de docentes" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: true, admins: true
        }} moduloAssociado="usuarios/docentes" tabIndex={tabIndex++} />
      </Node>
      <Row titulo="Finalizar sessão" icone={ExitToAppIcon} condicao={{
        logado: true, naoLogado: false, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++} onClick={() => {
        Token.remover()
        setRedirect('/login')
      }}/>
    </Container>
  )
}

export default LinhasContainer
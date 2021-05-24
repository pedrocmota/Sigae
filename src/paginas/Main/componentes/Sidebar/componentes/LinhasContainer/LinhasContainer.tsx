import React, {useContext} from 'react'
import {APIContext} from '../../../../../../hooks/APIProvider'
import {PopupContext} from '../../../../../../hooks/PopupProvider'
import {MainContext} from '../../../../Main'
import {Container} from './styles'
import Row from '../Row/Row'
import Node from '../Node/Node'

import HomeIcon from '@material-ui/icons/Home'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CalendarIcon from '@material-ui/icons/PermContactCalendar'
import SchoolIcon from '@material-ui/icons/School'
import GroupIcon from '@material-ui/icons/Group'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const LinhasContainer: React.FC = () => {
  const {Token} = useContext(APIContext)
  const {showPopup} = useContext(PopupContext)
  const {setRedirect} = useContext(MainContext)
  let tabIndex = 1
  return (
    <Container>
      <Row titulo="Início" icone={HomeIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} moduloAssociado="inicio" tabIndex={tabIndex++} />
      <Row titulo="Fazer login" icone={VpnKeyIcon} condicao={{
        logado: false, naoLogado: true, discentes: false, docentes: false, admins: false
      }} tabIndex={tabIndex++} onAction={() => {
        setRedirect('/login')
      }} />
      <Row titulo="Criar uma conta" icone={AddCircleIcon} condicao={{
        logado: false, naoLogado: true, discentes: false, docentes: false, admins: false
      }} tabIndex={tabIndex++} onAction={() => {
        setRedirect('/registrar')
      }} />
      <Row titulo="Calendário" icone={CalendarIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} moduloAssociado="calendario" tabIndex={tabIndex++} />
      <Node titulo="Atendimentos" icone={SchoolIcon} condicao={{
        logado: true, naoLogado: false, discentes: true, docentes: true, admins: false
      }} tabIndex={tabIndex++}>
        <Row titulo="Minhas turmas de atendimento" condicao={{
          logado: true, naoLogado: false, discentes: false, docentes: true, admins: false
        }} moduloAssociado="turmas/minhas" tabIndex={tabIndex++} />
        <Row titulo="Meus atendimentos agendados" condicao={{
          logado: true, naoLogado: false, discentes: false, docentes: true, admins: false
        }} moduloAssociado="turmas/atendimentos/lista" tabIndex={tabIndex++} />

        <Row titulo="Turmas inscritas" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
        }} moduloAssociado="turmas/inscritas" tabIndex={tabIndex++} />
        <Row titulo="Atendimentos inscritos" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: false, admins: false
        }} moduloAssociado="atendimentos/inscritos" tabIndex={tabIndex++} />
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
      <Node titulo="Meu usuário" icone={PersonIcon} condicao={{
        logado: true, naoLogado: false, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++}>
        <Row titulo="Alterar meus dados" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: true, admins: true
        }} moduloAssociado="dados/meu" tabIndex={tabIndex++} />
        <Row titulo="Alterar minha senha" condicao={{
          logado: true, naoLogado: false, discentes: true, docentes: true, admins: true
        }} tabIndex={tabIndex++} />
      </Node>

      <Node titulo="Configurações" icone={SettingsIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++}>
        <Row titulo="Alterar tema" condicao={{
          logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
        }} tabIndex={tabIndex++} onAction={() => {
          showPopup('alterarTema')
        }}/>
        <Row titulo="Sobre o SiGAÊ" condicao={{
          logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
        }} tabIndex={tabIndex++} />
      </Node>
      <Row titulo="Finalizar sessão" icone={ExitToAppIcon} condicao={{
        logado: true, naoLogado: false, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++} onAction={() => {
        Token.remover()
        setRedirect('/login')
      }} />
    </Container>
  )
}

export default LinhasContainer
import React from 'react'
import {Container} from './styles'
import Row from '../Row/Row'
import Node from '../Node/Node'

import HomeIcon from '@material-ui/icons/Home'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import CalendarIcon from '@material-ui/icons/PermContactCalendar'

const LinhasContainer: React.FC = () => {
  let tabIndex = 5
  return (
    <Container>
      <Row titulo="Início" icone={HomeIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} moduloAssociado="inicio" tabIndex={tabIndex++} selecionado={true}/>
      <Row titulo="Fazer login" icone={VpnKeyIcon} condicao={{
        logado: false, naoLogado: true, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++} selecionado={false}/>
      <Node titulo="Atendimentos" icone={CalendarIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} tabIndex={tabIndex++}>
        <Row titulo="Calendário de atendimentos" condicao={{
          logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
        }} moduloAssociado="inicio" tabIndex={tabIndex++} selecionado={false} />
        <Row titulo="Fazer login" condicao={{
          logado: false, naoLogado: true, discentes: true, docentes: true, admins: true
        }} moduloAssociado="inicio" tabIndex={tabIndex++} selecionado={false} />
      </Node>
    </Container>
  )
}

export default LinhasContainer
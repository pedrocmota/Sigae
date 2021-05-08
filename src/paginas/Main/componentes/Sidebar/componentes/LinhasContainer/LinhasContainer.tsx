import React from 'react'
import {Container} from './styles'
import Row from '../Row/Row'
import Node from '../Node/Node'

import HomeIcon from '@material-ui/icons/Home'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import CalendarIcon from '@material-ui/icons/PermContactCalendar'

const LinhasContainer: React.FC = () => {
  return (
    <Container>
      <Row titulo="Início" icone={HomeIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }} moduloAssociado="inicio" />
      <Row titulo="Fazer login" icone={VpnKeyIcon} condicao={{
        logado: false, naoLogado: true, discentes: true, docentes: true, admins: true
      }} moduloAssociado="inicio" />
      <Node titulo="Atendimentos" icone={CalendarIcon} condicao={{
        logado: true, naoLogado: true, discentes: true, docentes: true, admins: true
      }}/>
    </Container>
  )
}

export default LinhasContainer
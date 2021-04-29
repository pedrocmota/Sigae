import React, {useState, memo} from 'react'
import {Container, Header, Arrow, Body} from './styles'
import {IConsoleEntry} from '../../../../types/Console'

const Collapsible: React.FC<IConsoleEntry> = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <Container open={open} tipo={props.tipo} onClick={() => {
      setOpen(!open)
    }}>
      <Header>
        <Arrow open={open}/>
        <b className="horario">{props.horario}</b>
        <div className="titulo">{props.titulo}</div>
      </Header>
      <Body open={open}>
        {props.conteudo}
      </Body>
    </Container>
  )
}

export default memo(Collapsible)
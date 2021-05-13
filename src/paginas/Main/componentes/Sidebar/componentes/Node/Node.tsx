import React, {useState, memo} from 'react'
import {listaModulos} from '../../../../../../modulos/Modulos'
import {Container, Top, Bottom, Arrow} from './styles'

interface IRow extends React.HTMLAttributes<HTMLDivElement> {
  titulo: string,
  icone: any,
  tabIndex: number,
  condicao: {
    logado: boolean,
    naoLogado: boolean,
    discentes: boolean,
    docentes: boolean,
    admins: boolean
  },
  moduloAssociado?: listaModulos
}

const Node: React.FC<IRow> = (props) => {
  const [open, setOpen] = useState(false)
  const Icone = props.icone as React.FC<any>
  return (
    <Container open={open} tabIndex={props.tabIndex} className="node"
      onKeyDown={(e) => {
        if (e.key == 'Enter') setOpen(!open)
      }}>
      <Top open={open} onClick={() => {
        setOpen(!open)
      }}>
        <Icone />
        <p>{props.titulo}</p>
        <Arrow id="arrow" open={open} />
      </Top>
      <Bottom open={open}>
        {props.children}
      </Bottom>
    </Container>
  )
}

export default memo(Node)
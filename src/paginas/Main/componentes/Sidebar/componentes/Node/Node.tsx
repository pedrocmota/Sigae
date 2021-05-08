import React, {useState, memo} from 'react'
import {listaModulos} from '../../../../../../modulos/Modulos'
import {Container, Arrow} from './styles'

interface IRow extends React.HTMLAttributes<HTMLDivElement>{
  titulo: string,
  icone: any,
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
  const Componente = props.icone as React.FC<any>
  return (
    <Container>
      <Componente/>
      <p>{props.titulo}</p>
      <Arrow id="arrow" open={open}/>
      {props.children}
    </Container>
  )
}

export default memo(Node)
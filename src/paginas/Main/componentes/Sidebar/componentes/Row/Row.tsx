import React, {memo} from 'react'
import {listaModulos} from '../../../../../../modulos/Modulos'
import {Container} from './styles'

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

const Row: React.FC<IRow> = (props) => {
  const Componente = props.icone as React.FC<any>
  return (
    <Container>
      <Componente/>
      <p>{props.titulo}</p>
    </Container>
  )
}

export default memo(Row)
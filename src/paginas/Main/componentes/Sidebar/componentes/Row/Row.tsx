import React, {memo} from 'react'
import {listaModulos} from '../../../../../../modulos/Modulos'
import {Container} from './styles'

interface IRow extends React.HTMLAttributes<HTMLDivElement>{
  titulo: string,
  icone?: any,
  tabIndex: number,
  selecionado: boolean,
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
  const Icone = props.icone as React.FC<any> | undefined
  return (
    <Container selecionado={props.selecionado} tabIndex={props.tabIndex} className="row">
      {Icone && (
        <Icone/>
      )}
      <p>{props.titulo}</p>
    </Container>
  )
}

export default memo(Row)
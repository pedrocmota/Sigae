import React from 'react'
import {MaterialUIIcon} from '../../../../types/Misc'
import {Container, Texto} from './styles'

interface ILabel {
  icone: MaterialUIIcon,
  selecionado: boolean,
  marginTop?: number
}

const Label: React.FC<ILabel> = (props) => {
  const Icone = props.icone
  return (
    <Container selecionado={props.selecionado} marginTop={props.marginTop}>
      <Icone />
      <Texto>
        {props.selecionado ? props.children + ' (Alterado)' : props.children}
      </Texto>
    </Container>
  )
}

export default Label
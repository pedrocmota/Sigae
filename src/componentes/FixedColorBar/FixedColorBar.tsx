import React from 'react'
import {Container, Barra} from './styles'

export interface IFixedColorBar {
  style?: React.CSSProperties,
  porcentagem: number,
  height?: string,
  background?: string,
  foreground?: string,
  borderRadius?: number
}

const FixedColorBar: React.FC<IFixedColorBar> = (props) => {
  return (
    <Container {...props}>
      <Barra width={props.porcentagem.toString()} foreground={props.foreground as string}/>
    </Container>
  )
}

export default FixedColorBar
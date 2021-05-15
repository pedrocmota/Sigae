import React from 'react'
import {Container} from './styles'

export interface ICrash {
  titulo: string,
  texto: string
}

const Crash: React.FC<ICrash> = (props) => {
  return (
    <Container>
      <h1>{props.titulo}</h1>
      <div>{props.texto}</div>
    </Container>
  )
}

export default Crash
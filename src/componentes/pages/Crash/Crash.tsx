import React from 'react'
import {Container, GlobalStyle, SubContainer} from './styles'
import Error from '../../../assets/error.png'

export interface ICrash {
  statusCode: string,
  texto: string
}

const Crash: React.FC<ICrash> = (props) => {
  return (
    <Container>
      <GlobalStyle />
      <img src={Error} />
      <h1>Isso é um erro!</h1>
      <SubContainer>
        <span className="subSpan">Ocorreu um erro inesperado na aplicação</span>
        <div>
          <span>
            <b>Código: </b>
            {props.statusCode}
          </span>
          <span>
            {props.texto}
          </span>
        </div>
      </SubContainer>
    </Container>
  )
}

export default Crash
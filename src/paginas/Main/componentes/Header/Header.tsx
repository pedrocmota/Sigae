import React from 'react'
import {Container, Left, Right} from './styles'
import Sigae from '../../../../assets/sigae-alternativo.svg'

const Header: React.FC = () => {
  return (
    <Container>
      <Left>
        <img src={Sigae} width={228}/>
      </Left>
      <Right>
        <h1>Sistema de Gerenciamento de Atendimento ao Estudante</h1>
      </Right>
    </Container>
  )
}

export default Header
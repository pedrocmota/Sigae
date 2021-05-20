import React, {memo} from 'react'
import {Container, Left, Right} from './styles'
import Hamburguer from '../Hamburguer/Hamburguer'
import Sigae from '../../../../assets/sigae-alternativo.svg'

const Header: React.FC = () => {
  return (
    <Container>
      <Left>
        <Hamburguer/>
        <img src={Sigae} width={200}/>
      </Left>
      <Right>
      </Right>
    </Container>
  )
}

export default memo(Header)
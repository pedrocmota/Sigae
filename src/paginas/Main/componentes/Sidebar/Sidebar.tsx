import React, {memo, useContext} from 'react'
import {MainContext} from '../../Main'
import {Container, InfoContainer, RowContainer, Avatar, Nome} from './styles'

import Desconhecido from '../../../../assets/semFoto.png'

const Sidebar: React.FC = () => {
  const {open} = useContext(MainContext)
  return (
    <Container open={open}>
      <InfoContainer>
        <Avatar src={Desconhecido}/>
        <Nome>Pedro Mota</Nome>
      </InfoContainer>
      <RowContainer/>
    </Container>
  )
}

export default memo(Sidebar)
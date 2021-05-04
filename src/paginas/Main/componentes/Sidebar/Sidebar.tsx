import React, {memo, useContext} from 'react'
import {MainContext} from '../../Main'
import {Container} from './styles'

const Sidebar: React.FC = (props) => {
  const {open} = useContext(MainContext)
  return (
    <Container open={open}>
    </Container>
  )
}

export default memo(Sidebar)
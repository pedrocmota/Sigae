import React from 'react'
import Fade from '../../../../../componentes/Fade/Fade'
import {Container} from './styles'
import {ReactComponent as Spinner} from '../../../../../assets/spinner.svg'

interface IModuloLoading {
  show: boolean
}

const ModuloLoading: React.FC<IModuloLoading> = (props) => {
  return (
    <Fade visible={props.show} timer={200} fadeIn>
      <Container>
        <Spinner color={'#434c9c'} />
      </Container>
    </Fade>
  )
}

export default ModuloLoading
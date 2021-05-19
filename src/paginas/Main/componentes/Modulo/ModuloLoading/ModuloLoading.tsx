import React from 'react'
import Fade from '../../../../../componentes/Fade/Fade'
import {Container} from './styles'
import {ReactComponent as Spinner} from '../../../../../assets/spinner.svg'

interface IModuloLoading {
  show: boolean
}

const ModuloLoading: React.FC<IModuloLoading> = (props) => {
  return (
    <Fade visible={props.show}>
      <Container>
        <Spinner />
      </Container>
    </Fade>
  )
}

export default ModuloLoading
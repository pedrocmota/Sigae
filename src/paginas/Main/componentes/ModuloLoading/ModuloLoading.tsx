import React from 'react'
import {Container} from './styles'
import {ReactComponent as Spinner} from '../../../../assets/spinner.svg'

interface IModuloLoading {
  show: boolean
}

const ModuloLoading: React.FC<IModuloLoading> = (props) => {
  return (
    <Container>
      <Spinner/>
    </Container>
  )
}

export default ModuloLoading
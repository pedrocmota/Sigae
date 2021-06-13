import React from 'react'
import Fadeout from '../../../../../componentes/Fadeout/Fadeout'
import {Container} from './styles'
import {ReactComponent as Spinner} from '../../../../../assets/spinner.svg'

interface IModuloLoading {
  show: boolean
}

const ModuloLoading: React.FC<IModuloLoading> = (props) => {
  return (
    <Fadeout visible={props.show} timer={10000}>
      <Container>
        <Spinner color={'#434c9c'} />
      </Container>
    </Fadeout>
  )
}

export default ModuloLoading
import React from 'react'
import Fade from '../Fade/Fade'
import {Container} from './styles'
import {ReactComponent as Sigae} from '../../assets/sigae-loading.svg'

interface ILoading {
  visible: boolean
}

const LoadingPersistent: React.FC<ILoading> = (props) => {
  return (
    <Fade visible={props.visible} timer={500} style={{
      position: 'fixed', zIndex: 6000
    }}>
      <Container>
        <Sigae/>
      </Container>
    </Fade>
  )
}

export default LoadingPersistent
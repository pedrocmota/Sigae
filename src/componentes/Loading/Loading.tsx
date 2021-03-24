import React from 'react'
import Fade from '../Fade/Fade'
import {Container} from './styles'
import {ReactComponent as Sigae} from '../../assets/loading.svg'

interface ILoading {
  visible: boolean
}

const Loading: React.FC<ILoading> = (props) => {
  return (
    <Fade visible={props.visible} timer={500} style={{
      position: 'absolute', zIndex: 99999
    }}>
      <Container>
        <Sigae/>
      </Container>
    </Fade>
  )
}

export default Loading
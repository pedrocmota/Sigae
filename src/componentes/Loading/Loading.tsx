import React, {useState, useEffect} from 'react'
import Fade from '../Fade/Fade'
import {Container} from './styles'
import {ReactComponent as Sigae} from '../../assets/sigae-loading.svg'

interface ILoading {
  timer: number
}

const Loading: React.FC<ILoading> = (props) => {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const counter = setTimeout(() => {
      setVisible(false)
    }, props.timer)
    return () => {
      clearTimeout(counter)
    }
  }, [])
  return (
    <Fade visible={visible} timer={500} style={{
      position: 'fixed', zIndex: 6000
    }}>
      <Container>
        <Sigae />
      </Container>
    </Fade>
  )
}

export default Loading
import React, {useContext, memo} from 'react'
import Fade from '../../../../componentes/Fade/Fade'
import {MainContext} from '../../Main'
import {Container, Image} from './styles'

export interface IImageViewer {
  open: boolean,
  src?: string
}

const ImageViewer: React.FC<IImageViewer> = (props) => {
  const {setImageViewer} = useContext(MainContext)
  return (
    <Fade visible={props.open} timer={250} style={{
      position: 'fixed', zIndex: 5200
    }} onClick={() => {
      setImageViewer({open: false, src: props.src})
      setTimeout(() => {
        setImageViewer({open: false})
      }, 300)
    }}>
      <Container>
        <Image src={props.src} />
      </Container>
    </Fade>
  )
}

export default memo(ImageViewer)
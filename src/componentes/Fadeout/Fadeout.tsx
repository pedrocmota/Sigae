import React, {useRef, useEffect} from 'react'
import {Container} from './styles'

export interface IFadeout extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean,
  timer?: number
}

const Fadeout: React.FC<IFadeout> = ({visible = false, timer = 400, ...props}) => {
  return (
    <Container {...props} visible={visible} timer={timer}>
      {props.children}
    </Container>
  )
}

export default Fadeout
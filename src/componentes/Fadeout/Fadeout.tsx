import React, {useRef, useEffect} from 'react'
import {Container} from './styles'

export interface IFadeout extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean
}

const Fadeout: React.FC<IFadeout> = ({visible = false, ...props}) => {
  return (
    <Container {...props} visible={visible}>
      {props.children}
    </Container>
  )
}

export default Fadeout
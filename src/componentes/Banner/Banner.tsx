import React, {useState, useRef} from 'react'
import Fade from '../Fade/Fade'
import useDidMountEffect from '../../hooks/useeffects/useDidMountEffect'
import {Container, Close} from './styles'
import {Tipos} from './types'

export interface IContainer {
  visible?: boolean,
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>,
  maxheight?: string,
  margintop?: number,
  marginbottom?: number,
  marginleft?: number,
  marginright?: number,
  tipo: Tipos
}

const Banner: React.FC<IContainer> = ({children, visible = true, setVisible, ...props}) => {
  return (
    <Fade visible={visible} timer={200}>
      <Container {...props}>
        <Close {...props} onClick={() => {
          if(typeof setVisible == 'function') {
            setVisible(false)
          }
        }}/>
        {children}
      </Container>
    </Fade>
  )
}

export default Banner
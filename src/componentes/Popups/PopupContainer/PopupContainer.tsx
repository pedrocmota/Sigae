import React, {useState, useContext, memo} from 'react'
import Fade from '../../Fade/Fade'
import PopupBase from '../PopupBase/PopupBase'
import {PopupContext} from '../../../hooks/PopupProvider'
import {Container} from './styles'

interface IPopupContainer {
  visible: boolean
}

const zIndex = 2000

const PopupContainer: React.FC<IPopupContainer> = (props) => {
  const {popups} = useContext(PopupContext)
  return (
    <Fade visible={props.visible} timer={150} style={{
      position: 'fixed', zIndex: zIndex
    }}>
      <Container>
        {popups?.map((item, key) => (
          <PopupBase key={item.id} {...item} zIndex={zIndex + (key + 1)}/>
        ))}
      </Container>
    </Fade>
  )
}

export default memo(PopupContainer)
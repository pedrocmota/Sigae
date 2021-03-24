import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import useDidMountEffect from '../../hooks/useeffects/useDidMountEffect'

interface IFade {
  visible: boolean,
  timer?: number,
  style?: React.CSSProperties | undefined
}

const Fade: React.FC<IFade> = ({children, style, visible = false, timer = 400}) => {
  const container = useRef<HTMLDivElement>()
  useEffect(() => {
    if(!visible) $(container.current as any).hide()
  }, [])
  useDidMountEffect(() => {
    setTimeout(() => {
      $(container.current as any).fadeToggle(timer)
    }, 100)
  }, [visible])
  return (
    <div ref={container as any} style={style}>
      {children}
    </div>
  )
}

export default Fade
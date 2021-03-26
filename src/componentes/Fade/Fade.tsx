import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import useDidMountEffect from '../../hooks/useeffects/useDidMountEffect'

interface IFade {
  visible: boolean,
  timer?: number,
  style?: React.CSSProperties | undefined,
  className?: string
}

const Fade: React.FC<IFade> = ({children, style, className, visible = false, timer = 400}) => {
  const container = useRef<HTMLDivElement>()
  useEffect(() => {
    if(visible == false) $(container.current as any).hide()
  }, [])
  console.log(visible)
  useDidMountEffect(() => {
    setTimeout(() => {
      // console.log('toggle')
      $(container.current as any).fadeToggle(timer)
    }, 100)
  }, [visible])
  return (
    <div ref={container as any} style={style} className={className}>
      {children}
    </div>
  )
}

export default Fade
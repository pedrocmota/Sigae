import React, {useRef, useEffect} from 'react'
import $ from 'jquery'
import useDidMountEffect from '../../hooks/useeffects/useDidMountEffect'

export interface IFade extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean,
  timer?: number
}

const Fade: React.FC<IFade> = ({visible = false, timer = 400, ...props}) => {
  const container = useRef<HTMLDivElement>()
  useEffect(() => {
    if (visible == false) $(container.current as any).hide()
  }, [])
  useDidMountEffect(() => {
    setTimeout(() => {
      $(container.current as any).fadeToggle(timer)
    }, 100)
  }, [visible])
  return (
    <div ref={container as any} {...props}>
      {props.children}
    </div>
  )
}

export default Fade
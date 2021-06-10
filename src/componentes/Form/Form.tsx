import React, {memo, forwardRef} from 'react'
import {Container} from './styles'

interface IFormProps {
  name: string,
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  className?: string,
  children?: React.ReactNode
}

const Form: React.ForwardRefRenderFunction<HTMLFormElement, IFormProps> = (props, ref) => {
  return (
    <Container className={props.className}>
      <iframe name={props.name} src="about:blank"></iframe>
      <form target={props.name} method={props.method} action="about:blank" ref={ref}
        onKeyPress={(e) => {
          if (e.key == 'Enter') e.preventDefault()
        }}>
        {props.children}
      </form>
    </Container>
  )
}

export default memo(forwardRef(Form))
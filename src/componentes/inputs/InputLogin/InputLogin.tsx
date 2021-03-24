import React, {useState, forwardRef} from 'react'
import {Container, InputLoginStyled, Placeholder} from './styles'
import {IInputLogin} from '../InterfacesInput'

const InputLogin: React.ForwardRefRenderFunction<any, IInputLogin> = ({
  children, onFocus, ...props
}, ref) => {
  const [visible, setVisible] = useState(false)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    if (visible) {
      if (valor.length == 0) setVisible(false)
    } else {
      if (valor.length > 0) setVisible(true)
    }
  }
  return (
    <Container {...props}>
      <Placeholder visible={visible} {...props}>
        {props.placeholder}
      </Placeholder>
      <InputLoginStyled spellCheck={false} {...props} onChange={onChange} onFocus={onFocus} ref={ref} />
      {children}
    </Container>
  )
}

export default forwardRef(InputLogin)
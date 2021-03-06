import React, {useState, forwardRef} from 'react'
import {Container, InputLoginStyled, Placeholder} from './styles'
import {IInputLogin} from '../interfaces/InputsInterface'

const InputLogin: React.ForwardRefRenderFunction<any, IInputLogin> = ({
  children, error, margintop, marginbottom, marginleft, marginright, paddingRight, ...props
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
    <Container margintop={margintop} marginbottom={marginbottom}
      marginleft={marginleft} marginright={marginright}>
      <Placeholder visible={visible} error={error}>
        {props.placeholder}
      </Placeholder>
      <InputLoginStyled error={error} spellCheck={false} onChange={onChange}
        paddingRight={paddingRight ? 1 : 0} {...props} ref={ref} />
      {children}
    </Container>
  )
}

export default forwardRef(InputLogin)
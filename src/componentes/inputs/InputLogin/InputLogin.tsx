import React, {useState, forwardRef} from 'react'
import {Container, InputLoginStyled, Placeholder} from './styles'
import {IInputLogin} from '../InterfacesInput'

const InputLogin: React.ForwardRefRenderFunction<any, IInputLogin> = ({
  children, error, margintop, marginbottom, marginleft, marginright, ...props
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
      <InputLoginStyled error={error} spellCheck={false} onChange={onChange} {...props} ref={ref} />
      {children}
    </Container>
  )
}

export default forwardRef(InputLogin)
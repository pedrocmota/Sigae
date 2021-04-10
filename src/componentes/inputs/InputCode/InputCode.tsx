import React, {forwardRef} from 'react'
import {InputCodigoStyled} from './styles'
import {IInput} from '../InterfacesInput'

const CodeInput: React.ForwardRefRenderFunction<any, IInput> = (props, ref) => {
  return (
    <InputCodigoStyled height={'42px'} spellCheck={false} {...props} ref={ref}/>
  )
}

export default forwardRef(CodeInput)
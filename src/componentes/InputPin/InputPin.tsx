import React, {useEffect, useRef} from 'react'
import {ReactCodeInputProps} from 'react-code-input'
import {InputStyled} from './styles'

interface IInputPin extends ReactCodeInputProps {
  onAction?: (v: string) => void
}

const InputPin: React.FC<IInputPin> = ({onAction, ...props}) => {
  const input = useRef<any>(null)
  useEffect(() => {
    const inputs = input.current.textInput as HTMLInputElement[]
    const ultimo = inputs[inputs.length - 1]
    inputs.forEach(el => {
      el.placeholder = '●'
    })
    ultimo.onkeydown = (e) => {
      if (e.key == 'Enter' && typeof onAction == 'function' && ultimo.value != '') {
        onAction(inputs.map(a => a.value).join(''))
      }
    }
  }, [])
  return (
    <InputStyled {...props} ref={input} />
  )
}

export default InputPin
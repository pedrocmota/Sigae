import React, {forwardRef, useRef} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import InputText from '../../../componentes/inputs/InputText/InputText'
import RootRef from '@material-ui/core/RootRef'
import {converter, createPlaceholder} from '../SelectFunctions'
import {Container} from './styles'

interface IBasicSelect {
  placeholder: string,
  options: any,
  multiple?: boolean,
  disabled?: boolean,
  onChange?: (obj: any, event?: React.ChangeEvent<{}>) => void,
  input?: {
    width?: string,
    height?: string,
    margintop?: number,
    marginbottom?: number,
    marginleft?: number,
    marginright?: number
  }
}

export interface IOptions {
  valor: string,
  grupo?: string
}

const BasicSelect: React.ForwardRefRenderFunction<HTMLInputElement, IBasicSelect> = ({
  input, options, onChange, ...props}, ref) => {
  const selecionados = useRef(0)
  return (
    <Autocomplete
      options={converter(options) as IOptions[]}
      noOptionsText="Nada encontrado"
      getOptionLabel={(option: any) => option.valor}
      groupBy={(option: any) => option.grupo}
      getOptionSelected={(option, value) => {
        return option.valor === value.valor
      }}
      onChange={(ev, value) => {
        if (Array.isArray(value)) {
          selecionados.current = value.length
        }
        setTimeout(() => {
          if (onChange != undefined) onChange(value, ev)
        }, 50)
      }}
      classes={{
        paper: 'fixedPopper',
        input: 'input'
      }}
      renderInput={params => (
        <div ref={params.InputProps.ref}>
          <RootRef rootRef={ref != null ? ref : React.useRef()}>
            <InputText {...params.inputProps} autoFocus
              placeholder={createPlaceholder(
                props.placeholder,
                selecionados.current,
                props.multiple
                )} {...input}
              {...(props.disabled ? {value: ''} : {})} />
          </RootRef>
        </div>
      )}
      {...props}
    />
  )
}

export default forwardRef(BasicSelect)
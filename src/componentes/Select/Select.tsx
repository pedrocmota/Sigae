import React, {memo, forwardRef, useRef} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import InputText from '../InputText/InputText'
import RootRef from '@material-ui/core/RootRef'
import {converter, createInput, createPlaceholder} from './SelectFunctions'
import {IOptions, values} from './Types'

interface ISelect {
  placeholder: string,
  options: values,
  defaultValue?: string,
  multiple?: boolean,
  disabled?: boolean,
  onChange?: (obj: any, event?: React.ChangeEvent<{}>) => void,
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>,
  inputStyles?: {
    width?: string,
    height?: string,
    margintop?: number,
    marginbottom?: number,
    marginleft?: number,
    marginright?: number
  },
  input?: React.FC
}

const Select: React.ForwardRefRenderFunction<HTMLInputElement, ISelect> = ({
  inputStyles, input, options, defaultValue, onChange, ...props}, ref) => {
  const selecionados = useRef<number>(
    defaultValue == undefined ? 0 : defaultValue.length
  )
  const Input = createInput(input)
  return (
    <Autocomplete
      options={converter(options) as IOptions[]}
      {...(defaultValue ? {defaultValue: converter([defaultValue])![0]} : {})}
      noOptionsText="Nada encontrado"
      getOptionLabel={(option: any) => option.valor}
      groupBy={(option: any) => option.grupo}
      getOptionSelected={(option, value) => {
        return option.valor === value.valor
      }}
      disableCloseOnSelect={props.multiple == true}
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
            <Input {...params.inputProps} placeholder={createPlaceholder(
              props.placeholder,
              selecionados.current,
              props.multiple
            )} {...inputStyles}
              {...(props.disabled ? {value: ''} : {})} />
          </RootRef>
        </div>
      )}
      {...props}
    />
  )
}

export default memo(forwardRef(Select))
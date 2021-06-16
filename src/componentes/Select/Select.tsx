import React, {memo, forwardRef, useRef} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import RootRef from '@material-ui/core/RootRef'
import {converter, converterDefaultValue, createInput, createPlaceholder} from './SelectFunctions'
import {Container, Arrow} from './styles'
import {IOptions, values} from './Types'
import {IMargin} from '../../types/Misc'

interface ISelect extends IMargin {
  placeholder: string,
  options: values,
  defaultValue?: string | string[],
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
  inputStyles, input, options, defaultValue, margin, onChange, ...props}, ref) => {
  const selecionados = useRef<number>(
    defaultValue == undefined ? 0 : defaultValue.length
  )
  const Input = createInput(input)
  return (
    <Autocomplete
      options={converter(options) as IOptions[]}
      {...(defaultValue ? {
        defaultValue: converterDefaultValue(defaultValue)
      } : {})}
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
          <Container margin={margin}>
            <RootRef rootRef={ref != null ? ref : React.useRef()}>
              <>
                <Input {...params.inputProps} placeholder={createPlaceholder(
                  props.placeholder,
                  selecionados.current,
                  props.multiple
                )} {...inputStyles}
                  {...(props.disabled ? {value: ''} : {})} />
                <Arrow width={28} height={28} />
              </>

            </RootRef>
          </Container>
        </div>
      )}
      {...props}
    />
  )
}

export default memo(forwardRef(Select))
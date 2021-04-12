import React, {forwardRef} from 'react'
import Autocomplete, {AutocompleteProps} from '@material-ui/lab/Autocomplete'
import InputText from '../../../componentes/inputs/InputText/InputText'
import RootRef from '@material-ui/core/RootRef'

interface IBasicSelect {
  placeholder: string,
  options: object,
  onChange?: (event: React.ChangeEvent<{}>, value: object | null) => void,
  input?: {
    width?: string,
    height?: string,
    margintop?: number,
    marginbottom?: number,
    marginleft?: number,
    marginright?: number
  },
  disabled?: boolean
}
const BasicSelect: React.ForwardRefRenderFunction<HTMLInputElement, IBasicSelect> = ({
  input, options, onChange, ...props}, ref) => {
  const defaultRef = React.useRef()
  const values = converter(options)
  return (
    <Autocomplete
      options={values}
      getOptionLabel={(option: any) => option.value}
      noOptionsText="Nada encontrado"
      classes={{
        paper: 'fixedPopper',
        input: 'input'
      }}
      {...props}
      renderInput={params => (
        <div ref={params.InputProps.ref}>
          <RootRef rootRef={ref != null ? ref : defaultRef}>
            <InputText {...params.inputProps} autoFocus
              placeholder={props.placeholder} {...input} />
          </RootRef>
        </div>
      )}
    />
  )
}

export default forwardRef(BasicSelect)

const converter = (obj: object) => {
  if(Array.isArray(obj)) {
    const array = obj as String[]
    const returnArray:object[] = []
    array.forEach(el => {
      returnArray.push({
        value: el
      })
    })
    return returnArray
  }
  return {} as object[]
}
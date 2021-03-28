import styled from 'styled-components'
import GenericInput from '../GenericInput/GenericInput'
import {IInput} from '../InterfacesInput'

const InputText = styled(GenericInput)<IInput>`
  height: ${props => props.height || '35px'};
  border: ${props => props.borderSize || '2px'} solid black;
  border-color: ${props => props.error ? '#e44a4a' : '#6985af'};
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
`

export default InputText
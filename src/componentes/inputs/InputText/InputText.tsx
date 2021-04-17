import styled, {css} from 'styled-components'
import GenericInput from '../GenericInput/GenericInput'
import {IInput} from '../InterfacesInput'

const InputText = styled(GenericInput)<IInput>`
  height: ${props => props.height || '35px'};
  border: ${props => props.borderSize || '2px'} solid black;
  border-color: #6985af;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  ${({error}) => error && css`
    border-color: #e44a4a;
    &:hover {
      border-color: #f36161 !important;
    }
    &:focus {
      border-color: #f36161 !important;
    }
  `}
`

export default InputText
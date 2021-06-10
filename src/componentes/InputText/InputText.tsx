import styled, {css} from 'styled-components'
import GenericInput from '../GenericInput/GenericInput'
import {IInput} from '../interfaces/InputsInterface'

interface IInputText extends IInput {
  paddingRight?: boolean
}

const InputText = styled(GenericInput)<IInputText>`
  height: ${props => props.height || '35px'};
  border: ${props => props.borderSize || '2px'} solid black;
  border-color: #6985af;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  ${({paddingRight}) => paddingRight && css`
    padding-right: 45px;
  `}
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
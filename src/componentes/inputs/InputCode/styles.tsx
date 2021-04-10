import styled from 'styled-components'
import InputText from '../InputText/InputText'
import {IInput} from '../InterfacesInput'

export const InputCodigoStyled = styled(InputText)<IInput>`
  text-align: center;
  font-family: 'courier';
  &::placeholder {
    font-family: 'Arial';
    font-size: 17px;
  }
  &:-webkit-autofill::first-line {
    font-family: 'courier' !important;
    font-size: 18px !important;
  }
`
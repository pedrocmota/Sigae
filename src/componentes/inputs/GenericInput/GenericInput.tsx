import styled, {css} from 'styled-components'
import {IInput} from '../InterfacesInput'

const GenericInput = styled.input<IInput>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '50px'};
  font-size: ${props => props.fontSize || '18px'};
  font-family: Arial;
  background-color: white;
  color: #17161a;
  caret-color: #17161a;
  border: ${props => props.borderSize || '2px'} solid "#98ACC9";
  border-radius: 2px;
  outline: none;
  overflow: hidden;
  ${({margintop}) => margintop && css`
    margin-top: ${margintop}px;
  `}
  ${({marginbottom}) => marginbottom && css`
    margin-bottom: ${marginbottom}px;
  `}
  ${({marginleft}) => marginleft && css`
    margin-left: ${marginleft}px;
  `}
  ${({marginright}) => marginright && css`
    margin-right: ${marginright}px;
  `}
  &:focus {
    border-color: #5B66B9 !important;
  }
  &:-webkit-autofill {
    box-shadow:0 0 0 50px white inset;
    -webkit-box-shadow:0 0 0 50px white inset;
    -webkit-text-fill-color: #17161a;
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px white inset;
    -webkit-box-shadow: 0 0 0 50px white inset;
    -webkit-text-fill-color: #17161a;
  }  
  &:-webkit-autofill::first-line {
    font-family: Arial !important;
    font-size: 18px !important;
  }
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`
export default GenericInput
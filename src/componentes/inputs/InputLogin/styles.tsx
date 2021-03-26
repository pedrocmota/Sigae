import styled, {css} from 'styled-components'
import GenericInput from '../GenericInput/GenericInput'
import {IInput, IInputLoginStyled} from '../InterfacesInput'

export const Container = styled.div<IInputLoginStyled & IInput>`
  position: relative;
  width: 100%;
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
  &:focus-within {
    div {
        color: #827ffe !important;
    }
  }
  input {
    ${(props) => props.error ? 'border-color: crimson' : ''};
  }
  div {
    ${(props) => props.error ? 'color: crimson' : ''};
  }
`

export const InputLoginStyled = styled(GenericInput)<IInputLoginStyled>`
  font-family: "Helvetica Neue", "Helvetica", "Arial";
  font-size: 18px;
  color: #17161a;
  caret-color: #17161a;
  border: 2px solid ${props => props.error ? '#e44a4a' : '#9392b9'};
  border-radius: 3.5px;
  padding-top: 2px;
  padding-left: 38px;
  padding-right: 10px;
  margin: 0px !important;
  &:focus {
    border-color: #827ffe !important;
  }
  &::placeholder {
    color: #9392b9;
  }
  transition: color, border-color 200ms, opacity 250ms;
`

export const Placeholder = styled.div<IInputLoginStyled>`
  position: absolute;
  height: 18px !important;
  align-items: center;
  top: -12px;
  left: 10px;
  padding: 0px 3px 3px 3px;
  background: linear-gradient(0deg, white, #fafafa);
  color: #9392b9;
  transition: color 200ms, opacity 250ms;
  opacity: ${props => props.visible ? 100 : 0};
`
import React, {forwardRef, InputHTMLAttributes} from 'react'
import styled, {css} from 'styled-components'
import MaskedInput from 'react-text-mask'
import {Masks} from '../Mask'
import {IInput} from '../InterfacesInput'

export interface HTMLInputMaskElement extends HTMLInputElement {
  inputElement: HTMLInputElement
}

const GenericInput: React.ForwardRefRenderFunction<any, IInput> = (props, ref) => {
  if (props.mask) {
    const m = Masks[props.mask]
    return (
      <MaskedInput
      ref={ref}
      mask={m}
      render={(ref, p) => (
        <CustumInput {...props} ref={(input) => ref(input as HTMLElement)} {...p} />
      )}
      />
    )
  } else {
    return <CustumInput spellCheck={false} ref={ref} {...props}/>
  }
}

const CustumInput = styled.input<IInput>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '50px'};
  font-size: ${props => props.fontSize || '18px'};
  font-family: Arial;
  background-color: white;
  color: #17161a;
  caret-color: #17161a;
  border: ${props => props.borderSize || '2px'} solid #98ACC9;
  border-radius: 2px;
  outline: none;
  overflow: hidden;
  transition: color, border-color 200ms, opacity 250ms;
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
  &:hover {
    border-color: #7b91b3 !important;
  }
  &:focus {
    border-color: #5B66B9 !important;
  }
  &:disabled {
    background-color: #e4dfdf !important;
    &:-webkit-autofill {
      box-shadow:0 0 0 50px #e4dfdf inset;
      -webkit-box-shadow:0 0 0 50px #e4dfdf inset;
    }
    &:-webkit-autofill:focus {
      box-shadow: 0 0 0 50px #e4dfdf inset;
      -webkit-box-shadow: 0 0 0 50px #e4dfdf inset;
    }
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

export default forwardRef(GenericInput)
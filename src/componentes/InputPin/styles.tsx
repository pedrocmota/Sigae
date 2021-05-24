import styled from 'styled-components'
import Input from 'react-code-input'

export const InputStyled = styled(Input)`
  display: inline-flex !important;
  justify-content: center;
  width: 100%;
  input {
    width: 40px !important;
    height: 40px !important;
    background-color: #f8f9fa;
    border: 1px solid #acacac;
    border-radius: 0.3rem;
    font-size: 16px;
    outline: none;
    margin: 2px;
    text-align: center;
    text-transform: uppercase;
    transition-duration: 250ms;
    transition-property: background, color, border, box-shadow, transform;
    &:focus {
      border-color: #4982d6;
      outline: none;
      transform: scale(1.05);
    }
  }
`
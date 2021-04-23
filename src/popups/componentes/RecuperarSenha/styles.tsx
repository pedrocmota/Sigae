import styled from 'styled-components'
import InputLogin from '../../../componentes/inputs/InputLogin/InputLogin'

export const Container = styled.div`
  padding-top: 15px;
  overflow-y: auto;
`

export const CustumInputLogin = styled(InputLogin)`
  font-size: 16px;
  &:-webkit-autofill::first-line {
    font-family: Arial !important;
    font-size: 16px !important;
  }
`
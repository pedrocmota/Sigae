import styled from 'styled-components'
import InputNumber from '../../../componentes/inputs/InputNumber/InputNumber'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height:100vh;
  background-color: #f1f2f3;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 170px;
  h1 {
    font-size: 22px;
    color: rgb(59, 59, 75);
    text-align: center;
    margin-top: 15px;
  }
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  @media (max-width: 360px) {
    width: 300px;
  }
`

export const StyledInputNumber = styled(InputNumber)`
  @media (max-width: 360px) {
    input {
      width: 33px !important;
      height: 33px !important;
    }
  }
`
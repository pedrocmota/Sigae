import styled from 'styled-components'
import InputText from '../../../../componentes/inputs/InputText/InputText'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
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
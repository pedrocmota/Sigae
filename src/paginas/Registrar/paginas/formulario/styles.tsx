import styled from 'styled-components'
import FormStyled from '../../../../componentes/Form/Form'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  flex: 1;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow: auto;
  .tipo {
    font-size: 26px;
  }
  .nome {
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
    max-width: 100%;
    overflow-y: auto;
    white-space: nowrap;
  }
  .matricula, .campus {
    font-size: 20px;
    margin-top: 4px;
  }
  b {
    font-weight: 500;
  }
`

export const Form = styled(FormStyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 12px;
`

export const Row = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 25px;
`

export const Banner = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border-radius: 5px;
  background-color: #546274;
  color: white;
  .inLine {
    display: flex;
    word-break: break-word;
    span {
      display: flex;
      align-items: center;
      margin-left: 6px;
      font-size: 18px;
    }
  }
  .conteudo {
    margin-left: 5px;
  }
`
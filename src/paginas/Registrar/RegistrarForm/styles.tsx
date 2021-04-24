import styled from 'styled-components'
import FormStyled from '../../../componentes/Form/Form'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  flex: 1;
  @media (max-width: 600px) {
    width: 100%;
  }
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
  @media (max-width: 600px) {
    width: 90%;
    .nome {
      font-size: 20px;
    }
  }
`

export const Form = styled(FormStyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 12px;
  @media (max-width: 600px) {
    width: 95%;
  }
`

export const Row = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 25px;
`

export const InputContainer = styled.div`
  position: relative;
`

interface IAlerta {
  visible: boolean
}

export const PopupSenhaContainer = styled.div`
  @media (max-width: 1220px) {
    .popupSenhaContainer {
      left: 0px;
      top: -180px;
      &::after {
        transform: rotate(135deg);
        right: 0px;
        left: 15px;
        top: auto;
        bottom: -11px;
      }
    }
  }
`

export const Alerta = styled.div<IAlerta>`
  font-size: 17px;
  color: crimson;
  margin-top: 10px;
  padding-left: 5px;
  transition: opacity 200ms;
  opacity: ${props => props.visible ? '100%' : '0%'};
`
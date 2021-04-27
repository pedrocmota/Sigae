import styled, {css} from 'styled-components'
import FormStyled from '../../componentes/Form/Form'

export const Container = styled.div`
  width: 100vw;
  height:100vh;
  background: linear-gradient(rgb(96, 108, 136), rgb(64, 77, 108));
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  width: 460px;
  height: 348px;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  @media (max-width: 488px) {
    width: 96%;
  }
  h1 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #3f4050;
    max-width: 100%;
    word-break: break-all;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  b {
    font-size: 18px;
    max-width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  span {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
  }
`

export const Form = styled(FormStyled)`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  position: relative;
`

export const PopupSenhaContainer = styled.div`
  position: relative;
  top: -112px !important;
  @media (max-width: 1112px) {
    .popupSenhaContainer {
      left: 0px;
      top: -185px !important;
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

interface IAlerta {
  visible: boolean
}

export const Alerta = styled.div<IAlerta>`
  font-size: 17px;
  color: crimson;
  margin-top: 10px;
  padding-left: 5px;
  transition: opacity 200ms;
  ${({visible}) => !visible && css`
    cursor: none;
  `}
  opacity: ${props => props.visible ? '100%' : '0%'};
`
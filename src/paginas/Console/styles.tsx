import styled, {css} from 'styled-components'
import DialogStyled from '@material-ui/core/Dialog'

export const Dialog = styled(DialogStyled)`
  height: 600px !important;
  top: auto !important;
  bottom: 0px !important;
  z-index: 10000 !important;
  .appBar {
    position: relative;
    background-color: #485572;
    color: white;
    .toolbar {
      h2 {
        margin-bottom: 3px;
      }
      .fechar {
        margin-right: 20px;
      }
    }
  }
  @media (max-height: 860px) {
    height: 100% !important;
  }
`

export const ConsoleBar = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 82px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .consoleBar {
    display: inline-flex;
    align-items: center;
    height: 100%;
  }
  .left {
    padding-left: 15px;
    h2 {
      padding-left: 15px;
      font-size: 22px;
      color: #4e5f78;
    }
  }
  .right {
    .limpar {
      margin-right: 15px;
      span > svg {
        color: #4e5f78;
      }
    }
    .fechar {
      margin-right: 15px;
      span > svg {
        color: #4e5f78;
      }
    }
  }
  @media (max-width: 372px) {
    .left > h2 {
      font-size: 20px;
      text-align: center;
      padding-left: 0px;
    }
  }
`

interface IContainer {
  vazio: boolean
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  ${({vazio}) => vazio && css`
    justify-content: center;
  `}
`

export const TextoVazio = styled.div`
  font-size: 25px;
  color: #4e5f78;
  text-align: center;
  @media (max-width: 372px) {
    font-size: 22px;
  }
`
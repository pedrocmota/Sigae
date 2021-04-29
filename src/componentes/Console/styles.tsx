import styled from 'styled-components'
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
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 15px;
`
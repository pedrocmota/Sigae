import styled from 'styled-components'
import Fade from '../../componentes/Fade/Fade'

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
  @media (max-height: 800px) {
    input {
      height: 45px !important;
    }
    .passwordIcon {
      top: 22px;
    }
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
`

export const PageContainer = styled(Fade)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
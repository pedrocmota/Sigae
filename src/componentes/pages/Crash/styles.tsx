import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 200ms, color 200ms;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    width: 100vw;
  }

  #root {
    width: 100vw;
    height:100vh;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #FAFAFA;
  h1 {
    color: #332e2e;
    margin-top: 15px;
  }
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .subSpan {
    color: #332e2e;
    font-size: 17px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    span {
      font-size: 20px;
      margin-top: 10px;
      text-align: center;
      max-width: 400px;
    }
  }
`
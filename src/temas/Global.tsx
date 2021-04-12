import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 200ms, color 200ms;
  }

  @font-face {
    font-family: 'Fira Code';
    src: url('../assets/fontes/FiraCode-Regular.woff2') format('woff2'),
      url("../assets/fontes/FiraCode-Regular.woff2") format("woff");
    font-weight: 400;
    font-style: normal;
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

  ::selection {
    color: aliceblue;
    background: rgb(136, 164, 230);
  }

  ::-moz-selection {
    color: aliceblue;
    background: rgb(136, 164, 230);
  }

  #root {
    width: 100vw;
    height:100vh;
  }

  .MuiButtonBase-root {
    text-transform: none !important;
  }

  .react-toast-notifications__container {
    & > div {
      height: 60px !important;
      margin-bottom: 10px;
      .react-toast-notifications__toast {
        height: 100%;
        margin-bottom: 0px !important;
        .react-toast-notifications__toast__icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .react-toast-notifications__toast__content {
          display: flex;
          align-items: center;
          font-size: 18px;
        }
      }
    }
  }

  .popup_opacity {
    opacity: 0.05
  }

  .fixedPopper {
    ul {
      .MuiAutocomplete-option[data-focus="true"] {
        background-color: rgba(0, 0, 0, 0.055);
      }
      .MuiAutocomplete-option[aria-selected="true"] {
        background-color: #5C67BC !important;
        color: white !important;
      }
    }
  }
`

export default GlobalStyle
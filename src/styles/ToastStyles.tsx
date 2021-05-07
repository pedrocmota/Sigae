import {createGlobalStyle} from 'styled-components'

const ToastStyles = createGlobalStyle`
  .react-toast-notifications__container {
    z-index: 2000;
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
`

export default ToastStyles
import {createGlobalStyle} from 'styled-components'

const PopupStyles = createGlobalStyle`
  .swal2-popup {
    padding-left: 0px !important;
    padding-right: 0px !important;
    background-color: #fafafa !important;
    padding-top: 10px;
    padding-bottom: 5px;
  }

  .swal2-actions {
    margin-top: 0px;
  }

  .swal2-confirm, .swal2-deny {
    min-width: 100px !important;
  }

  .swal2-content {
    flex: 1 !important;
    max-height: calc(100% - 60px);
    padding-left: 20px;
    padding-right: 20px;
    .swal2-html-container {
      height: 100%;
      .styledContainer {
        height: 100%;
        .componentContainer {
          height: calc(100% - 100px);
          overflow-y: auto;
        }
      }
    }
  }

  .swal2-content-height-100 {
    .swal2-content {
      max-height: none !important;
    }
  }
`

export default PopupStyles
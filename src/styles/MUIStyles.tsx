import {createGlobalStyle} from 'styled-components'

const MUIStyles = createGlobalStyle`
  .MuiButtonBase-root {
    text-transform: none !important;
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

  .MuiTooltip-popper {
    z-index: 10500 !important;
  }

  .swal2-container {
    z-index: 3060 !important;
  }
`

export default MUIStyles
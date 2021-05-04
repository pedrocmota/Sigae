import styled from 'styled-components'

export const Container = styled.a`
  margin-top: 8px;
  position: absolute;
  left: 5px;
  .hamburger-inner,
  .hamburger-inner:before,
  .hamburger-inner:after {
    background-color: #c1c1c4 !important;
  }
  @media (min-width: 944px) {
    display: none;
  }
`
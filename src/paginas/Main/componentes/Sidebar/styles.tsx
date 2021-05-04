import styled, {css} from 'styled-components'

interface IContainer {
  open: boolean
}

export const Container = styled.aside<IContainer>`
  position: fixed;
  width: 300px;
  top: 80px;
  left: 0;
  bottom: 100px;
  height: 100vh;
  background-color: #3b3b4b;
  overflow-y: hidden;
  z-index: 7000;
  transition: width 300ms !important;
  box-shadow: 0 2px 2px 0
   rgba(0, 0, 0, 0.14), 0 1px 5px 0 
   rgba(0, 0, 0, 0.12), 0 3px 1px -2px 
   rgba(0, 0, 0, 0.20);
   ${({open}) => !open && css`
     width: 0px;
  `}
  ${({open}) => open && css`
    @media (max-width: 478px) {
      width: 100% !important;
      transition: width 200ms !important;
    }
  `}
`

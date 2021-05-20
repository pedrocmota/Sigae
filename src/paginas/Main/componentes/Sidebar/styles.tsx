import styled, {css} from 'styled-components'

interface IContainer {
  open: boolean
}

export const Container = styled.aside<IContainer>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  top: 65px;
  left: 0;
  bottom: 100px;
  height: calc(100% - 65px);
  background-color: #3b3b4b;
  overflow-y: hidden;
  z-index: 5000;
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background-color: #454555;
`

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  cursor: zoom-in;
`

export const Nome = styled.span`
  font-family: Comfortaa;
  text-align: center;
  font-size: 25px;
  color: #f5f5f5;
  margin-top: 18px;
  white-space: nowrap;
`
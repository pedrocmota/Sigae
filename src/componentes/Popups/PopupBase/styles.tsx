import styled, {css} from 'styled-components'
import Fade from '../../Fade/Fade'

interface IPopupContainer {
  id?: string,
  zIndex: number,
  largura?: string,
  altura?: string
}

export const PopupContainer = styled.div<IPopupContainer>`
  position: fixed;
  display: none;
  min-width: 100px;
  min-height: 100px;
  z-index: ${props => props.zIndex};
  transition: opacity 200ms;
  ${({largura}) => largura && css`
    width: ${largura};
    @media (max-width: calc(${largura} + 20px)) {
      width: 95%;
    } 
  `}
  ${({altura}) => altura && css`
    height: ${altura};
    @media (max-height: calc(${altura} + 20px)) {
      height: 95%;
    } 
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.1);
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  overflow: hidden;
  .titulo-container {
    flex: 1;
    overflow-y: auto;
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    .titulo {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      color: #3f4050;
      max-width: 100%;
      word-break: break-all;
    }
  }
`

export const Main = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  overflow: hidden;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
  /* div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  } */
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding-bottom: 10px;
`
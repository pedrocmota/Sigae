import styled, {css} from 'styled-components'
import {IPopupBase} from './PopupBase'

export const Container = styled.div<IPopupBase>`
  ${({hideHeader}) => hideHeader && css`
    .componentContainer {
      height: 100% !important;
    }
  `}
`

export const Header = styled.div`
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
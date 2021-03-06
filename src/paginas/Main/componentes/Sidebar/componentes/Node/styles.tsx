import styled, {css} from 'styled-components'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

interface IOpen {
  open: boolean
}

export const Container = styled.div<IOpen>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #43435a;
  }
  ${({open}) => open && css`
    color: #7f94c5;
    background-color: #32323d;
  `}
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 1px 1px #5c67bc;
  }
  svg {
    font-size: 24px;
    color: #ffffff;
  }
  p {
    font-size: 18px;
    color: #ffffff;
    padding-left: 10px;
    white-space: nowrap;
  }
`

export const Top = styled.div<IOpen>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 10px;
  &:hover {
    > * {
      color: #7f94c5;
    }
  }
  ${({open}) => open && css`
    > * {
      color: #7f94c5 !important;
    }
  `}
`

export const Bottom = styled.div<IOpen>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
  ${({open}) => !open && css`
    display: none;
  `}
  .row {
    padding-left: 0px;
    p {
      padding-left: 35px;
      font-size: 15px;
      white-space: nowrap;
    }
    &:hover {
      background-color: inherit !important;
    }
  }
`

export const Arrow = styled(ArrowRightIcon) <IOpen>`
  position: absolute;
  right: 10px;
  width: 38px !important;
  height: 38px !important;
  transition: transform 150ms !important;
  ${({open}) => open && css`
    transform: rotateZ(90deg);
  `}
`
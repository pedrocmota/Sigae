import styled, {css} from 'styled-components'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #3f3f52;
  }
  svg {
    font-size: 24px;
    color: #ffffff;
  }
  p {
    font-size: 18px;
    color: #ffffff;
    padding-left: 10px;
  }
`

interface IArrow {
  open: boolean
}

export const Arrow = styled(ArrowRightIcon)<IArrow>`
  position: absolute;
  right: 10px;
  width: 38px !important;
  height: 38px !important;
  ${({open}) => open && css`
    
 `}
`
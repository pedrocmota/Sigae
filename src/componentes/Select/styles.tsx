import styled, {css} from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import {IMargin} from '../../types/Misc'

export const Container = styled.div<IMargin>`
  position: relative;
  display: flex;
  align-items: center;
  ${({margin}) => margin && css`
    ${margin.top && css `margin-top: ${margin.top}px;`};
    ${margin.left && css `margin-left: ${margin.left}px;`};
    ${margin.right && css `margin-right: ${margin.right}px;`};
    ${margin.bottom && css `margin-bottom: ${margin.bottom}px;`};
 `};
 &:hover {
   svg {
    color: #46628b;
   }
 }
`

export const Arrow = styled(ArrowDropDownIcon)`
  position: absolute;
  right: 10px;
  color: #252424;
  transition: color 200ms;
`
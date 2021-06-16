import styled, {css} from 'styled-components'
import {IFadeout} from './Fadeout'

export const Container = styled.div<IFadeout>`
  ${({visible}) => !visible && css`
    display: none;
 `}
`
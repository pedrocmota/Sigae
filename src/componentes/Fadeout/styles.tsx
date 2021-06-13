import styled from 'styled-components'
import {IFadeout} from './Fadeout'

export const Container = styled.div<IFadeout>`
  opacity: ${props => props.visible ? 1 : 0};
`
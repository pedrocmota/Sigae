import styled from 'styled-components'
import {IFixedColorBar} from './FixedColorBar'

export const Container = styled.div<IFixedColorBar>`
  width: 100%;
  height: ${props => props.height || '5px'};
  background-color: ${props => props.background || '#acece6'};
  border-radius: ${props => props.borderRadius || '2'}px;
`

interface IBarra {
  width: string,
  foreground: string
}

export const Barra = styled.div<IBarra>`
  width: ${props => props.width || '0'}%;
  height: 100%;
  background-color: ${props => props.foreground || '#26a69a'};
  transition: width 200ms
`
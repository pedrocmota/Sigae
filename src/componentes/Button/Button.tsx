import React, {memo, forwardRef} from 'react'
import styled, {css} from 'styled-components'
import MaterialUIButton, {ButtonProps} from '@material-ui/core/Button'
import {ITipos, ITipo, tipos} from './types'

interface IButton extends ButtonProps {
  cor: tipos,
  width?: string,
  height?: string,
  margin?: {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number
  }
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, IButton> = (props, ref) => {
  const colors:ITipos = {
    generic: {
      background: '#5b7192',
      foreground: '#ffffff',
      disabled: '#a3a9b3',
    },
    alternative: {
      background: '#26a69a',
      foreground: '#ffffff',
      disabled: '#a3a9b3',
    },
    success: {
      background: '#50aa5d',
      foreground: '#fffffff',
      disabled: '#c9cdd4',
    },
    error: {
      background: '#d1425d',
      foreground: '#fffffff',
      disabled: '#c9cdd4',
    },
  }
  const cor = colors[props.cor]
  return (
    <Styled ref={ref} {...props} cor={cor}>
      {props.children}
    </Styled>
  )
}

type IStyled = Omit<IButton, 'cor'> & {
  cor: ITipo
}

const Styled = styled(MaterialUIButton)<IStyled>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '36px'};
  background-color: ${props => props.cor.background} !important;
  color: ${props => props.cor.foreground} !important;
  font-size: 16px !important;
  &:hover {
    background-color: ${props => props.cor.background};
  }
  &:disabled {
    background-color: ${props => props.cor.disabled} !important;
  }
  ${({margin}) => margin?.top && css`
    margin-top: ${margin.top}px !important;
  `}
  ${({margin}) => margin?.bottom && css`
    margin-bottom: ${margin.bottom}px !important;
  `}
  ${({margin}) => margin?.left && css`
    margin-left: ${margin.left}px !important;
  `}
  ${({margin}) => margin?.right && css`
    margin-right: ${margin.right}px !important;
  `}
`

export default memo(forwardRef(Button))
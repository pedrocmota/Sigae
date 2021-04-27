import styled, {css} from 'styled-components'
import MaterialUIButton, {ButtonProps} from '@material-ui/core/Button'
import {ITipos} from './types'

const colors:ITipos = {
  generic: {
    background: '#5b7192',
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

export interface IButton extends ButtonProps  {
  width?: string,
  height?: string,
  margintop?: number,
  marginbottom?: number,
  marginleft?: number,
  marginright?: number,
  tipo: 'generic' | 'success' | 'error'
}

export const Button = styled(MaterialUIButton)<IButton>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '36px'};
  background-color: ${props => colors[props.tipo].background} !important;
  color: ${props => colors[props.tipo].foreground} !important;
  font-size: 16px !important;
  &:hover {
    background-color: ${props => colors[props.tipo].background};
  }
  &:disabled {
    background-color: ${props => colors[props.tipo].disabled} !important;
  }
  ${({margintop}) => margintop && css`
    margin-top: ${margintop}px !important;
  `}
  ${({marginbottom}) => marginbottom && css`
    margin-bottom: ${marginbottom}px !important;
  `}
  ${({marginleft}) => marginleft && css`
    margin-left: ${marginleft}px !important;
  `}
  ${({marginright}) => marginright && css`
    margin-right: ${marginright}px !important;
  `}
`

export default Button
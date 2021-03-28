import styled, {css} from 'styled-components'
import {IContainer} from './Banner'
import {ITipos} from './types'
import CloseIcon from '@material-ui/icons/Close'

const cores: ITipos = {
  generic: {
    background: '#cce5ff',
    foreground: '#004085',
  },
  success: {
    background: '#d4edda',
    foreground: '#155724',
  },
  warning: {
    background: '#fff3cd',
    foreground: '#856404',
  },
  error: {
    background: '#f8d7da',
    foreground: '#f5c6cb',
  }
}

export const Container = styled.div<IContainer>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: normal;
  padding: 20px;
  padding-right: 30px;
  font-size: 17px;
  border-radius: 5px;
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
  ${({maxheight}) => maxheight && css`
    max-height: ${maxheight};
  `}
  background-color: ${props => cores[props.tipo].background};
  color: ${props => cores[props.tipo].foreground};
`

export const Close = styled(CloseIcon)<IContainer>`
  position: absolute;
  width: 20px !important;
  height: 20px !important;
  color: white;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${props => cores[props.tipo].foreground};
`
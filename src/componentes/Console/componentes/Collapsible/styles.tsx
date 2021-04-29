import styled, {css} from 'styled-components'
import {ArrowRight} from '@material-ui/icons'
import {tipo} from '../../../../types/Console'

interface IContainer {
  open: boolean,
  tipo: tipo
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
  cursor: pointer;
  ${({open}) => open && css`
    background-color: #fff1e7;
  `}
  .horario, .titulo {
    ${({tipo}) => tipo == 'ERROR' && css`
      color: #e71640;
    `}
    ${({tipo}) => tipo == 'WARNING' && css`
      color: #f19b2a;
    `}
  }
`

export const Header = styled.div`
  display: inline-flex;
  .horario {
    font-size: 19px;
    padding-right: 15px;
  }
  .titulo {
    font-size: 19px;
  }
`

type IOpen = Omit<IContainer, 'tipo'>

export const Arrow = styled(ArrowRight) <IOpen>`
  color: #2c3749;
  ${({open}) => open && css`
    transform: rotateZ(90deg) !important;
  `}
`

export const Body = styled.div<IOpen>`
  width: 100%;
  height: 0px;
  font-size: 18px;
  white-space: pre-line;
  overflow: hidden;
  padding-left: 25px;
  margin-bottom: 5px;
  transition: height 200ms;
  ${({open}) => open && css`
    height: auto;
  `}
`
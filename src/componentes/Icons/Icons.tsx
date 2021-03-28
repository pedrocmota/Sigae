import styled from 'styled-components'
import ErrorIcon from '@material-ui/icons/Error'

interface IInputErrorIcon {
  visible: number
}

export const InputErrorIcon = styled(ErrorIcon)<IInputErrorIcon>`
  position: absolute;
  width: 30px !important;
  height: 100% !important;
  left: 6px;
  bottom: 1px;
  color: crimson;
  opacity: ${props => props.visible};
  transition: opacity 200ms !important;
`
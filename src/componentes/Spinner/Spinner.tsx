import styled, {css} from 'styled-components'
import {ReactComponent as SpinnerSVG} from '../../assets/spinner.svg'

interface ISpinner {
  size?: string,
  color?: string
}

const Spinner = styled(SpinnerSVG)<ISpinner>`
  width: ${props => props.size || '30px'};
  height: ${props => props.size || '30px'};
  color: ${props => props.color || '#ffffff'};
`

export default Spinner
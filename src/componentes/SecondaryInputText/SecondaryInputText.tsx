import styled, {css} from 'styled-components'
import InputText from '../InputText/InputText'

const SecondaryInputText = styled(InputText)`
  border: 1px solid #ececec;
  ${({error}) => error && css`
    border: 1px solid #f36161;
 `}
 &:disabled {
   border: 1px solid #d1d1d1;
   &:hover {
      border: 1px solid #c0c0c0 !important;
   }
 }
`

export default SecondaryInputText
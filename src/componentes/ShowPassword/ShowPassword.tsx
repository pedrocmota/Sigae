import React from 'react'
import styled from 'styled-components'
import VisibilityIcon from '@material-ui/icons/Visibility'

interface IShowPassword {
  selecionado: boolean,
  onClick: () => void,
  top?: number,
  right?: number
}

const ShowPassword: React.FC<IShowPassword> = ({right, selecionado, onClick, top, ...rest}) => {
  return (
    <Container right={right} top={top} className="passwordIcon">
      <ShowPasswordIcon selecionado={selecionado ? 1 : 0} {...rest} onClick={() => {
        if(typeof onClick == 'function') onClick()
      }}/>
    </Container>
  )
}

const Container = styled.div<Omit<IShowPassword, 'selecionado' | 'onClick'>>`
  position: absolute;
  display: flex;
  align-items: center;
  top: ${props => props.top || '5'}px;
  right: ${props => props.right || '15'}px;
`

interface IShowPasswordIcon {
  selecionado: number
}

export const ShowPasswordIcon = styled(VisibilityIcon)<IShowPasswordIcon>`
  color: ${props => props.selecionado == 1 ? '#817ffe' : '#909294'};
  cursor: pointer;
`

export default ShowPassword
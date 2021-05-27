import React from 'react'
import {CardActionArea} from '@material-ui/core'
import {MaterialUIIcon} from '../../types/Misc'
import {Container, Top, Bottom, Selecionado} from './styles'

interface ICheckDiv {
  titulo: string,
  icone: MaterialUIIcon,
  select: boolean,
  onSelect: () => void
}

const CheckDiv: React.FC<ICheckDiv> = (props) => {
  const Icone = props.icone
  return (
    <CardActionArea style={{
      marginTop: '4px', marginBottom: '4px'
    }} onClick={props.onSelect}>
      <Container selecionado={props.select}>
        <Top>
          <Icone />
          {props.titulo}
          {props.select && (
            <Selecionado>
              (Selecionado)
            </Selecionado>
          )}
        </Top>
        <Bottom>
          {props.children}
        </Bottom>
      </Container>
    </CardActionArea>
  )
}

export default CheckDiv
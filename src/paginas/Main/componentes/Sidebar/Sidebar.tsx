import React, {memo, useContext} from 'react'
import {MainContext} from '../../Main'
import LinhasContainer from './componentes/LinhasContainer/LinhasContainer'
import {Container, InfoContainer, Avatar, Nome} from './styles'
import Desconhecido from '../../../../assets/semFoto.png'

interface ISidebar {
  render: boolean
}

const Sidebar: React.FC<ISidebar> = (props) => {
  const {dados, open} = useContext(MainContext)
  return (
    <Container open={open}>
      <InfoContainer>
        <Avatar src={Desconhecido}/>
        <Nome>
          {dados?.nomePreferencial && (
            <>{dados.nomePreferencial}</>
          )}
          {dados?.nomePreferencial == undefined && (
            <>Visitante</>
          )}
        </Nome>
      </InfoContainer>
      {props.render && (
        <LinhasContainer/>
      )}
    </Container>
  )
}

export default memo(Sidebar)
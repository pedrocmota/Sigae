import React, {memo, useContext} from 'react'
import {MainContext} from '../../Main'
import Linhas from './Linhas'
import {APIContext} from '../../../../hooks/APIProvider'
import {Container, InfoContainer, Avatar, Nome, LinhasContainer} from './styles'

interface ISidebar {
  render: boolean
}

const Sidebar: React.FC<ISidebar> = (props) => {
  const {dados, openSidebar, setImageViewer} = useContext(MainContext)
  const {env} = useContext(APIContext)
  return (
    <Container open={openSidebar}>
      <InfoContainer>
        <Avatar src={`${env.apiAdress}/avatar/${dados?.id}`} onClick={() => {
          setImageViewer({open: true, src: `${env.apiAdress}/avatar/${dados?.id}`})
        }}/>
        <Nome>
          {dados?.nomePreferencial && (
            dados.nomePreferencial
          )}
          {dados?.nomePreferencial == undefined && (
            <>Visitante</>
          )}
        </Nome>
      </InfoContainer>
      {props.render && (
        <LinhasContainer>
          <Linhas/>
        </LinhasContainer>
      )}
    </Container>
  )
}

export default memo(Sidebar)
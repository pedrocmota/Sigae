import React, {createContext, memo, useState, useRef} from 'react'
import {Route, Redirect} from 'react-router-dom'
import ModuloLoading from '../ModuloLoading/ModuloLoading'
import Toolip from '../../../../componentes/Toolip/Toolip'
import {Container, SubContainer, Header, Body, Title} from './styles'

import HomeIcon from '@material-ui/icons/Home'

interface IModuloContext {
  primeiroModulo: boolean,
  setPrimeiroModulo: React.Dispatch<React.SetStateAction<boolean>>
}

interface IModuloInfo {
  nome: string,
  icone: any
}

export const ModuloContext = createContext<IModuloContext>({} as IModuloContext)

export const ModuloProvider: React.FC = memo(() => {
  const [primeiroModulo, setPrimeiroModulo] = useState(true)
  const [loading, setLoading] = useState(true)
  const [moduloInfo, setModuloInfo] = useState<IModuloInfo>()
  return (
    <ModuloContext.Provider value={{
      primeiroModulo, setPrimeiroModulo
    }}>
      <Container>
        <SubContainer>
          <ModuloLoading show={loading} />
          <Header className="moduloHeader">
            <Toolip title="Início">
              <Title>
                {moduloInfo?.icone && (
                  {}
                )}
                <HomeIcon className="icon" />
                <div className="titulo">Início</div>
              </Title>
            </Toolip>
          </Header>
          <Body>
            {/* <Route path="/modulo" exact>
            <Redirect to="/"/>
          </Route>
          <Route path="/" exact>
            <div>inicio</div>
          </Route>
          <Route path="/modulo/calendario" exact>
            <div>calendario</div>
          </Route> */}
          </Body>
        </SubContainer>
      </Container>
    </ModuloContext.Provider>
  )
})
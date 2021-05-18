import React, {createContext, memo, useState, useRef} from 'react'
import {Route, Redirect} from 'react-router-dom'
import ModuloContainer from '../ModuloContainer/ModuloContainer'
import ModuloLoading from '../ModuloLoading/ModuloLoading'
import Toolip from '../../../../componentes/Toolip/Toolip'
import {Container, SubContainer, Header, Body, Title} from './styles'

import HomeIcon from '@material-ui/icons/Home'
import ModuloInicio from '../../../../modulos/inicio/Inicio'
import ModuloCalendario from '../../../../modulos/calendario/Calendario'

import Atendimentos from '../../../../modulos/atendimentos/Atendimentos'
import Atendimento from '../../../../modulos/atendimento/Atendimento'

interface IModuloContext {
  primeiroModulo: boolean,
  setPrimeiroModulo: React.Dispatch<React.SetStateAction<boolean>>,
  moduloInfo: IModuloInfo | undefined,
  setModuloInfo: React.Dispatch<React.SetStateAction<IModuloInfo | undefined>>
}

export interface IModuloInfo {
  nome: string,
  icone: any,
  componente: any
}

export const ModuloContext = createContext<IModuloContext>({} as IModuloContext)

export const ModuloProvider: React.FC = memo(() => {
  const [primeiroModulo, setPrimeiroModulo] = useState(true)
  const [loading, setLoading] = useState(false)
  const [moduloInfo, setModuloInfo] = useState<IModuloInfo>()
  const Componente = moduloInfo?.icone as React.FC<any> | undefined
  return (
    <ModuloContext.Provider value={{
      primeiroModulo, setPrimeiroModulo,
      moduloInfo, setModuloInfo
    }}>
      <Container>
        <SubContainer>
          <ModuloLoading show={loading} />
          <Header className="moduloHeader">
            {moduloInfo != undefined && (
              <Toolip title={moduloInfo?.nome || ''}>
                <Title>
                  {Componente && (
                    <Componente className="icon" />
                  )}
                  <div className="titulo">{moduloInfo?.nome}</div>
                </Title>
              </Toolip>
            )}
          </Header>
          <Body>
            <Route path="/modulo" exact>
              <Redirect to="/" />
            </Route>
            <Route path="/" exact>
              <ModuloContainer nome="Início" icone={HomeIcon} componente={ModuloInicio} />
            </Route>
            <Route path="/modulo/calendario" exact>
              <ModuloContainer nome="Calendário" icone={HomeIcon} componente={ModuloCalendario} />
            </Route>

            <Route path="/modulo/atendimentos" exact>
              <ModuloContainer nome="Atendimentos" icone={HomeIcon} componente={Atendimentos} />
            </Route>
            <Route path="/modulo/atendimentos/:id" exact>
              <ModuloContainer nome="Atendimento específico" icone={HomeIcon} componente={Atendimento} />
            </Route>
          </Body>
        </SubContainer>
      </Container>
    </ModuloContext.Provider>
  )
})
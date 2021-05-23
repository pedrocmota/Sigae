import React, {createContext, useContext, useState, memo} from 'react'
import Modulos from '../Modulos'
import ModuloLoading from '../ModuloLoading/ModuloLoading'
import Toolip from '../../../../../componentes/Toolip/Toolip'
import {MainContext} from '../../../Main'
import {MaterialUIIcon} from '../../../../../types/Misc'
import {Container, SubContainer, Header, Body, Title} from './styles'

interface IModuloContext {
  liberar: () => void
}

export interface IModuloInfo {
  nome: string,
  icone: MaterialUIIcon,
  componente: React.FC
}

export const ModuloContext = createContext<IModuloContext>({} as IModuloContext)

export const ModuloProvider: React.FC = memo(() => {
  const {loadings, setLoadings, moduloHeader} = useContext(MainContext)
  const Icone = moduloHeader?.icone as React.FC<any> | undefined
  const liberar = () => {
    setLoadings({
      loadingPagina: false,
      loadingModulo: false,
    })
  }
  return (
    <ModuloContext.Provider value={{
      liberar
    }}>
      <Container>
        <SubContainer>
          <ModuloLoading show={loadings.loadingModulo} />
          {moduloHeader != undefined && loadings.loadingModulo == false && (
            <Header className="moduloHeader">
              <Toolip title={moduloHeader?.nome || ''}>
                <Title>
                  {Icone && (
                    <Icone className="icon" />
                  )}
                  <div className="titulo">{moduloHeader?.nome}</div>
                </Title>
              </Toolip>
            </Header>
          )}
          <Body>
            <Modulos />
          </Body>
        </SubContainer>
      </Container>
    </ModuloContext.Provider>
  )
})
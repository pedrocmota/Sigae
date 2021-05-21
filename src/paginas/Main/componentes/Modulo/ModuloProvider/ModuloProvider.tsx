import React, {createContext, useContext, useState, memo} from 'react'
import Modulos from '../Modulos'
import ModuloLoading from '../ModuloLoading/ModuloLoading'
import Toolip from '../../../../../componentes/Toolip/Toolip'
import {MainContext} from '../../../Main'
import {IModulo} from '../../../Main'
import {Container, SubContainer, Header, Body, Title} from './styles'

interface IModuloContext {
  liberar: (param?: IModulo) => void
}

export interface IModuloInfo {
  nome: string,
  icone: any,
  componente: any
}

export const ModuloContext = createContext<IModuloContext>({} as IModuloContext)

export const ModuloProvider: React.FC = memo(() => {
  const {moduloInfo, setModuloInfo} = useContext(MainContext)
  const Componente = moduloInfo?.icone as React.FC<any> | undefined
  const liberar = (param?: IModulo) => {
    const props = param == undefined ? moduloInfo : param
    setModuloInfo({
      ...props,
      loadingPagina: false,
      loadingModulo: false,
      render: true
    })
  }
  return (
    <ModuloContext.Provider value={{
      liberar
    }}>
      <Container>
        <SubContainer>
          <ModuloLoading show={moduloInfo.loadingModulo} />
          <Header className="moduloHeader">
            {moduloInfo != undefined && moduloInfo.render && (
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
            <Modulos />
          </Body>
        </SubContainer>
      </Container>
    </ModuloContext.Provider>
  )
})
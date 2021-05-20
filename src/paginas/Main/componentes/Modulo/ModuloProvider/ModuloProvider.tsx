import React, {createContext, memo, useState, useRef} from 'react'
import Modulos from '../Modulos'
import ModuloLoading from '../ModuloLoading/ModuloLoading'
import Toolip from '../../../../../componentes/Toolip/Toolip'
import {Container, SubContainer, Header, Body, Title} from './styles'

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
            <Modulos />
          </Body>
        </SubContainer>
      </Container>
    </ModuloContext.Provider>
  )
})
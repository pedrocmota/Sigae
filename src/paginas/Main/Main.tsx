import React, {memo, useState, useEffect, useRef, useContext, createContext} from 'react'
import {Redirect} from 'react-router-dom'
import LoadingPersistent from '../../componentes/LoadingPersistent/LoadingPersistent'
import Header from './componentes/Header/Header'
import {ModuloProvider} from './componentes/Modulo/ModuloProvider/ModuloProvider'
import Sidebar from './componentes/Sidebar/Sidebar'
import Footer from './componentes/Footer/Footer'
import {APIContext} from '../../hooks/APIProvider'
import {useToasts} from 'react-toast-notifications'
import {onResize} from '../../hooks/events/Resize'
import {IDadosIniciais} from '../../types/DadosEstaticos'
import {MainContainer} from './styles'

interface IMainContext {
  dados: IDadosIniciais | undefined,
  openSidebar: boolean,
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>,
  setRedirect: React.Dispatch<React.SetStateAction<string>>,
  moduloInfo: IModulo,
  setModuloInfo: React.Dispatch<React.SetStateAction<IModulo>>
}

export interface IModulo {
  loadingPagina: boolean,
  loadingModulo: boolean,
  render: boolean,
  nome?: string,
  icone?: any,
  componente?: React.FC
}

export const MainContext = createContext<IMainContext>({} as IMainContext)

export const MainProvider: React.FC = memo((props) => {
  const [dados, setDados] = useState<IDadosIniciais>()
  const [redirect, setRedirect] = useState('')
  const [openSidebar, setOpenSidebar] = useState(window.matchMedia('(min-width:944px)').matches)
  const [moduloInfo, setModuloInfo] = useState<IModulo>({
    loadingPagina: true,
    loadingModulo: false,
    render: false,
  })

  const {Requests, Token} = useContext(APIContext)
  const {addToast} = useToasts()

  useEffect(() => {
    const resizeEvt = onResize((width) => {
      setOpenSidebar(width >= 944)
    })
    Requests.dados.iniciais((param) => {
      setDados(param)
      if (param.erro != undefined) {
        setRedirect('/')
        Token.remover()
        if (param.erro == 'EXPIRED') {
          return addToast('Sua sessão expirou', {appearance: 'error'})
        }
        if (param.erro == 'DESTROYED_TOKEN') {
          return addToast('Sua sessão foi destruída devido a outro usuário', {appearance: 'error'})
        }
        if (param.erro == 'PERMISSAO_INSUFICIENTE') {
          return addToast('Você não tem acesso para isso', {appearance: 'error'})
        }
        if (param.erro == 'INVALID_TOKEN') return
        return addToast('Erro desconhecido', {appearance: 'error'})
      }
    })
    return () => {
      window.removeEventListener('resize', resizeEvt, true)
    }
  }, [])

  return (
    <MainContext.Provider value={{
      dados, openSidebar, setOpenSidebar, setRedirect, moduloInfo, setModuloInfo
    }}>
      {redirect != '' && (
        <Redirect to={redirect} />
      )}
      <LoadingPersistent visible={moduloInfo.loadingPagina} />
      {dados != undefined && (
        <MainContainer>
          <Header />
          <ModuloProvider />
          <Sidebar render={!moduloInfo.loadingPagina} />
          <Footer resizable />
        </MainContainer>
      )}
    </MainContext.Provider>
  )
})
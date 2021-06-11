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
import {ILoadings, IModuloHeader} from './Types'
import ImageViewer, {IImageViewer} from './componentes/ImageViewer/ImageViewer'
import {IDadosIniciais} from '../../types/DadosEstaticos'
import {MainContainer, RenderContainer} from './styles'

interface IMainContext {
  dados: IDadosIniciais | undefined,
  openSidebar: boolean,
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>,
  setRedirect: React.Dispatch<React.SetStateAction<string>>,
  loadings: ILoadings,
  setLoadings: React.Dispatch<React.SetStateAction<ILoadings>>,
  moduloHeader: IModuloHeader | undefined,
  setModuloHeader: React.Dispatch<React.SetStateAction<IModuloHeader | undefined>>,
  imageViewer: IImageViewer,
  setImageViewer: React.Dispatch<React.SetStateAction<IImageViewer>>
}

export const MainContext = createContext<IMainContext>({} as IMainContext)

export const MainProvider: React.FC = memo((props) => {
  const [dados, setDados] = useState<IDadosIniciais>()
  const [redirect, setRedirect] = useState('')
  const [openSidebar, setOpenSidebar] = useState(window.matchMedia('(min-width:944px)').matches)
  const [loadings, setLoadings] = useState<ILoadings>({
    loadingPagina: true,
    loadingModulo: false,
  })
  const [moduloHeader, setModuloHeader] = useState<IModuloHeader>()
  const [imageViewer, setImageViewer] = useState<IImageViewer>({
    open: false
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
        if (param.erro == 'EXPIRED') {
          Token.remover()
          return addToast('Sua sessão expirou', {appearance: 'error'})
        }
        if (param.erro == 'DESTROYED_TOKEN') {
          Token.remover()
          return addToast('Sua sessão foi destruída devido a outro usuário', {appearance: 'error'})
        }
        if (param.erro == 'PERMISSAO_INSUFICIENTE') {
          return addToast('Você não tem acesso para isso', {appearance: 'error'})
        }
        if (param.erro == 'INVALID_TOKEN') {
          // Token.remover()
          return addToast('Sua sessão é inválida', {appearance: 'error'})
        }
        return addToast('Erro desconhecido', {appearance: 'error'})
      }
    })
    return () => {
      window.removeEventListener('resize', resizeEvt, true)
    }
  }, [])

  return (
    <MainContext.Provider value={{
      dados, openSidebar, setOpenSidebar, setRedirect,
      loadings, setLoadings, moduloHeader, setModuloHeader,
      imageViewer, setImageViewer
    }}>
      {redirect != '' && (
        <Redirect to={redirect} push />
      )}
      <LoadingPersistent visible={loadings.loadingPagina} />
      {dados != undefined && (
        <>
          <ImageViewer {...imageViewer} />
          <MainContainer>
            <Header />
            <Sidebar render={dados != undefined} />
            <RenderContainer>
              <ModuloProvider />
              <Footer resizable />
            </RenderContainer>

          </MainContainer>
        </>
      )}
    </MainContext.Provider>
  )
})
import React, {useState, useEffect, useRef, useContext, createContext} from 'react'
import {Redirect} from 'react-router-dom'
import LoadingPersistent from '../../componentes/LoadingPersistent/LoadingPersistent'
import Header from './componentes/Header/Header'
import Container from './componentes/Container/Container'
import Sidebar from './componentes/Sidebar/Sidebar'
import Footer from './componentes/Footer/Footer'
import {APIContext} from '../../hooks/APIProvider'
import useScreenSize from '../../hooks/misc/useScreenSize'
import {listaModulos} from '../../modulos/Modulos'
import {IDadosIniciais} from '../../types/DadosEstaticos'
import {MainContainer} from './styles'

interface IMainContext {
  modulo: listaModulos,
  dados: IDadosIniciais | undefined,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MainContext = createContext<IMainContext>({} as IMainContext)

export const MainProvider: React.FC = (props) => {
  const [modulo, setModulo] = useState<listaModulos>('inicio')
  const [dados, setDados] = useState<IDadosIniciais>()
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(window.matchMedia('(min-width:944px)').matches)

  const {Requests} = useContext(APIContext)
  const lastWidth = useRef(-1)
  window.addEventListener('resize', () => {
    const {width} = useScreenSize()
    if(lastWidth.current <= 0) return lastWidth.current = width
    if(width != lastWidth.current) setOpen(width >= 944)
  })

  useEffect(() => {
    Requests.dados.iniciais((param) => {
      setDados(param)
      setLoading(false)
      if(param.erro != undefined) {
        console.log(param.erro)
      }
    })
  }, [])

  return (
    <MainContext.Provider value={{
      modulo, dados, open, setOpen
    }}>
      <Redirect to=""/>
      <LoadingPersistent visible={loading}/>
      <MainContainer>
        <Header />
        <Container />
        <Sidebar render={!loading}/>
        <Footer resizable/>
      </MainContainer>
    </MainContext.Provider>
  )
}
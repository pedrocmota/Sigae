import React, {useState, useEffect, useRef, useContext, createContext} from 'react'
import LoadingPersistent from '../../componentes/LoadingPersistent/LoadingPersistent'
import Header from './componentes/Header/Header'
import Container from './componentes/Container/Container'
import Sidebar from './componentes/Sidebar/Sidebar'
import Footer from './componentes/Footer/Footer'
import {APIContext} from '../../hooks/APIProvider'
import useScreenSize from '../../hooks/misc/useScreenSize'
import {IDadosIniciais} from '../../types/DadosEstaticos'
import {tokenErros} from '../../types/ErrosGenericos'
import {MainContainer} from './styles'

interface IMainContext {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MainContext = createContext<IMainContext>({} as IMainContext)

export const MainProvider: React.FC = (props) => {
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
    }, (param) => {
      setLoading(false)
    })
  }, [])

  return (
    <MainContext.Provider value={{open, setOpen}}>
      <LoadingPersistent visible={loading}/>
      <MainContainer>
        <Header />
        <Container />
        <Sidebar/>
        <Footer resizable/>
      </MainContainer>
    </MainContext.Provider>
  )
}
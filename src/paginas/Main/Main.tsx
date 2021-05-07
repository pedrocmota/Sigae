import React, {useState, useRef, createContext} from 'react'
import Header from './componentes/Header/Header'
import Container from './componentes/Container/Container'
import Sidebar from './componentes/Sidebar/Sidebar'
import Footer from './componentes/Footer/Footer'
import useScreenSize from '../../hooks/misc/useScreenSize'
import {MainContainer} from './styles'

interface IMainContext {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MainContext = createContext<IMainContext>({} as IMainContext)

export const MainProvider: React.FC = (props) => {
  const [open, setOpen] = useState(
    window.matchMedia('(min-width:944px)').matches
  )
  const lastWidth = useRef(-1)
  window.addEventListener('resize', (e) => {
    const {width} = useScreenSize()
    if(lastWidth.current <= 0) return lastWidth.current = width
    if(width != lastWidth.current) setOpen(width >= 944)
  })
  return (
    <MainContext.Provider value={{open, setOpen}}>
      <MainContainer>
        <Header />
        <Container />
        <Sidebar/>
        <Footer resizable/>
      </MainContainer>
    </MainContext.Provider>
  )
}
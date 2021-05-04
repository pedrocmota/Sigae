import React, {useState, createContext} from 'react'
import Header from './componentes/Header/Header'
import Container from './componentes/Container/Container'
import Sidebar from './componentes/Sidebar/Sidebar'
import Footer from './componentes/Footer/Footer'
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
  window.addEventListener('resize', (e) => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    setOpen(width >= 944)
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
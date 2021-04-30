import React, {useState, createContext} from 'react'
import Header from './componentes/Header/Header'
import Container from './componentes/Container/Container'
import Footer from '../../componentes/pages/Footer/Footer'


interface IMainContext {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MainContext = createContext<IMainContext>({} as IMainContext)

export const MainProvider: React.FC = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <MainContext.Provider value={{open, setOpen}}>
      <Header/>
      <Container/>
      <Footer/>
      {props.children}
    </MainContext.Provider>
  )
}
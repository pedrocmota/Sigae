import React, {createContext} from 'react'
import {DefaultTheme} from 'styled-components'
import usePeristedState from './usestates/usePeristedState'
import Light from '../temas/Light'
import Dark from '../temas/Dark'

import GlobalStyles from '../styles/GlobalStyles'
import MUIStyles from '../styles/MUIStyles'
import ToastStyles from '../styles/ToastStyles'

export interface IThemeContext {
  toggleTheme: () => void,
  tema: DefaultTheme
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider: React.FC = (props) => {
  const [nomeTema, setNomeTema] = usePeristedState<ListaTemas>('tema', () => {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'Dark'
    } else {
      return 'Light'
    }
  })
  const tema = nomeTema == 'Light' ? Light : Dark
  const toggleTheme = () => {
    if(tema.titulo == 'Light') return setNomeTema('Dark')
    if(tema.titulo == 'Dark') return setNomeTema('Light')
  }
  return (
    <ThemeContext.Provider value={{tema, toggleTheme}}>
      <GlobalStyles/>
      <MUIStyles/>
      <ToastStyles/>
      {props.children}
    </ThemeContext.Provider>
  )
}
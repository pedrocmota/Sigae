import React, {createContext} from 'react'
import {DefaultTheme} from 'styled-components'
import usePeristedState from './usestates/usePeristedState'
import Light from '../temas/Light'
import Dark from '../temas/Dark'

import GlobalStyles from '../styles/GlobalStyles'
import MUIStyles from '../styles/MUIStyles'
import ToastStyles from '../styles/ToastStyles'

export interface IThemeContext {
  definirTema: (tema: ListaTemas) => void,
  tema: DefaultTheme,
  nomeTema: ListaTemas
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider: React.FC = (props) => {
  const [nomeTema, setNomeTema] = usePeristedState<ListaTemas>('tema', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'Dark'
    } else {
      return 'Light'
    }
  })
  const tema = nomeTema == 'Light' ? Light : Dark
  const definirTema = (tema: ListaTemas) => {
    setNomeTema(tema)
  }
  return (
    <ThemeContext.Provider value={{tema, definirTema, nomeTema}}>
      <GlobalStyles />
      <MUIStyles />
      <ToastStyles />
      {props.children}
    </ThemeContext.Provider>
  )
}
import React, {createContext} from 'react'
import {DefaultTheme} from 'styled-components'
import usePeristedState from '../hooks/usestates/usePeristedState'
import Global from '../temas/Global'
import Light from '../temas/Light'
import Dark from '../temas/Dark'

export interface ITemaContext {
  toggleTheme: () => void,
  tema: DefaultTheme
}

export const TemaContext = createContext<ITemaContext>({} as ITemaContext)

export const TemaProvider: React.FC = (props) => {
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
    <TemaContext.Provider value={{tema, toggleTheme}}>
      <Global/>
      {props.children}
    </TemaContext.Provider>
  )
}
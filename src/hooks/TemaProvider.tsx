import React, {useState, createContext} from 'react'
import Global from '../temas/Global'

interface ITemaContext {
  
}

export const TemaContext = createContext<ITemaContext>({} as ITemaContext)

export const TemaProvider: React.FC = (props) => {

  return (
    <TemaContext.Provider value={{}}>
      <Global/>
      {props.children}
    </TemaContext.Provider>
  )
}
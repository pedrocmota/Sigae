import React, {useState, createContext} from 'react'
import {Route} from 'react-router-dom'

interface IRotaModuloContext {
  
}

export const RotaModuloContext = createContext<IRotaModuloContext>({} as IRotaModuloContext)

export const RotaModuloProvider: React.FC = (props) => {
  return (
    <RotaModuloContext.Provider value={{}}>
      
    </RotaModuloContext.Provider>
  )
}
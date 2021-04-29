import React, {useState, useEffect, useRef, createContext} from 'react'
import Console from '../componentes/Console/Console'
import {IConsoleEntry, tipo} from '../types/Console'
import {Time} from '../utils/DateTime'

interface IConsoleContext {
  open: boolean,
  openConsole: () => void,
  closeConsole: () => void,
  dados: React.MutableRefObject<IConsoleEntry[]>,
  adicionar: (titulo: string, conteudo: string, tipo: tipo) => void,
  clear: () => void
}

export const ConsoleContext = createContext<IConsoleContext>({} as IConsoleContext)

export const ConsoleProvider: React.FC = (props) => {
  const [open, setOpen] = useState(false)
  const dados = useRef<IConsoleEntry[]>([])

  useEffect(() => {
    document.addEventListener('keydown', function onPress(event) {
      if (event.key === 'c' && event.altKey) openConsole()
    })
  }, [])

  const openConsole = () => {
    setOpen(true)
  }

  const closeConsole = () => {
    setOpen(false)
  }

  const adicionar = (titulo: string, conteudo: string, tipo: tipo) => {
    dados.current.push({
      titulo: titulo,
      tipo: tipo,
      conteudo: conteudo,
      horario: Time.now()
    })
  }

  const clear = () => {
    dados.current = []
  }

  return (
    <ConsoleContext.Provider value={{
      open, openConsole, closeConsole, dados, adicionar, clear
    }}>
      <Console/>
      {props.children}
    </ConsoleContext.Provider>
  )
}
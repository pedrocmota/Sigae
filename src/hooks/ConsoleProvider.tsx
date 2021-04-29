import React, {useState, useEffect, useRef, createContext} from 'react'
import Console from '../componentes/Console/Console'
import {IConsoleEntry, tipo} from '../types/Console'

interface IConsoleContext {
  open: boolean,
  openConsole: () => void,
  closeConsole: () => void,
  dados: React.MutableRefObject<IConsoleEntry[]>
}

export const ConsoleContext = createContext<IConsoleContext>({} as IConsoleContext)

export const ConsoleProvider: React.FC = (props) => {
  const [open, setOpen] = useState(false)
  const dados = useRef<IConsoleEntry[]>([
    {
      titulo: 'teste1',
      conteudo: 'testando kkkk',
      horario: '14:33',
      tipo: 'ERROR'
    },
    {
      titulo: 'teste1',
      conteudo: 'testando kkkk',
      horario: '14:33',
      tipo: 'ERROR'
    },
    {
      titulo: 'teste1',
      conteudo: 'testando kkkk',
      horario: '14:33',
      tipo: 'ERROR'
    },
  ])

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

  const add = (titulo: string, tipo: tipo, conteudo: string) => {
    dados.current.push({
      titulo: titulo,
      tipo: tipo,
      conteudo: conteudo,
      horario: ''
    })
  }

  const clear = () => {

  }

  return (
    <ConsoleContext.Provider value={{
      open, openConsole, closeConsole, dados
    }}>
      <Console/>
      {props.children}
    </ConsoleContext.Provider>
  )
}
import React, {useState, useEffect, useRef, createContext} from 'react'
import Console from '../paginas/Console/Console'
import {useToasts} from 'react-toast-notifications'
import {Time} from '../utils/DateTime'
import {IConsoleEntry, tipo} from '../paginas/Console/Types'

export interface IConsoleContext {
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
  const {addToast} = useToasts()

  useEffect(() => {
    document.addEventListener('keydown', function onPress(event) {
      if (event.key === 'c' && event.altKey) openConsole()
    })
    window.onerror = (erro, url, line) => {
      adicionar('Erro',
        `${erro}
      url: ${url}
      linha: ${line}
      `, 'ERROR')
    }
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
    if (titulo == 'Erro de rede') {
      return addToast('Ocorreu um erro de rede. Reinicie a página', {
        appearance: 'error', autoDismiss: false
      })
    }
    return addToast('Ocorreu um erro', {
      appearance: 'error', autoDismiss: false
    })
  }

  const clear = () => {
    dados.current = []
  }

  return (
    <ConsoleContext.Provider value={{
      open, openConsole, closeConsole, dados, adicionar, clear
    }}>
      <Console />
      {props.children}
    </ConsoleContext.Provider>
  )
}
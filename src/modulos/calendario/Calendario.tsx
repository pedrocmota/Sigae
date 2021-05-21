import React, {useContext, useEffect} from 'react'
import {ModuloContext} from '../../paginas/Main/componentes/Modulo/ModuloProvider/ModuloProvider'

const Calendario: React.FC = () => {
  const {liberar} = useContext(ModuloContext)
  useEffect(() => {
    setTimeout(() => {
      liberar()
    }, 1500)
  }, [])
  return (
    <h1>
      Módulo Calendario
    </h1>
  )
}

export default Calendario
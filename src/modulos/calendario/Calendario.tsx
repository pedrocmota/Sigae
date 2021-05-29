import React, {useContext, useEffect} from 'react'
import useIsMounted from '../../hooks/useeffects/useIsMounted'
import {ModuloContext} from '../../paginas/Main/componentes/Modulo/ModuloProvider/ModuloProvider'

const Calendario: React.FC = () => {
  const {liberar} = useContext(ModuloContext)
  const isMounted = useIsMounted()
  useEffect(() => {
    setTimeout(() => {
      console.log(isMounted())
      if (isMounted()) {
        liberar()
      }
    }, 1500)
  }, [])
  return (
    <div>
      <h1>
        Módulo Calendario
      </h1>
    </div>
  )
}

export default Calendario
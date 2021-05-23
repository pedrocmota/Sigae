import React, {useContext, useEffect} from 'react'
import useIsMounted from '../../hooks/useeffects/useIsMounted'
import {ModuloContext} from '../../paginas/Main/componentes/Modulo/ModuloProvider/ModuloProvider'

const MeusAtendimentos: React.FC = (props) => {
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
    <div {...props}>
      <h1>
        Meus Atendimentos
      </h1>
    </div>
  )
}

export default MeusAtendimentos
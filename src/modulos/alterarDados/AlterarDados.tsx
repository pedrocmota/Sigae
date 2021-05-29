import React, {useContext, useEffect} from 'react'
import useIsMounted from '../../hooks/useeffects/useIsMounted'
import {ModuloContext} from '../../paginas/Main/componentes/Modulo/ModuloProvider/ModuloProvider'
import {Container} from './styles'

const ALterarDados: React.FC = () => {
  const {liberar} = useContext(ModuloContext)
  const isMounted = useIsMounted()
  useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        liberar()
      }
    }, 400)
  }, [])

  return (
    <Container>
      <h1>
        Módulo ALterar Dados
      </h1>
    </Container>
  )
}

export default ALterarDados
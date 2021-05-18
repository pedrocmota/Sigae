import React, {useState, useContext, useEffect, memo} from 'react'
import {ModuloContext, IModuloInfo} from '../ModuloProvider/ModuloProvider'

const ModuloContainer: React.FC<IModuloInfo> = (props) => {
  const {setModuloInfo} = useContext(ModuloContext)
  useEffect(() => {
    setModuloInfo(props)
  }, [])
  const Componente = props.componente as React.FC<any>
  return (
    <Componente/>
  )
}

export default memo(ModuloContainer)
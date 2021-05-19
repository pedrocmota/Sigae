import React, {useState, useContext, useEffect, memo} from 'react'
import {Route, Redirect, withRouter} from 'react-router-dom'
import {APIContext} from '../../../../../hooks/APIProvider'
import {useToasts} from 'react-toast-notifications'
import {MainContext} from '../../../Main'
import {ICondicao, validarPermissao} from '../../Permissao'
import {ModuloContext, IModuloInfo} from '../ModuloProvider/ModuloProvider'

interface IModuloContainer extends IModuloInfo {
  condicao: ICondicao
}

const ModuloContainer: React.FC<IModuloContainer> = (props) => {
  const {Token} = useContext(APIContext)
  const {dados} = useContext(MainContext)
  const {addToast} = useToasts()
  const valido = validarPermissao(Token.existe(), props.condicao, dados!)
  const {setModuloInfo} = useContext(ModuloContext)
  useEffect(() => {
    if(valido) {
      setModuloInfo(props)
    } else {
      addToast('Você não tem permissão para acessar esse módulo', {appearance: 'error'})
    }
  }, [document.location.href])
  const Componente = props.componente as React.FC<any>
  return (
    <>
      {valido && (
        <>
          <Componente/>
        </>
      )}
      {!valido && (
        <Redirect to="/"/>
      )}
    </>
  )
}

export default ModuloContainer 
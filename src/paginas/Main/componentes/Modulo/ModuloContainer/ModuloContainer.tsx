import React, {useState, useContext, useEffect, memo} from 'react'
import {Redirect} from 'react-router-dom'
import {useToasts} from 'react-toast-notifications'
import {APIContext} from '../../../../../hooks/APIProvider'
import {MainContext} from '../../../Main'
import {ICondicao, validarPermissao} from '../../Permissao'
import {ModuloContext, IModuloInfo} from '../ModuloProvider/ModuloProvider'

interface IModuloContainer extends IModuloInfo {
  condicao: ICondicao,
  sincrono?: boolean
}

const ModuloContainer: React.FC<IModuloContainer> = (props) => {
  const {Token} = useContext(APIContext)
  const {dados, moduloInfo, setModuloInfo} = useContext(MainContext)
  const {liberar} = useContext(ModuloContext)
  const {addToast} = useToasts()
  const valido = validarPermissao(Token.existe(), props.condicao, dados!)
  useEffect(() => {
    let timeout:NodeJS.Timeout | undefined = undefined
    if (valido) {
      const moInfo = {
        ...props,
        loadingPagina: moduloInfo.loadingPagina,
        loadingModulo: !moduloInfo.loadingPagina ? true : false,
        render: false
      }
      setModuloInfo(moInfo)
      if(props.sincrono) {
        timeout = setTimeout(() => {
          liberar(moInfo)
        }, 300)
      }
    } else {
      addToast('Você não tem permissão para acessar esse módulo', {appearance: 'error'})
    }
    return () => {
      if(timeout != undefined) clearTimeout(timeout)
    }
  }, [document.location.href])

  const Componente = props.componente as React.FC<any>
  return (
    <>
      {valido && moduloInfo.render && (
        <Componente />
      )}
      {!valido && (
        <Redirect to="/" />
      )}
    </>
  )
}

export default ModuloContainer
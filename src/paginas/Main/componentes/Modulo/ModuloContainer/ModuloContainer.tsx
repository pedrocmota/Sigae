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
  const {dados, loadings, setLoadings, setModuloHeader} = useContext(MainContext)
  const {liberar} = useContext(ModuloContext)
  const {addToast} = useToasts()
  const valido = validarPermissao(Token.existe(), props.condicao, dados!)
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined = undefined
    if (valido) {
      setLoadings({
        loadingPagina: false,
        loadingModulo: !loadings.loadingPagina ? true : false,
      })
      if (props.sincrono) {
        timeout = setTimeout(() => {
          liberar()
        }, 300)
      }
      setModuloHeader({
        ...props
      })
    } else {
      addToast('Você não tem permissão para acessar esse módulo', {appearance: 'error'})
    }
    return () => {
      if (timeout != undefined) clearTimeout(timeout)
    }
  }, [document.location.href])

  const Componente = props.componente as React.FC<React.HTMLAttributes<HTMLDivElement>>
  return (
    <>
      {valido && (
        <div style={{
          width: '100%',
          height: '100%',
          ...(loadings.loadingModulo ? {display: 'none'} : {})
        }
        }>
          <Componente />
        </div>
      )}
      {!valido && (
        <Redirect to="/" />
      )}
    </>
  )
}

export default ModuloContainer
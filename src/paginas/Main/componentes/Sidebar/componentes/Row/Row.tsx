import React, {useEffect, memo, useContext} from 'react'
import {APIContext} from '../../../../../../hooks/APIProvider'
import {MainContext} from '../../../../Main'
import {NodeContext} from '../Node/Node'
import {validarPermissao} from '../../../Permissao'
import {IRow} from '../../Types'
import {LinkContainer, DivContainer} from './styles'

const Row: React.FC<IRow> = (props) => {
  const {Token} = useContext(APIContext)
  const {dados} = useContext(MainContext)
  const {setOpen} = useContext(NodeContext)
  if (!validarPermissao(Token.existe(), props.condicao, dados!)) return <></>
  const Icone = props.icone as React.FC<any> | undefined
  if (props.moduloAssociado) {
    useEffect(() => {
      const ativo = isActive(getLink(props.moduloAssociado as string), location.pathname)
      if(ativo && typeof setOpen == 'function') setOpen(true)
    }, [])
    return (
      <LinkContainer to={getLink(props.moduloAssociado)}
        tabIndex={props.tabIndex} className="row"
        activeClassName="ativo" exact isActive={(match, path) => {
          const link = getLink(props.moduloAssociado as string)
          if(link != undefined) return isActive(link, path.pathname)
          return false
        }}>
        {Icone && (
          <Icone />
        )}
        <p>{props.titulo}</p>
      </LinkContainer>
    )
  } else {
    return (
      <DivContainer className="row" {...props} >
        {Icone && (
          <Icone />
        )}
        <p>{props.titulo}</p>
      </DivContainer>
    )
  }
}

const getLink = (modulo: string) => {
  if (modulo == 'inicio') return '/'
  return `/modulo/${modulo}`
}

const isActive = (link: string, url: string) => {
  if(link == '/' && url == '/') return true
  return link != '/' ? url.includes(link) : false
}

export default memo(Row)
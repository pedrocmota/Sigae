import React, {useEffect, memo, useContext} from 'react'
import {APIContext} from '../../../../../../hooks/APIProvider'
import {MainContext} from '../../../../Main'
import {NodeContext} from '../Node/Node'
import {validarPermissao} from '../../../Permissao'
import {IRow} from '../../Types'
import {LinkContainer, DivContainer} from './styles'

const Row: React.FC<IRow> = ({onAction, ...props}) => {
  const {Token} = useContext(APIContext)
  const Main = useContext(MainContext)
  const {setOpen} = useContext(NodeContext)
  if (!validarPermissao(Token.existe(), props.condicao, Main.dados!)) return <></>
  const Icone = props.icone as React.FC<any> | undefined
  if (props.moduloAssociado) {
    useEffect(() => {
      const ativo = isActive(getLink(props.moduloAssociado as string), location.pathname)
      if (ativo && typeof setOpen == 'function') setOpen(true)
    }, [])
    return (
      <LinkContainer to={getLink(props.moduloAssociado)}
        tabIndex={props.tabIndex} className="row"
        activeClassName="ativo" exact onClick={() => {closeOnClick(Main.setOpenSidebar)}} isActive={(match, path) => {
          const link = getLink(props.moduloAssociado as string)
          if (link != undefined) return isActive(link, path.pathname)
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
      <DivContainer className="row" {...props} onClick={() => {
        if (typeof onAction == 'function') {
          onAction()
        }
      }} onKeyDown={(e) => {
        if (e.key == 'Enter' && typeof onAction == 'function') {
          onAction()
        }
      }}>
        {Icone && (
          <Icone />
        )}
        <p>{props.titulo}</p>
      </DivContainer>
    )
  }
}

const closeOnClick = (setOpen: (x: boolean) => void) => {
  const match = window.matchMedia('(min-width:944px)').matches
  if (!match && typeof setOpen == 'function') {
    setOpen(false)
  }
}

const getLink = (modulo: string) => {
  if (modulo == 'inicio') return '/'
  return `/modulo/${modulo}`
}

const isActive = (link: string, url: string) => {
  if (link == '/' && url == '/') return true
  return link != '/' ? url.includes(link) : false
}

export default memo(Row)
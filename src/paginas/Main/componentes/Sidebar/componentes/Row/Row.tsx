import React, {memo, useContext} from 'react'
import {APIContext} from '../../../../../../hooks/APIProvider'
import {MainContext} from '../../../../Main'
import {IRow, ICondicao} from '../../Types'
import {IDadosIniciais} from '../../../../../../types/DadosEstaticos'
import {LinkContainer, DivContainer} from './styles'

const Row: React.FC<IRow> = (props) => {
  const {Token} = useContext(APIContext)
  const {dados} = useContext(MainContext)
  if (!valido(Token.existe(), props.condicao, dados!)) return <></>
  const Icone = props.icone as React.FC<any> | undefined
  if (props.moduloAssociado) {
    return (
      <LinkContainer to={getLink(props.moduloAssociado)}
        tabIndex={props.tabIndex} className="row"
        activeClassName="ativo" exact>
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

const valido = (logado: boolean, condicao: ICondicao, dados: IDadosIniciais) => {
  if (condicao.logado && !condicao.naoLogado && !logado) return false
  if (condicao.naoLogado && !condicao.logado && logado) return false
  if (condicao.logado && !condicao.naoLogado && logado) {
    const validoDiscente = condicao.discentes && dados.tipo == 'DISCENTE'
    const validoDocente = condicao.discentes && dados.tipo == 'DOCENTE'
    const validoAdmin = condicao.discentes && dados.tipo == 'ADMIN'
    if (!validoDiscente && !validoDocente && !validoAdmin) return false
  }
  return true
}

const getLink = (modulo: string) => {
  if(modulo == 'inicio') return ''
  return `/modulo/${modulo}`
}

export default memo(Row)
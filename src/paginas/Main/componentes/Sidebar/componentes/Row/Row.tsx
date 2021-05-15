import React, {memo, useContext} from 'react'
import {APIContext} from '../../../../../../hooks/APIProvider'
import {MainContext} from '../../../../Main'
import {IRow, ICondicao} from '../../Types'
import {IDadosIniciais} from '../../../../../../types/DadosEstaticos'
import {Container} from './styles'

const Row: React.FC<IRow> = (props) => {
  const {Token} = useContext(APIContext)
  const {modulo, dados} = useContext(MainContext)
  if(!valido(Token.existe(), props.condicao, dados!)) return <></>
  const Icone = props.icone as React.FC<any> | undefined
  const selecionado = props.moduloAssociado === modulo
  return (
    <Container selecionado={selecionado} tabIndex={props.tabIndex} className="row">
      {Icone && (
        <Icone />
      )}
      <p>{props.titulo}</p>
    </Container>
  )
}

const valido = (logado: boolean, condicao: ICondicao, dados: IDadosIniciais) => {
  if(condicao.logado && !condicao.naoLogado && !logado) return false
  if(condicao.naoLogado && !condicao.logado && logado) return false
  if(condicao.logado && !condicao.naoLogado && logado) {
    if(condicao.discentes && dados.tipo != 'DISCENTE') return false
    if(condicao.docentes && dados.tipo != 'DOCENTE') return false
    if(condicao.admins && dados.tipo != 'ADMIN') return false
  }
  return true
}

export default memo(Row)
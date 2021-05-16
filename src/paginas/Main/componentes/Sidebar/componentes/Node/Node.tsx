import React, {useState, useContext, memo} from 'react'
import {APIContext} from '../../../../../../hooks/APIProvider'
import {MainContext} from '../../../../Main'
import {INode, ICondicao} from '../../Types'
import {IDadosIniciais} from '../../../../../../types/DadosEstaticos'
import {Container, Top, Bottom, Arrow} from './styles'

const Node: React.FC<INode> = (props) => {
  const [open, setOpen] = useState(false)
  const {Token} = useContext(APIContext)
  const {dados} = useContext(MainContext)
  if(!valido(Token.existe(), props.condicao, dados!)) return <></>
  const Icone = props.icone as React.FC<any>
  return (
    <Container open={open} tabIndex={props.tabIndex} className="node"
      onKeyDown={(e) => {
        if (e.key == 'Enter') setOpen(!open)
      }}>
      <Top open={open} onClick={() => {
        setOpen(!open)
      }}>
        <Icone />
        <p>{props.titulo}</p>
        <Arrow id="arrow" open={open} />
      </Top>
      <Bottom open={open}>
        {props.children}
      </Bottom>
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

export default memo(Node)
import React, {useState, useEffect} from 'react'
import useIsMounted from '../../../hooks/useeffects/useIsMounted'
import axios from 'axios'
import {isDev} from '../../../utils/Utils'
import {Container, Versao, Desenvolvido} from './styles'

const SobreSigae: React.FC = () => {
  const [versao, setVersao] = useState('Carregando...')
  const isMounted = useIsMounted()
  useEffect(() => {
    axios.get('/version.info').then((response) => {
      if (isMounted()) setVersao(response.data)
    }).catch(() => {
      if (isMounted()) setVersao('Não foi possível carregar')
    })
  }, [])
  return (
    <Container>
      <div>Repositório do cliente:
        <a href="https://github.com/pedrocmota/Sigae" className="git" target="_blank" rel="noreferrer">[Link GitHub]</a>
      </div>
      <div>Repositório da API:
        <a href="https://github.com/pedrocmota/Sigae-API" className="git" target="_blank" rel="noreferrer">[Link GitHub]</a>
      </div>
      <Versao>
        <div>Versão atual: <b>{versao}</b></div>
      </Versao>
      <Desenvolvido>Desenvolvido por:</Desenvolvido>
      <a href="http://lattes.cnpq.br/5108386712552461" target="_blank" rel="noreferrer">
        Pedro Henrique Cerqueira Mota
      </a>
      <a href="http://lattes.cnpq.br/8880633529133641" target="_blank" rel="noreferrer">
        João Costa dos Santos Neto
      </a>
      <Desenvolvido>Sob orientação de:</Desenvolvido>
      <a href="http://lattes.cnpq.br/6588253220386279" target="_blank" rel="noreferrer">
        Ana Carolina Sokolonski Anton
      </a>
    </Container>
  )
}

export default SobreSigae
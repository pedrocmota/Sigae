import React, {memo} from 'react'
import {Container, Sigae, Copyright} from './styles'

export interface IFooter {
  resizable?: boolean
}

const Footer: React.FC<IFooter> = (props) => {
  return (
    <Container resizable={props.resizable}>
      <Sigae>
        <div>Sistema de Gerenciamento de</div>
        <div className="footer_right">Atendimento ao Estudante</div>
      </Sigae>
      <Copyright>
        © 2020 SiGAÊ | Desenvolvimento:
        <a className="ifba_big" href="https://portal.ifba.edu.br/" target="_blank" rel="noreferrer">
          Instituto Federal da Bahia
        </a>
        <a className="ifba_small" href="https://portal.ifba.edu.br/" target="_blank" rel="noreferrer">
          IFBA
        </a>
      </Copyright>
    </Container>
  )
}

export default memo(Footer)
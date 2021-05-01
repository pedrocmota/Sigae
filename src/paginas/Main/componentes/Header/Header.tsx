import React from 'react'
import {Container, Left, Right} from './styles'
import Sigae from '../../../../assets/sigae-alternativo.svg'
import '../Hamburguer/hamburgers.css'

const Header: React.FC = () => {
  return (
    <Container>
      <Left>
        <a data-activates="slide-out" className="button-collapse">
          <div id="hamburguer" className="hamburger hamburger--collapse js-hamburger" onClick={() => {
            document.getElementById('hamburguer')?.classList.add('is-active')
          }}>
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </a>
        {/* <img src={Sigae} width={228}/> */}
      </Left>
      <Right>
        <h1>Sistema de Gerenciamento de Atendimento ao Estudante</h1>
      </Right>
    </Container>
  )
}

export default Header
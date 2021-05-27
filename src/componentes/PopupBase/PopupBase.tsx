import React from 'react'
import {Container, Header} from './styles'
import Sigae from '../../assets/sigae.svg'

export interface IPopupBase {
  hideHeader: boolean,
  hideFooter: boolean,
  titulo?: string
}

const PopupBase: React.FC<IPopupBase> = (props) => {
  return (
    <Container className="styledContainer" hideHeader={props.hideHeader} hideFooter={props.hideFooter}>
      {props.hideHeader != true && (
        <Header>
          <img src={Sigae} width={200} height={69} />
          {props.titulo != '' && (
            <div className="titulo-container">
              <div className="titulo">{props.titulo}</div>
            </div>
          )}
        </Header>
      )}
      <div className="componentContainer">
        {props.children}
      </div>
    </Container>
  )
}

export default PopupBase
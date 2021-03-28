import React, {useContext, memo} from 'react'
import {PopupContainer, Container, Top, Main, Footer} from './styles'
import {IPopupInstance} from '../../../popups/PopupsInterface'
import {PopupButtonOK, PopupButtonFechar} from '../PopupButton/PopupButton'
import {PopupContext} from '../../../hooks/PopupProvider'
import Sigae from '../../../assets/sigae.svg'

interface IPopupBase extends IPopupInstance {
  zIndex: number
}

const PopupBase: React.FC<IPopupBase> = ({id, popup, props, zIndex}) => {
  const {removePopup} = useContext(PopupContext)
  const largura = props.largura || popup.largura
  const altura = props.altura || popup.altura
  const titulo = props.titulo || popup.titulo
  const ocultarOk = props.ocultarOK || popup.ocultarOK
  const ocultarFechar = props.ocultarFechar || popup.ocultarFechar
  const textoOk = props.textoOk || popup.textoOk || 'OK'
  const textoFechar = props.textoFechar || popup.textoFechar || 'Fechar'
  const Componente = popup!.componente as React.FC<any>
  return (
    <PopupContainer id={id} largura={largura} altura={altura} zIndex={zIndex}>
      <Container className="container">
        <Top>
          <img src={Sigae} width={200} height={69} />
          <div className="titulo-container">
            <div className="titulo">{titulo}</div>
          </div>
        </Top>
        <Main>
          <Componente style="aa" {...props}/>
        </Main>
        <Footer>
          {!ocultarOk == false || ocultarOk == undefined && (
            <PopupButtonOK onClick={() => {

            }}>
              {textoOk}
            </PopupButtonOK>
          )}
          {ocultarFechar == false || ocultarFechar == undefined && (
            <PopupButtonFechar onClick={() => {
              removePopup(id)
            }}>
              {textoFechar}
            </PopupButtonFechar>
          )}
        </Footer>
      </Container>
    </PopupContainer>
  )
}

export default memo(PopupBase)
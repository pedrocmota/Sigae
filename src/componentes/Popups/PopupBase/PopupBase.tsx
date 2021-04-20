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
  const textoOk = props.textoOk || popup.textoOk || 'OK'
  const textoFechar = props.textoFechar || popup.textoFechar || 'Fechar'
  const Componente = popup!.componente as React.FC<any>

  let mostrarOk = true
  let mostrarFechar = true

  if(popup.ocultarOK == true) mostrarOk = false
  if(popup.ocultarFechar == true) mostrarFechar = false
  if(props.ocultarOK != undefined) mostrarOk = !props.ocultarOK
  if(props.ocultarFechar != undefined) mostrarFechar = !props.ocultarFechar
  const mostrar = mostrarOk || mostrarFechar

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
          <Componente id={id} {...props} />
        </Main>
        {mostrar && (
          <Footer>
            {mostrarOk && (
              <PopupButtonOK onClick={() => {
                removePopup(id, () => {
                  if(typeof props.onClose == 'function') props.onClose('ok')
                })
              }}>
                {textoOk}
              </PopupButtonOK>
            )}
            {mostrarFechar && (
              <PopupButtonFechar onClick={() => {
                removePopup(id, () => {
                  if(typeof props.onClose == 'function') props.onClose('fechar')
                })
              }}>
                {textoFechar}
              </PopupButtonFechar>
            )}
          </Footer>
        )}
      </Container>
    </PopupContainer>
  )
}

export default memo(PopupBase)
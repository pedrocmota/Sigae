import React, {useState, useContext, memo} from 'react'
import {FadeStyled, Container, Top, Main, Footer} from './styles'
import {IPopupInstance} from '../../../popups/PopupsInterface'
import {PopupButtonOK, PopupButtonFechar} from '../PopupButton/PopupButton'
import {PopupContext} from '../../../hooks/PopupProvider'
import Sigae from '../../../assets/sigae.svg'

interface IPopupBase extends IPopupInstance {
  zIndex: number
}

const PopupBase: React.FC<IPopupBase> = ({id, popup, props, zIndex}) => {
  const [visible, setVisible] = useState(true)
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
    <FadeStyled id={id} visible={visible} timer={300} largura={largura} altura={altura} zIndex={zIndex}>
      <Container className="container">
        <Top>
          <img src={Sigae} width={200} height={69} />
          <div className="titulo-container">
            <div className="titulo">{titulo}</div>
          </div>
        </Top>
        <Main>
          <Componente {...props}/>
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
              removePopup(id, setVisible)
            }}>
              {textoFechar}
            </PopupButtonFechar>
          )}
        </Footer>
      </Container>
    </FadeStyled>
  )
}

export default memo(PopupBase)
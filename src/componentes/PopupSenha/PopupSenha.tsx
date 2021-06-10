import React, {useState, memo} from 'react'
import {IFade} from '../../componentes/Fade/Fade'
import FixedColorBar from '../../componentes/FixedColorBar/FixedColorBar'
import Requisito from './Requisito'
import {Senha} from '../../utils/Senha'
import {FadeContainer, InternalContainer} from './styles'

interface IPopupSenha extends IFade {
  senha: string
}

const PopupSenha: React.FC<IPopupSenha> = ({senha, ...props}) => {
  const estadoSenha = Senha.calcularForcaSenha(senha)
  return (
    <FadeContainer className="popupSenhaContainer" {...props}>
      <InternalContainer color={estadoSenha.color}>
        <div className="top">
          <span className="forcaTexto">Força da senha:</span>
          <span className="forca">{estadoSenha.forcaTexto}</span>
          <FixedColorBar style={{marginTop: '10px'}} porcentagem={estadoSenha.forca} />
        </div>
        <div className="bottom">
          <Requisito texto="Entre 6 e 500 caracteres: " cumprido={estadoSenha.validoTamanho} />
          <Requisito texto="Presença de números: " cumprido={estadoSenha.validoNumeros} />
          <Requisito texto="Presença de maiúsculas: " cumprido={estadoSenha.validoMaiusculas} />
          <Requisito texto="Presença de especiais: " cumprido={estadoSenha.validoEspeciais} />
        </div>
      </InternalContainer>
    </FadeContainer>
  )
}

export default memo(PopupSenha)
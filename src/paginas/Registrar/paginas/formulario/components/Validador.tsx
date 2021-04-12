import React, {useContext, useEffect, useCallback} from 'react'
import {RegistrarContext} from '../../../Registrar'
import {FormularioPageContext} from '../FormularioPage'

const Validador: React.FC = () => {
  const {dados} = useContext(RegistrarContext)
  const {
    valido, setValido,
    enviando, setEnviando,
    inputNome, inputCurso,
    inputTurma, inputDisciplina,
    inputEmail, inputSenha1,
    inputSenha2, button,
    turmas, setTurmas,
    inputEmailErro, setInputEmailErro,
    inputSenha1Erro, setInputSenha1Erro,
    inputSenha2Erro, setInputSenha2Erro,
    popupSenhaOpen, setPopupSenhaOpen
  } = useContext(FormularioPageContext)
  
  return <></>
}

export default Validador
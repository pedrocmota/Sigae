import React, {useContext} from 'react'
import {FormularioPageContext} from '../FormularioPage'

const Validador: React.FC = () => {
  const {
    valido, setValido,
    turmas, setTurmas,
    enviando, setEnviando,
    inputNome, inputCurso,
    inputTurma, inputDisciplina,
    inputEmail, inputSenha1,
    inputSenha2, button,
    inputNomeErro, setInputNomeErro,
    inputCursoErro, setInputCursoErro,
    inputTurmaErro, setInputTurmaErro,
    inputDisciplinaErro, setInputDisciplinaErro,
    inputEmailErro, setInputEmailErro,
    inputSenha1Erro, setInputSenha1Erro,
    inputSenha2Erro, setInputSenha2Erro,
    inputEmailErroTexto, setInputEmailErroTexto,
    popupSenhaOpen, setPopupSenhaOpen
  } = useContext(FormularioPageContext)
  
  return <></>
}

export default Validador
import {IDadosRegistro} from '../../Types'
import {IOptions} from '../../../../componentes/Select/Types'
import {validarEmail} from '../../../../utils/Validar'
import {Senha} from '../../../../utils/Senha'
import {getRefValue, getArrayValue} from '../../../../utils/Utils'

export interface IValidadorProps {
  dados: IDadosRegistro,
  valido: boolean, setValido: React.Dispatch<React.SetStateAction<boolean>>,
  disciplinas: React.RefObject<IOptions[]>,
  inputNome: React.RefObject<HTMLInputElement>,
  inputCurso: React.RefObject<HTMLInputElement>,
  inputTurma: React.RefObject<HTMLInputElement>,
  inputDisciplina: React.RefObject<HTMLInputElement>,
  inputEmail: React.RefObject<HTMLInputElement>,
  inputSenha1: React.RefObject<HTMLInputElement>,
  inputSenha2: React.RefObject<HTMLInputElement>,
  inputEmailErro: boolean, setInputEmailErro: React.Dispatch<React.SetStateAction<boolean>>,
  inputSenha1Erro: boolean, setInputSenha1Erro: React.Dispatch<React.SetStateAction<boolean>>,
  inputSenha2Erro: boolean, setInputSenha2Erro: React.Dispatch<React.SetStateAction<boolean>>
}

export const validar = (props: IValidadorProps) => {
  const email = getRefValue(props.inputEmail)
  const senha1 = getRefValue(props.inputSenha1)
  const senha2 = getRefValue(props.inputSenha2)
  const senhaValida = Senha.calcularForcaSenha(senha1).valido

  const emailErro = email.length > 0 && !validarEmail(email)
  props.setInputEmailErro(emailErro)
  const senha1Erro = senha1.length > 0 && !senhaValida
  props.setInputSenha1Erro(senha1Erro)
  const senha2Erro = (senha2.length > 0 && senha1.length > 0) && senha1 != senha2
  props.setInputSenha2Erro(senha2Erro)

  const nomeValido = getRefValue(props.inputNome).length > 0
  const emailValido = email.length > 0 && !emailErro
  const senha1Valido = senha1.length > 0 && !senha1Erro
  const senha2Valido = senha2.length > 0 && !senha2Erro

  const tipoValido = () => {
    if(props.dados.tipo == 'DISCENTE') {
      const cursoValido = getRefValue(props.inputCurso).length > 0
      const turmaValido = getRefValue(props.inputTurma).length > 0
      return cursoValido && turmaValido
    }
    if(props.dados.tipo == 'DOCENTE') {
      const disciValido = getArrayValue<IOptions[]>(props.disciplinas).length > 0
      return disciValido
    }
    return true
  }

  props.setValido(
    emailValido && senha1Valido && senha2Valido && nomeValido && tipoValido
  )
} 
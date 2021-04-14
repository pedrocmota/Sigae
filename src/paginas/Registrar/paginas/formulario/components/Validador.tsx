import {IDadosRegistro} from '../../../../../types/Registrar'
import {IOptions} from '../../../../../componentes/selects/BasicSelect/BasicSelect'

interface IValidadorProps {
  dados: IDadosRegistro,
  valido: boolean, setValido: React.Dispatch<React.SetStateAction<boolean>>,
  enviando: boolean, setEnviando: React.Dispatch<React.SetStateAction<boolean>>,
  inputNome: React.RefObject<HTMLInputElement>,
  inputCurso: React.RefObject<HTMLInputElement>,
  inputTurma: React.RefObject<HTMLInputElement>,
  inputDisciplina: React.RefObject<IOptions[]>,
  inputEmail: React.RefObject<HTMLInputElement>,
  inputSenha1: React.RefObject<HTMLInputElement>,
  inputSenha2: React.RefObject<HTMLInputElement>,
  button: React.RefObject<HTMLButtonElement>,
  turmas: String[], setTurmas: React.Dispatch<React.SetStateAction<String[]>>,
  inputEmailErro: boolean, setInputEmailErro: React.Dispatch<React.SetStateAction<boolean>>,
  inputSenha1Erro: boolean, setInputSenha1Erro: React.Dispatch<React.SetStateAction<boolean>>,
  inputSenha2Erro: boolean, setInputSenha2Erro: React.Dispatch<React.SetStateAction<boolean>>,
  popupSenhaOpen: boolean, setPopupSenhaOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const validar = (props: IValidadorProps) => {
  
}
import {tiposUsuario} from '../../../../../types/DadosEstaticos'

export interface IEnvio {
  codigo: string,
  nomePreferencial: string,
  email: string,
  senha: string,
  curso?: string,
  turma?: string,
  disciplinas?: string[]
}

export const enviar = (props: IEnvio, callback: (sucesso: boolean) => void) => {
  console.log(props)
}
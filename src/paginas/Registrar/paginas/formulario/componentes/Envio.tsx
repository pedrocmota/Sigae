import {useContext} from 'react'
import {APIContext} from '../../../../../hooks/APIProvider'

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
  const {Requests} = useContext(APIContext)
  console.log(Requests)
}
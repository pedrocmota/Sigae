import {tipoCodigos} from '../../types/DadosEstaticos'

interface IRegistroRequest {
  checarValidade: (codigo: string, tipo: tipoCodigos, callback: (param: {
    valido: 'true' | 'false'
  }) => void) => void,

  recuperarSenha: (email: string, callback: (param: {
    retorno: 'OK'
  }) => void) => void
}

export default IRegistroRequest
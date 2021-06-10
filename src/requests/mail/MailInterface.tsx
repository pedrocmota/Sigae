import {tipoCodigos} from '../../types/DadosEstaticos'

interface IRegistroRequest {
  checarValidade: (codigo: string, tipo: tipoCodigos, callback: (param: {
    valido: 'true' | 'false'
  }) => void) => void,

  recuperarSenha: (email: string, callback: (param: {
    retorno: 'OK'
  }) => void) => void,

  enviarSenha: (codigo: string, senha: string, callback: (
    param: {
      retorno: 'OK'
    }
  ) => void, callbackError: (
    param: {
      erro: 'SENHA_IGUAL' |
      'CODIGO_INVALIDO' |
      'SENHA_INVALIDA' |
      'INTERNAL_SERVER_ERROR' |
      'UNKNOWN_ERROR'
    }
  ) => void) => void
}

export default IRegistroRequest
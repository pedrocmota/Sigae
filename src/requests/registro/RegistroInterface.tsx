import {IDadosRegistro} from '../../types/Registrar'

interface IRegistroRequest {
  getDadosRegistro: (codigo: string, callback: (
    param: IDadosRegistro
  ) => void, callbackError: (
    param: {
      erro: 
      'CODIGO_JA_USADO' | 
      'CODIGO_INVALIDO'
    }
  ) => void) => void
}

export default IRegistroRequest
import {IDadosIniciais} from '../../types/DadosEstaticos'
import {tokenErros} from '../../types/ErrosGenericos'

interface IDadosRequest {
  iniciais: (callback: (
    param: IDadosIniciais
  ) => void, callbackError: (
    param: {
      erro: tokenErros
    }
  ) => void) => void
}

export default IDadosRequest
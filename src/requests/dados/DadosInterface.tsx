import {IDadosIniciais} from '../../types/DadosEstaticos'

interface IDadosRequest {
  iniciais: (callback: (
    param: IDadosIniciais
  ) => void) => void,

  checarEmail: (email: string, callback: (
    param: {
      retorno: 'true' | 'false'
    }
  ) => void) => void
}

export default IDadosRequest
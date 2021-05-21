import {IDadosIniciais} from '../../types/DadosEstaticos'

interface IDadosRequest {
  iniciais: (callback: (
    param: IDadosIniciais
  ) => void) => void
}

export default IDadosRequest
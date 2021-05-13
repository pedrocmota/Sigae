import {Methods} from '../../hooks/APIProvider'
import IDadosRequest from './DadosInterface'

const Requests: IDadosRequest = {
  iniciais: (callback, callbackError) => {
    Methods.get('/dados/iniciais', {}, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },
}

export default Requests
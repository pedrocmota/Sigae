import {Methods} from '../../hooks/APIProvider'
import IDadosRequest from './DadosInterface'

const Requests: IDadosRequest = {
  iniciais: (callback) => {
    Methods.get('/dados/iniciais', {}, true, (resposta) => {
      callback(resposta)
    })
  },
  
  checarEmail: (email, callback) => {
    Methods.get('/dados/verificar/email', {
      email: email
    }, false, (resposta) => {
      callback(resposta)
    })
  },
}

export default Requests
import {Methods} from '../../hooks/APIProvider'
import IRegistroInterface from './RegistroInterface'

const Requests: IRegistroInterface = {
  getDadosRegistro: (codigo, callback, callbackError) => {
    Methods.get('/registro/dados', {
      codigo: codigo
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },
  enviar: (dados, callback, callbackError) => {
    Methods.get('/registro/registrar', {
      ...dados
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },
}

export default Requests
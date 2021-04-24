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
    Methods.post('/registro/registrar', {
      ...dados
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },

  getDadosValidar: (codigo, callback, callbackError) => {
    Methods.get('/registro/dados/validar', {
      codigo: codigo
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },

  validar: (codigo, callback, callbackError) => {
    Methods.post('/registro/validar', {
      codigo: codigo
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },

  reenviarEmail: (codigo, callback, callbackError) => {
    Methods.post('/registro/reenviarEmail', {
      codigo: codigo
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },

  cancelar: (codigo, callback, callbackError) => {
    Methods.post('/registro/cancelar', {
      codigo: codigo
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },
}

export default Requests
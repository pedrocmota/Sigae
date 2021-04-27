import {Methods} from '../../hooks/APIProvider'
import IMailInterface from './MailInterface'

const Requests: IMailInterface = {
  checarValidade: (codigo, tipo, callback) => {
    Methods.get('/mail/codigo/recuperarSenha/checar', {
      codigo: codigo,
      tipo: tipo,
    }, true, (resposta) => {
      callback(resposta)
    })
  },

  recuperarSenha: (email, callback) => {
    Methods.post('/mail/codigo/recuperarSenha/enviar', {
      email: email
    }, true, (resposta) => {
      callback(resposta)
    })
  },

  enviarSenha: (codigo, senha, callback, callbackError) => {
    Methods.post('/mail/codigo/recuperarSenha/validar', {
      codigo: codigo,
      senha: senha
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  }
}

export default Requests
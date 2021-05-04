import {Methods} from '../../hooks/APIProvider'
import ISessionRequest from './SessionInterface'

const Requests: ISessionRequest = {

  validar: (token, callback) => {
    Methods.get('/mail/codigo/recuperarSenha/enviar', {
      token: token
    }, false, (resposta) => {
      callback(resposta)
    })
  },

  logar: (matricula, senha, callback, callbackError) => {
    Methods.post('/session/auth', {
      matricula: matricula,
      senha: senha
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },

  recuperarSenha: (email, callback) => {
    Methods.post('/mail/codigo/recuperarSenha/enviar', {
      email: email
    }, true, (resposta) => {
      callback(resposta)
    })
  },
}

export default Requests
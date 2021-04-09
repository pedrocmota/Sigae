import {Methods} from '../../hooks/APIProvider'
import ISessionRequest from './SessionInterface'

const Requests: ISessionRequest = {
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

  recuperarSenha: (email: string, callback, callbackError) => {
    Methods.post('/mail/codigo/recuperarSenha/email', {
      email: email
    }, true, (resposta) => {
      callback(resposta)
    }, (erro) => {
      callbackError(erro)
    })
  },
}

export default Requests
import {Methods} from '../../hooks/APIProvider'
import IMailInterface from './MailInterface'

const Requests: IMailInterface = {
  checarValidade: (codigo, tipo, callback) => {
    Methods.post('/mail/codigo/recuperarSenha/enviar', {
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
}

export default Requests
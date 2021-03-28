import {Methods} from '../hooks/APIProvider'
import {IRequests} from './RequestsInterface'

const Requests: IRequests = {
  logar: (matricula, senha, callback) => {
    setTimeout(() => {
      if(matricula == '20190058123' && senha == 'ifba') {
        callback({token: 'IHJWEIUOWEHDIUWEHDWLEKJHDWEKLJDHWELKJEWHDLWJKEHD'})
      } else {
        if(matricula == '20190058123') {
          callback({erro: 'SENHA_INCORRETA'})
        } else {
          callback({erro: 'USUARIO_DESCONHECIDO'})
        }
      }
    }, 1000)
    // Methods.post('/profissionais/login', {
    //   matricula: matricula,
    //   senha: senha
    // }, true, (resposta) => {
    //   callback(resposta)
    // }, (erro) => {
    //   callback(erro)
    // })
  },
  recuperarSenha: (email: string, callback) => {
    setTimeout(() => {
      callback()
    }, 1000)
  }
}

export default Requests
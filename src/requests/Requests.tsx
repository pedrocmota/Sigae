import SessionRequests from './session/Session'
import {IRequests} from './RequestsInterface'

const Requests: IRequests = {
  session: SessionRequests
}

export default Requests

// const Requests: IRequests = {
//   logar: (matricula, senha, callback, callbackError) => {
//     Methods.post('/session/auth', {
//       matricula: matricula,
//       senha: senha
//     }, true, (resposta) => {
//       callback(resposta)
//     }, (erro) => {
//       callbackError(erro)
//     })
//   },

//   recuperarSenha: (email: string, callback, callbackError) => {
//     Methods.post('/mail/codigo/recuperarSenha/email', {
//       email: email
//     }, true, (resposta) => {
//       callback(resposta)
//     }, (erro) => {
//       callbackError(erro)
//     })
//   },
  
//   getDadosRegistro: (codigo, callback) => {
//     setTimeout(() => {
//       const codigos = ['00000000', '11111111', '22222222', '33333333']
//       const select = codigos.find(el => el == codigo)
//       if(select == undefined)
//       if(select == '00000000') {
//         callback({
//           erro: 'CODIGO_INVALIDO'
//         })
//       }
//       if(select == '11111111') {
//         callback({
//           retorno: {
//             codigo: codigo,
//             nome: 'Pedro Henrique Cerqueira Mota',
//             matricula: '201900589123',
//             tipo: 'Discente',
//             turmas: {
//             }
//           }
//         })
//       }
//       if(select == '22222222') {
//         // callback({
          
//         // })
//       }
//       if(select == '33333333') {
//         callback({
//           erro: 'CODIGO_UTILIZADO'
//         })
//       }
//     }, 1000)
//   },
// }

// export default Requests
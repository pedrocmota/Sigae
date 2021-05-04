interface ISessionRequest {

  validar: (token: string, callback: (param: {
    status: 'VALIDO' | 'EXPIRED' | 'DESTROYED_TOKEN' | 'INVALID_USER'
  }) => void) => void,

  logar: (matricula: string, senha: string, callback: (
    param: { token: string }
  ) => void, callbackError: (
    param: {
      erro: 
      'CONTA_NAO_REGISTRADA' | 
      'CONTA_ESPERANDO_VALIDACAO' |
      'CONTA_INATIVA' |
      'ESTADO_DA_CONTA_DESCONHECIDO' |
      'SENHA_INCORRETA' |
      'USUARIO_DESCONHECIDO'
    }
  ) => void) => void,

  recuperarSenha: (email: string, callback: (param: {
    retorno: 'OK'
  }) => void) => void
}

export default ISessionRequest
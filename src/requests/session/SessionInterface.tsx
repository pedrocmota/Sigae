interface ISessionRequest {
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
  }) => void, callbackError: (erro: any) => void) => void
}

export default ISessionRequest
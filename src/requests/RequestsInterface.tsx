export interface IMethods {
  post: (route: string, data: object, auth: boolean,
    callbackOk: (resposta: any) => void, callbackError?: (erro: any) => void
  ) => void,
  get: (route: string, data: object | null, auth: boolean,
    callbackOk: (resposta: any) => void, callbackError?: (erro: any) => void
  ) => void,
  put: (route: string, data: object, auth: boolean,
    callbackOk: (resposta: any) => void, callbackError?: (erro: any) => void
  ) => void
}

export interface IRequests {
  logar: (matricula: string, senha: string, callback: (
    param: {
      token?: string,
      erro?: 'SENHA_INCORRETA' | 'USUARIO_DESCONHECIDO'
    }
  ) => void, callbackError?: (erro: any) => void) => void,
  recuperarSenha: (email: string, callback: () => void, callbackError?: (erro: any) => void) => void
}

export interface IRequestError {
  erro?: requestsErrors
}

type requestsErrors = ''
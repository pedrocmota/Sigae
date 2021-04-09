import ISessionRequest from './session/SessionInterface'

export interface IMethods {
  post: (route: string, data: object, auth: boolean,
    callbackOk: (resposta: any) => void, callbackError?: (erro: any, statusCode: number) => void
  ) => void,
  get: (route: string, data: object | null, auth: boolean,
    callbackOk: (resposta: any) => void, callbackError?: (erro: any, statusCode: number) => void
  ) => void
}

export interface IRequests {
  session: ISessionRequest
}
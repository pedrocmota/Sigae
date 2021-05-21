import ISessionRequest from './session/SessionInterface'
import IDadosInterface from './dados/DadosInterface'
import IRegistroInterface from './registro/RegistroInterface'
import IMailInterface from './mail/MailInterface'

export interface IMethods {
  post: (route: string, data: object, auth: boolean,
    callbackOk: (resposta: any) => void, callbackError?: (erro: any, statusCode: number) => void
  ) => void,
  get: (route: string, data: object | null, auth: boolean,
    callbackOk: (resposta: any) => void, callbackError?: (erro: any, statusCode: number) => void
  ) => void
}

export interface IRequests {
  session: ISessionRequest,
  dados: IDadosInterface,
  registro: IRegistroInterface,
  mail: IMailInterface
}
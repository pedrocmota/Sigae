import {IDadosRegistro} from '../../paginas/Registrar/Types'
import {IEnvio as IEnvioRegistro} from '../../paginas/Registrar/RegistrarForm/componentes/Envio'

interface IRegistroRequest {
  getDadosRegistro: (codigo: string, callback: (
    param: IDadosRegistro
  ) => void, callbackError: (
    param: {
      erro:
      'CODIGO_INVALIDO' |
      'CODIGO_JA_USADO' |
      'ESPERANDO_VALIDACAO'
    }
  ) => void) => void,

  enviar: (props: IEnvioRegistro, callback: (
    param: {
      retorno: 'OK'
    }
  ) => void, callbackError: (
    param: {
      erro: IErroEnviar
    }
  ) => void) => void,

  getDadosValidar: (codigo: string, callback: (
    param: {
      nome: string,
      email: string
    }
  ) => void, callbackError: (
    param: {
      erro: 'CODIGO_INVALIDO'
    }
  ) => void) => void,

  validar: (codigo: string, callback: (
    param: {
      retorno: 'OK'
    }
  ) => void, callbackError: (
    param: {
      erro: 'CODIGO_INVALIDO' | 'ERRO_DESCONHECIDO'
    }
  ) => void) => void,

  reenviarEmail: (codigo: string, callback: (
    param: {
      retorno: 'OK'
    }
  ) => void, callbackError: (
    param: {
      erro: 'CODIGO_INVALIDO' | 'ERRO_DESCONHECIDO_EMAIL'
    }
  ) => void) => void,

  cancelar: (codigo: string, callback: (
    param: {
      retorno: 'OK'
    }
  ) => void, callbackError: (
    param: {
      erro: 'CODIGO_INVALIDO' | 'CODIGO_NAO_ATIVO' | 'ERRO_DESCONHECIDO'
    }
  ) => void) => void

}

export type IErroEnviar =
  'CODIGO_INVALIDO' |
  'CODIGO_JA_USADO' |
  'NOME_PREFERENCIAL_INVALIDO' |
  'EMAIL_INVALIDO' |
  'EMAIL_JA_USADO' |
  'SENHA_INVALIDA' |
  'CURSO_INVALIDO' |
  'TURMA_INVALIDA' |
  'LISTA_DISCIPLINAS_INVALIDA' |
  'DISCIPLINA_DA_LISTA_INVALIDA' |
  'ERRO_DESCONHECIDO_EMAIL' |
  'ERRO_DESCONHECIDO' |
  'ERRO_DESCONHECIDO (2)'

export default IRegistroRequest
import {IDadosRegistro} from '../../types/Registrar'
import {IEnvio as IEnvioRegistro} from '../../paginas/Registrar/paginas/formulario/componentes/Envio'

interface IRegistroRequest {
  getDadosRegistro: (codigo: string, callback: (
    param: IDadosRegistro
  ) => void, callbackError: (
    param: {
      erro: 
      'CODIGO_INVALIDO' | 
      'CODIGO_JA_USADO'
    }
  ) => void) => void,
  enviar: (props: IEnvioRegistro, callback: (
    param: 'OK'
  ) => void, callbackError: (
    param: {
      erro: 
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
    }
  ) => void) => void
}

export default IRegistroRequest
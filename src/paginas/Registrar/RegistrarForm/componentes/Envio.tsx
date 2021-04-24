import {IAPIContext} from '../../../../hooks/APIProvider'
import {IPopupContext} from '../../../../hooks/PopupProvider'
import {IErroEnviar} from '../../../../requests/registro/RegistroInterface'

interface IContexto {
  API: IAPIContext,
  popups: IPopupContext,
  Toasts: any,
  setRedirectValidar: React.Dispatch<React.SetStateAction<boolean>>,
  setEnviando: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IEnvio {
  codigo: string,
  nomePreferencial: string,
  email: string,
  senha: string,
  curso?: string,
  turma?: string,
  disciplinas?: string[]
}

export const enviar = (contexto: IContexto, dados: IEnvio) => {
  contexto.popups.showPopup('confirmar', {
    texto: 'Verifique se seus dados estão corretos.',
    textoOk: 'Estão corretos',
    textoFechar: 'Vou revisá-los',
    onClose: (botao) => {
      if (botao == 'ok') {
        contexto.popups.showPopup('carregando', {
          titulo: 'Registrando usuário',
          texto: 'Isso não deve demorar muito'
        })
        contexto.API.Requests.registro.enviar(dados, () => {
          contexto.popups.close()
          contexto.setRedirectValidar(true)
        }, (param) => {
          contexto.popups.close()
          if (param.erro == 'CODIGO_INVALIDO') {
            return contexto.Toasts.addToast('Erro grave: O código é inválido', {appearance: 'error'})
          }
          if (param.erro == 'CODIGO_JA_USADO') {
            return contexto.Toasts.addToast('Erro grave: O código já foi usado', {appearance: 'error'})
          }
          if (param.erro == 'NOME_PREFERENCIAL_INVALIDO') {
            return contexto.Toasts.addToast('Erro grave: O nome preferencial é inválido', {appearance: 'error'})
          }
          if (param.erro == 'EMAIL_INVALIDO') {
            return contexto.Toasts.addToast('Erro grave: O e-mail digitado é inválido', {appearance: 'error'})
          }
          if (param.erro == 'EMAIL_JA_USADO') {
            return contexto.Toasts.addToast('O e-mail digitado já foi utilizado', {appearance: 'error'})
          }
          if (param.erro == 'SENHA_INVALIDA') {
            return contexto.Toasts.addToast('Erro grave: A senha digitada é inválida', {appearance: 'error'})
          }
          if (param.erro == 'CURSO_INVALIDO') {
            return contexto.Toasts.addToast('Erro grave: O curso digitado é inválido', {appearance: 'error'})
          }
          if (param.erro == 'TURMA_INVALIDA') {
            return contexto.Toasts.addToast('Erro grave: A turma digitada é inválida', {appearance: 'error'})
          }
          if (param.erro == 'LISTA_DISCIPLINAS_INVALIDA') {
            return contexto.Toasts.addToast('Erro grave: A lista de disciplinas é inválida', {appearance: 'error'})
          }
          if (param.erro == 'DISCIPLINA_DA_LISTA_INVALIDA') {
            return contexto.Toasts.addToast('Erro grave: Uma das disciplinas digitadas é inválida', {appearance: 'error'})
          }
          if (param.erro == 'ERRO_DESCONHECIDO_EMAIL') {
            return contexto.Toasts.addToast('Erro grave: Erro desconhecido ao enviar o e-mail', {appearance: 'error'})
          }
          if (param.erro == 'ERRO_DESCONHECIDO' || param.erro == 'ERRO_DESCONHECIDO (2)') {
            return contexto.Toasts.addToast('Erro desconhecido', {appearance: 'error'})
          }
        })
      }
    }
  })
}
import {IAPIContext} from '../../../../hooks/APIProvider'
import {IPopupContext} from '../../../../hooks/PopupProvider'
import {IErroEnviar} from '../../../../requests/registro/RegistroInterface'

interface IContexto {
  API: IAPIContext,
  popups: IPopupContext,
  Toasts: any,
  setRedirectLogin: React.Dispatch<React.SetStateAction<boolean>>,
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
    texto: 'Verifique se seus dados estão corretos',
    onClose: (botao) => {
      if (botao == 'ok') {
        
        // const popupID = contexto.popups.showPopup('carregando')
        setTimeout(() => {
          const popupID = contexto.popups.showPopup('carregando')
          // contexto.popups.removePopup(popupID)
        }, 3000)
        // contexto.setEnviando(true)
        // contexto.API.Requests.registro.enviar(dados, (param) => {
        //   contexto.setEnviando(false)
          
        // }, (param) => {
        //   contexto.setEnviando(false)
        //   erros(param.erro, contexto.Toasts)
        // })
      }
    }
  })
}

const erros = (param: IErroEnviar, Toasts: any) => {
  if (param == 'CODIGO_INVALIDO') {
    return Toasts.addToast('O código é inválido', {appearance: 'error'})
  }
  if (param == 'CODIGO_JA_USADO') {
    return Toasts.addToast('O código já foi usado', {appearance: 'error'})
  }
  if (param == 'NOME_PREFERENCIAL_INVALIDO') {
    return Toasts.addToast('O nome preferencial é inválid', {appearance: 'error'})
  }
  if (param == 'EMAIL_INVALIDO') {
    return Toasts.addToast('O e-mail digitado é inválido', {appearance: 'error'})
  }
  if (param == 'EMAIL_JA_USADO') {
    return Toasts.addToast('O e-mail digitado já foi utilizado', {appearance: 'error'})
  }
  if (param == 'SENHA_INVALIDA') {
    return Toasts.addToast('A senha digitada é inválida', {appearance: 'error'})
  }
  if (param == 'CURSO_INVALIDO') {
    return Toasts.addToast('O curso digitado é inválido', {appearance: 'error'})
  }
  if (param == 'TURMA_INVALIDA') {
    return Toasts.addToast('A turma digitada é inválida', {appearance: 'error'})
  }
  if (param == 'LISTA_DISCIPLINAS_INVALIDA') {
    return Toasts.addToast('A lista de disciplinas é inválida', {appearance: 'error'})
  }
  if (param == 'DISCIPLINA_DA_LISTA_INVALIDA') {
    return Toasts.addToast('Uma das disciplinas digitadas é inválida', {appearance: 'error'})
  }
  if (param == 'ERRO_DESCONHECIDO_EMAIL') {
    return Toasts.addToast('Erro desconhecido ao enviar o e-mail', {appearance: 'error'})
  }
  if (param == 'ERRO_DESCONHECIDO' || param == 'ERRO_DESCONHECIDO (2)') {
    return Toasts.addToast('Erro desconhecido', {appearance: 'error'})
  }
}
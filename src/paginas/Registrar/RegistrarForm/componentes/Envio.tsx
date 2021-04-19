import {IAPIContext} from '../../../../hooks/APIProvider'
import {IPopupContext} from '../../../../hooks/PopupProvider'

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
      if(botao == 'ok') {
        contexto.API.Requests.registro.enviar(dados, (param) => {

        }, (param) => {
          type Data = typeof param;
          erros<Data>(param, contexto.Toasts)
        })
      }
    }
  })
}

// const erros = (param, Toasts: any) => {

// }

const erros = <T extends unknown>(param: T, Toasts: any) => {
  
}
export type IPopupList =
  'confirmar' |
  'recuperarSenha' |
  'confirmarInscricao'

export interface IPopupInstance {
  id: string,
  popup: IPopup,
  props: IPopupInstanceProps
}

export interface IPopupInstanceProps {
  onClose?: (botao: popupBotoes, props: any) => void,
  titulo?: string,
  largura?: string,
  altura?: string,
  ocultarOK?: boolean,
  ocultarFechar?: boolean,
  textoOk?: string,
  textoFechar?: string,
  [x: string]: any
}

export interface IPopupProps {
  [key: string]: IPopup
}

export interface IPopup {
  id?: string,
  componente: React.FC<any> | null,
  titulo: string,
  largura?: string,
  altura?: string,
  ocultarOK?: boolean,
  ocultarFechar?: boolean,
  textoOk?: string,
  textoFechar?: string,
  closeOnClick?: boolean
}

export type popupBotoes = 'ok' | 'fechar'
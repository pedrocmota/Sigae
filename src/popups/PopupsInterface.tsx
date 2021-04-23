import {IAPIContext} from '../hooks/APIProvider'
import {ITemaContext} from '../hooks/TemaProvider'
import {IPopupContext} from '../hooks/PopupProvider'

export interface IPopupProps {
  titulo?: string,
  largura?: string,
  altura?: string,
  ocultarHeader?: boolean,
  mostrarOk?: boolean,
  mostrarFechar?: boolean,
  textoOk?: string,
  textoFechar?: string,
  closeOnClick?: boolean,
  resizeHeight?: boolean
}

export interface IPopupElement extends IPopupProps {
  componente: React.FC<any> | null
}

export interface IPopupInstanceProps extends IPopupProps {
  onClose?: (botao: popupBotoes, props?: any) => void,
  [x: string]: any
}

export interface IPopupKey {
  [key: string]: IPopupElement
}

export interface IPopupBody {
  APIContext: IAPIContext,
  TemaContext: ITemaContext,
  PopupContext: IPopupContext 
}

export type popupBotoes = 'ok' | 'fechar'
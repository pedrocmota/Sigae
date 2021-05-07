import React, {useContext, createContext} from 'react'
import SwalAlert, {SweetAlertIcon} from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Popups from '../popups/Popups'
import PopupBase from '../componentes/PopupBase/PopupBase'
import PopupStyles from '../componentes/PopupBase/PopupStyles'
import AlertaBase from '../componentes/PopupBase/AlertaBase'
import {APIContext} from './APIProvider'
import {ThemeContext} from './ThemeProvider'
import {compareVars} from '../utils/Utils'
import {IPopupInstanceProps} from '../popups/PopupsInterface'
import {Keys} from '../popups/Popups'

export interface IPopupContext {
  showPopup: (name: Keys, props?: IPopupInstanceProps) => void,
  close: () => void,
  showAlerta: (icon: SweetAlertIcon, titulo: string, texto: string) => void
}

export const PopupContext = createContext<IPopupContext>({} as IPopupContext)

export const PopupProvider: React.FC = (props) => {
  const Swal = withReactContent(SwalAlert)
  const showPopup = (name: Keys, propsPopup?: IPopupInstanceProps) => {
    const popupSelecionado = Popups[name]
    const props = popupSelecionado
    const Comp = popupSelecionado.componente as any

    const largura = compareVars(propsPopup?.largura, props.largura, '400px')
    const altura = compareVars(propsPopup?.altura, props.altura, '400px')
    const ocultarHeader = compareVars(propsPopup?.ocultarHeader, props.ocultarHeader, false)
    const titulo = compareVars(propsPopup?.titulo, props.titulo, '')
    const mostrarOk = compareVars(propsPopup?.mostrarOk, props.mostrarOk, false)
    const mostrarFechar = compareVars(propsPopup?.mostrarFechar, props.mostrarFechar, false)
    const textoOk = compareVars(propsPopup?.textoOk, props.textoOk, 'OK')
    const textoFechar = compareVars(propsPopup?.textoFechar, props.textoFechar, 'Fechar')
    const closeOnClick = compareVars(propsPopup?.closeOnClick, props.closeOnClick, true)
    const hideHeader = (mostrarOk == false && mostrarFechar == false)
    contexts.PopupContext = {showPopup, showAlerta, close}
    setTimeout(() => {
      Swal.fire({
        html: (
          <PopupBase titulo={titulo} hideHeader={ocultarHeader}
            hideFooter={(mostrarOk == false && mostrarFechar == false)}>
            <Comp {...contexts} {...props} {...propsPopup} />
          </PopupBase>
        ),
        didOpen: (componente) => {
          componente.style.width = largura
          componente.style.height = altura
          if (hideHeader) componente.classList.add('swal2-content-height-100')
        },
        showConfirmButton: mostrarOk,
        showDenyButton: mostrarFechar,
        confirmButtonText: textoOk,
        denyButtonText: textoFechar,
        allowOutsideClick: closeOnClick,
      }).then((result) => {
        if (typeof propsPopup?.onClose == 'function') {
          const botao = result.isConfirmed ? 'ok' : 'fechar'
          propsPopup.onClose(botao)
        }
      })
    }, 50)
  }

  const showAlerta = (icon: SweetAlertIcon, titulo: string, texto: string) => {
    Swal.fire({
      icon: icon,
      title: titulo,
      html: (
        <AlertaBase>
          {texto}
        </AlertaBase>
      )
    })
  }

  const close = () => {
    Swal.close()
  }

  const contexts = {
    APIContext: useContext(APIContext),
    TemaContext: useContext(ThemeContext),
    PopupContext: {showPopup, showAlerta, close}
  }

  return (
    <PopupContext.Provider value={{showPopup, showAlerta, close}}>
      <PopupStyles />
      {props.children}
    </PopupContext.Provider>
  )
}
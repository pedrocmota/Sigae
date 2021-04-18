import React, {useState, createContext} from 'react'
import $ from 'jquery'
import {v4 as uuidv4} from 'uuid'
import {IPopupInstance, IPopupInstanceProps, IPopup, IPopupList, IPopupProps} from '../popups/PopupsInterface'
import PopupContainer from '../componentes/Popups/PopupContainer/PopupContainer'
import Popups from '../popups/Popups'

import useStateCallback from '../hooks/usestates/useStateCallback'

interface IPopupContext {
  popups: IPopupInstance[],
  showPopup: (name: IPopupList, props?: IPopupInstanceProps) => void,
  removePopup: (id: string) => void
}

export const PopupContext = createContext<IPopupContext>({} as IPopupContext)

export const PopupProvider: React.FC = (props) => {
  const [popups, setPopups] = useStateCallback<IPopupInstance[]>([])
  const showPopup = (name: IPopupList, props?: IPopupInstanceProps) => {
    const id = uuidv4()
    const popupSelecionado = Popups[name]
    const novo:IPopupInstance = {
      id: id,
      props: props || {},
      popup: popupSelecionado
    }
    setPopups([...popups, novo], () => {
      $(`#${id}`).fadeIn(200)
      atualizarOpacidade([...popups, novo])
    })
  }
  const removePopup = (id: string) => {
    const popup = popups.find(el => el.id == id)
    if(popup) {
      $(`#${id}`).fadeOut(200, () => {
        const comps = popups.filter(el => el.id != id)
        setPopups(comps)
        atualizarOpacidade(comps)
      })
    }
  }

  const atualizarOpacidade = (comps: IPopupInstance[]) => {
    comps.forEach((popup, index) => {
      const id = popup.id
      const ultimo = index == (comps.length - 1)
      const ref = $(`#${id}`)
      if(comps.length == 0) {
        ref.removeClass('popup_opacity')
      } else {
        if(!ultimo) {
          if(comps.length > 1) ref.addClass('popup_opacity')
        } else {
          ref.removeClass('popup_opacity')
        }
      }
    })
  }
  return (
    <PopupContext.Provider value={{popups, showPopup, removePopup}}>
      <PopupContainer visible={popups.length > 0}/>
      {props.children}
    </PopupContext.Provider>
  )
}
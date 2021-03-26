import React, {useState, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import {IPopupInstance, IPopupInstanceProps, IPopup, IPopupList, IPopupProps} from '../popups/PopupsInterface'
import PopupContainer from '../componentes/Popups/PopupContainer/PopupContainer'
import Popups from '../popups/Popups'

interface IPopupContext {
  popups: IPopupInstance[],
  showPopup: (name: IPopupList, props?: IPopupInstanceProps) => void,
  removePopup: (id: string, setVisible: React.Dispatch<React.SetStateAction<boolean>>) => void
}

export const PopupContext = createContext<IPopupContext>({} as IPopupContext)

export const PopupProvider: React.FC = (props) => {
  const [popups, setPopups] = useState<IPopupInstance[]>([])
  const [forceHidden, setForceHidden] = useState(false)
  const showPopup = (name: IPopupList, props?: IPopupInstanceProps) => {
    if(props == undefined) props = {}
    const popupSelecionado = Popups[name]
    const novo:IPopupInstance = {
      id: uuidv4(),
      props: props,
      popup: popupSelecionado
    }
    setPopups([...popups, novo])
  }
  const removePopup = (id: string, setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    const popup = popups.find(el => el.id == id)
    if(popup) {
      if(popups.length == 1) setForceHidden(true)
      setVisible(false)
      setTimeout(() => {
        setPopups(popups.filter(el => el.id != id))
        setForceHidden(false)
      }, 350)
    }
  }
  const visivel = forceHidden ? false : popups.length > 0
  return (
    <PopupContext.Provider value={{popups, showPopup, removePopup}}>
      <PopupContainer visible={visivel}/>
      {props.children}
    </PopupContext.Provider>
  )
}
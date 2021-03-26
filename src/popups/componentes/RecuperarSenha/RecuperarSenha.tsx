import React, {useContext} from 'react'
import {PopupContext} from '../../../hooks/PopupProvider'

interface IRecuperarSenha {
  teste?: string
}

const RecuperarSenha: React.FC<IRecuperarSenha> = (props) => {
  const {showPopup} = useContext(PopupContext)
  const open = () => {
    showPopup('confirmar')
  }
  return (
    <div>
      {props.teste}
      <input/>
      <a onClick={open}>Abrir</a>
    </div>
  )
}

export default RecuperarSenha
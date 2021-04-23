import React, {useState, useContext} from 'react'
import {PopupContext} from '../../hooks/PopupProvider'
import useStateCallback from '../../hooks/usestates/useStateCallback'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Teste: React.FC = () => {
  const {showPopup} = useContext(PopupContext)
  return (
    <div>
      <button onClick={() => {
        showPopup('confirmarRegistro', {
        })
      }}>
        Abrir
      </button>
    </div>
  )
}

export default Teste
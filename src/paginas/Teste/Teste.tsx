import React, {useContext} from 'react'
import {PopupContext} from '../../hooks/PopupProvider'

const Teste: React.FC = () => {
  const {showPopup} = useContext(PopupContext)
  return (
    <div>
      <button onClick={() => {
        
      }}>
        Testar
      </button>
    </div>
  )
}

export default Teste
import React, {useState, useRef, useContext} from 'react'
import Form from '../../../componentes/Form/Form'
import InputCode from '../../../componentes/inputs/InputCode/InputCode'
import {APIContext} from '../../../hooks/APIProvider'

import {PopupContext} from '../../../hooks/PopupProvider'

interface IConfirmarInscricao {
  id: string,
  codigo: string
}

const ConfirmarInscricao: React.FC<IConfirmarInscricao> = (props) => {
  const [erro, setErro] = useState(false)
  const inputCodigo = useRef<HTMLInputElement>()
  const {Requests} = useContext(APIContext)

  const {showPopup} = useContext(PopupContext)
  return (
    <Form method="GET" name="FormConfirmarInscricao">
      <InputCode id="CodigoValidar" mask="octaCode" spellCheck={false}
        placeholder="Digite o código enviado" error={erro}
        onFocus={() => {setErro(false)}} ref={inputCodigo} />
      <button onClick={() => {
        showPopup('confirmar', {
          onClose: () => {
            
          }
        })
      }}>
        clique aqui
      </button>
    </Form>
  )
}

export default ConfirmarInscricao
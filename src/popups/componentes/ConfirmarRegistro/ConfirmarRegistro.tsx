import React, {useState, useRef} from 'react'
import InputCode from '../../../componentes/inputs/InputCode/InputCode'
import {StyledForm} from './styles'

interface IConfirmarInscricao {
  id: string,
  codigo: string
}

const ConfirmarInscricao: React.FC<IConfirmarInscricao> = (props) => {
  const [erro, setErro] = useState(false)
  const inputCodigo = useRef<HTMLInputElement>()

  return (
    <>
      <div>
        Enviamos um código de validação para o seu e-mail.
        Verifique sua caixa de mensagens ou seu lixo eletrônico.
      </div>
      <StyledForm method="GET" name="FormConfirmarInscricao">
        <InputCode id="CodigoValidar" mask="octaCode" spellCheck={false}
          placeholder="Digite o código enviado" error={erro}
          onFocus={() => {setErro(false)}} ref={inputCodigo} />
      </StyledForm>
    </>
  )
}

export default ConfirmarInscricao
import React, {useState, useRef, memo} from 'react'
import {HTMLInputMaskElement} from '../../../../componentes/inputs/GenericInput/GenericInput'
import Form from '../.././../../componentes/Form/Form'
import Button from '../../../../componentes/Button/Button'
import Spinner from '../../../../componentes/Spinner/Spinner'
import {Container, InputContainer, CustumInputText} from './styles'

const CodigoPage: React.FC = () => {
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState(false)
  const inputCodigo = useRef<HTMLInputMaskElement | null>(null)
  const enviar = () => {
    const codigo = inputCodigo.current!.inputElement!.value
    if(codigo.length > 0) {
      
    } else {
      setErro(true)
    }
  }

  const onFocus = () => {
    setErro(false)
  }
  return (
    <Container>
      <InputContainer>
        <Form name="FormCodigo" method="GET">
          <CustumInputText id="CodigoInscricao" mask="octaCode" error={erro} placeholder="Digite o código de inscrição" 
            onFocus={onFocus} ref={inputCodigo}/>
          <Button type="submit" tipo="generic" margintop={15} onClick={enviar}>
            {!enviando && (
              <div>Enviar código</div>
            )}
            {enviando && (
              <Spinner />
            )}
          </Button>
        </Form>
      </InputContainer>
    </Container>
  )
}

export default memo(CodigoPage)
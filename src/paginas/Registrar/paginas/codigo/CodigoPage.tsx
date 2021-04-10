import React, {useState, useContext, useRef, memo} from 'react'
import Form from '../.././../../componentes/Form/Form'
import InputCode from '../../../../componentes/inputs/InputCode/InputCode'
import Button from '../../../../componentes/Button/Button'
import Spinner from '../../../../componentes/Spinner/Spinner'
import {RegistrarContext} from '../../Registrar'
import {APIContext} from '../../../../hooks/APIProvider'
import {useToasts} from 'react-toast-notifications'
import {HTMLInputMaskElement} from '../../../../componentes/inputs/GenericInput/GenericInput'
import {Container, InputContainer} from './styles'

const CodigoPage: React.FC = () => {
  const {irParaForm} = useContext(RegistrarContext)
  const {Requests} = useContext(APIContext)
  const {addToast} = useToasts()
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState(false)
  const inputCodigo = useRef<HTMLInputMaskElement | null>(null)
  const enviar = () => {
    const codigo = inputCodigo.current!.inputElement!.value
    if (codigo.length > 0) {
      setEnviando(true)
      Requests.registro.getDadosRegistro(codigo, (param) => {
        setEnviando(false)
        irParaForm(param)
      }, (param) => {
        setEnviando(false)
        if(param.erro == 'CODIGO_INVALIDO') {
          return addToast('Esse código não é válido', {appearance: 'error'})
        }
        if(param.erro == 'CODIGO_JA_USADO') {
          return addToast('Esse código já fou utilizado', {appearance: 'error'})
        }
      })
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
          <InputCode id="CodigoInscricao" mask="octaCode" spellCheck={false}
            placeholder="Digite o código de inscrição" error={erro}
            onFocus={onFocus} ref={inputCodigo} />
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
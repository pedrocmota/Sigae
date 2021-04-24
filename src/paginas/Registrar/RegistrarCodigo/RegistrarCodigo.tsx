import React, {useState, useRef, memo} from 'react'
import {Redirect} from 'react-router-dom'
import Loading from '../../../componentes/Loading/Loading'
import Footer from '../../../componentes/pages/Footer/Footer'
import Form from '../../../componentes/Form/Form'
import InputCode from '../../../componentes/inputs/InputCode/InputCode'
import Button from '../../../componentes/Button/Button'
import {HTMLInputMaskElement} from '../../../componentes/inputs/GenericInput/GenericInput'
import {Container, Top, Main, Bottom, InputContainer} from './styles'
import {ReactComponent as Sigae} from '../../../assets/sigae.svg'

const RegistrarCodigo: React.FC = () => {
  const [redirecionarForm, setRedirecionarForm] = useState(false)
  const [erro, setErro] = useState(false)
  const inputCodigo = useRef<HTMLInputMaskElement | null>(null)
  const enviar = () => {
    const codigo = inputCodigo.current!.inputElement!.value
    if (codigo.length > 0) {
      setRedirecionarForm(true)
    } else {
      setErro(true)
    }
  }
  return (
    <>
      {redirecionarForm && (
        <Redirect push to={`/registrar/${inputCodigo.current!.inputElement!.value}`} />
      )}
      <Loading timer={300} />
      <Container>
        <Top>
          <Sigae />
          <h1>Digite o código de inscrição</h1>
        </Top>
        <Main>
          <InputContainer>
            <Form name="FormCodigo" method="GET">
              <InputCode id="CodigoInscricao" mask="octaCode" spellCheck={false}
                placeholder="Digite o código de inscrição" error={erro}
                onFocus={() => setErro(false)} ref={inputCodigo} />
              <Button type="button" tipo="generic" margintop={15} onClick={enviar}>
                Enviar código
              </Button>
            </Form>
          </InputContainer>
        </Main>
        <Bottom>
          <Footer />
        </Bottom>
      </Container>
    </>
  )
}

export default memo(RegistrarCodigo)
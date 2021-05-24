import React, {useState, useContext, memo} from 'react'
import {Redirect} from 'react-router-dom'
import Loading from '../../../componentes/Loading/Loading'
import Footer from '../../Main/componentes/Footer/Footer'
import Form from '../../../componentes/Form/Form'
import Button from '../../../componentes/Button/Button'
import {PopupContext} from '../../../hooks/PopupProvider'
import {Container, Top, Main, Bottom, InputContainer, StyledInputNumber, Ajuda} from './styles'
import {ReactComponent as Sigae} from '../../../assets/sigae.svg'

const RegistrarCodigo: React.FC = () => {
  const [redirecionarForm, setRedirecionarForm] = useState(false)
  const [botaoValido, setBotaoValido] = useState(false)
  const [codigo, setCodigo] = useState('')
  const {showPopup} = useContext(PopupContext)
  return (
    <>
      {redirecionarForm && (
        <Redirect push to={`/registrar/${codigo.toUpperCase()}`} />
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
              <StyledInputNumber type='text' fields={8} inputMode="latin" name="CodigoInscricao"
                onChange={(v) => {
                  setCodigo(v)
                  setBotaoValido(v.length == 8)
                }} onAction={() => setRedirecionarForm(true)}/>
              <Button type="button" tipo="generic" margintop={15} disabled={!botaoValido}
                onClick={() => {
                  setRedirecionarForm(true)
                }}>
                Enviar código
              </Button>
              <Ajuda onClick={() => showPopup('ajudaCodigo')}>
                Como consigo um código?
              </Ajuda>
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
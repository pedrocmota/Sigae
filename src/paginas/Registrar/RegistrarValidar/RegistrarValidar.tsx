import React, {useState, useEffect, useContext, useRef, memo} from 'react'
import {Redirect, useParams} from 'react-router-dom'
import LoadingPersistent from '../../../componentes/LoadingPersistent/LoadingPersistent'
import Footer from '../../../componentes/pages/Footer/Footer'
import InputCode from '../../../componentes/inputs/InputCode/InputCode'
import Button from '../../../componentes/Button/Button'
import Spinner from '../../../componentes/Spinner/Spinner'
import {APIContext} from '../../../hooks/APIProvider'
import {PopupContext} from '../../../hooks/PopupProvider'
import {useToasts} from 'react-toast-notifications'
import {HTMLInputMaskElement} from '../../../componentes/inputs/GenericInput/GenericInput'
import {Container, Top, Main, Bottom} from '../styles'
import {FormContainer, Text, Lista, Form, BottomRow, Links} from './styles'
import {ReactComponent as Sigae} from '../../../assets/sigae.svg'
import {

} from '@material-ui/icons'

interface IDados {
  nome: string,
  email: string
}

const RegistrarForm: React.FC = () => {
  const {codigo} = useParams<{codigo: string}>()
  const {Requests} = useContext(APIContext)
  const Popups = useContext(PopupContext)
  const {addToast} = useToasts()

  const [show, setShow] = useState(false)
  const [dados, setDados] = useState<IDados>()
  const [erro, setErro] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [redirectCodigo, setRedirectCodigo] = useState(false)
  const [redirectLogin, setRedirectLogin] = useState(false)

  const inputCodigo = useRef<HTMLInputMaskElement | null>(null)

  useEffect(() => {
    Requests.registro.getDadosValidar(codigo, (param) => {
      setDados(param)
      setShow(true)
    }, () => {
      setRedirectCodigo(true)
      addToast('Esse código é inválido', {appearance: 'error'})
    })
  }, [])

  const enviar = () => {
    if(!enviando) {
      const codigo = inputCodigo.current!.inputElement!.value
      if (codigo.length > 0) {
        setEnviando(true)
        Requests.registro.validar(codigo, () => {
          addToast('Você foi registrado com sucesso!', {appearance: 'success',})
          setRedirectLogin(true)
        }, (param) => {
          if(param.erro == 'CODIGO_INVALIDO') {
            addToast('Esse código é inválido', {appearance: 'error'})
          }
          if(param.erro == 'ERRO_DESCONHECIDO') {
            addToast('Erro desconhecido', {appearance: 'error'})
          }
        })
      } else {
        setErro(true)
      }
    }
  }
  return (
    <>
      {redirectCodigo && (
        <Redirect to="/registrar" />
      )}
      {redirectLogin && (
        <Redirect to="/login" />
      )}
      <LoadingPersistent visible={!show} />
      <Container>
        <Top>
          <Sigae />
          <h1>Resta apenas esta etapa</h1>
        </Top>
        <Main>
          <FormContainer>
            <Text>
              Para terminar o registro de sua conta no SiGAÊ, é
              necessário seguir as etapas descritas na lista abaixo:
            </Text>
            <Lista>
              <div className="row">
                <div className="col1">• Acesse seu e-mail: </div>
                <b>{dados?.email}</b>
              </div>
              <div className="row">
                • Verifique se o SiGAÊ enviou um e-mail contendo um código.
              </div>
              <div className="row">
                • Verifique se o e-mail não foi para o lixo eletrônico.
              </div>
              <div className="row">
                • Por último, copie o código no campo abaixo.
              </div>
            </Lista>
            <Form method="POST" name="FormCodigoValidacao">
              <InputCode id="CodigoValidacao" mask="octaCode" spellCheck={false}
                placeholder="Digite o código de validação" error={erro}
                onFocus={() => setErro(false)} ref={inputCodigo} />
              <Button type="button" tipo="generic" margintop={15} onClick={enviar}>
                {!enviando && (
                  <div>Enviar código</div>
                )}
                {enviando && (
                  <Spinner/>
                )}
              </Button>
              <BottomRow>
                <Links href="#" onClick={(e) => {
                  e.preventDefault()
                }}>Cancelar inscrição</Links>
                <Links href="#" onClick={(e) => {
                  e.preventDefault()
                }}>Reenviar e-mail</Links>
              </BottomRow>
            </Form>
          </FormContainer>
        </Main>
        <Bottom>
          <Footer />
        </Bottom>
      </Container>
    </>
  )
}

export default memo(RegistrarForm)
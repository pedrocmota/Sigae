import React, {useState, useEffect, useContext, useRef, memo} from 'react'
import {Redirect, useParams} from 'react-router-dom'
import LoadingPersistent from '../../../componentes/LoadingPersistent/LoadingPersistent'
import Footer from '../../Main/componentes/Footer/Footer'
import InputCode from '../../../componentes/inputs/InputCode/InputCode'
import Button from '../../../componentes/Button/Button'
import Spinner from '../../../componentes/Spinner/Spinner'
import {APIContext} from '../../../hooks/APIProvider'
import {PopupContext} from '../../../hooks/PopupProvider'
import {useToasts} from 'react-toast-notifications'
import useIsMounted from '../../../hooks/useeffects/useIsMounted'
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
  const isMounted = useIsMounted()

  const botao = useRef<HTMLButtonElement>(null)

  const [show, setShow] = useState(false)
  const [dados, setDados] = useState<IDados>()
  const [erro, setErro] = useState(false)

  const [enviando, setEnviando] = useState(false)
  const [enviandoEmail, setEnviandoEmail] = useState(false)
  const [enviandoCancelar, setEnviandoCancelar] = useState(false)

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
    if(!enviando && !enviandoCancelar && !enviandoEmail) {
      const codigo = inputCodigo.current!.inputElement!.value
      if (codigo.length > 0) {
        setEnviando(true)
        Requests.registro.validar(codigo, () => {
          setEnviando(false)
          setRedirectLogin(true)
          addToast('Você foi registrado com sucesso!', {appearance: 'success'})
        }, (param) => {
          setEnviando(false)
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

  const reenviarEmail = () => {
    if(!enviando && !enviandoCancelar && !enviandoEmail) {
      setEnviandoEmail(true)
      Requests.registro.reenviarEmail(codigo, () => {
        addToast('Email reenviado com sucesso!', {appearance: 'success'})
        setTimeout(() => {
          if(isMounted()) {
            setEnviandoEmail(false)
          }
        }, 3000)
      }, () => {
        addToast('Erro desconhecido ao reenviar e-mail', {appearance: 'error'})
      })
    }
  }

  const cancelar = () => {
    if(!enviando && !enviandoCancelar && !enviandoEmail) {
      Popups.showPopup('confirmar', {
        titulo: 'Tem certeza?',
        altura: '255px',
        texto: `
          A sua inscrição será cancelada!
          Mas você poderá refazê-la com o
          seu código de acesso antigo.

          Deseja continuar?
        `,
        onClose: (botao) => {
          if(botao == 'ok') {
            setEnviandoCancelar(true)
            Requests.registro.cancelar(codigo, () => {
              addToast('Sua inscrição foi cancelada com sucesso!', {appearance: 'success'})
              setRedirectCodigo(true)
            }, () => {
              addToast('Erro desconhecido ao cancelar a inscrição', {appearance: 'error'})
            })
          }
        }
      })
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
              <InputCode id="CodigoValidacao" mask="octaCode" autoCapitalize="characters" 
                spellCheck={false} error={erro}
                placeholder="Digite o código de validação"
                onFocus={() => setErro(false)} ref={inputCodigo} onKeyUp={(e) => {
                  if(e.key == 'Enter') {
                    botao.current?.click()
                  }
                }}/>
              <Button type="submit" tipo="generic" margintop={15} onClick={enviar} ref={botao}>
                {!enviando && (
                  <div>Enviar código</div>
                )}
                {enviando && (
                  <Spinner/>
                )}
              </Button>
              <BottomRow>
                <Links href="#" disabled={enviandoCancelar} onClick={(e) => {
                  e.preventDefault()
                  cancelar()
                }}>Cancelar inscrição</Links>
                <Links href="#" disabled={enviandoEmail} onClick={(e) => {
                  e.preventDefault()
                  reenviarEmail()
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
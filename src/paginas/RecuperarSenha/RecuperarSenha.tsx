import React, {useState, useEffect, useRef, useContext} from 'react'
import useQuery from '../../hooks/misc/useQuery'
import LoadingPersistent from '../../componentes/LoadingPersistent/LoadingPersistent'
import InputLogin from '../../componentes/inputs/InputLogin/InputLogin'
import Button from '../../componentes/Button/Button'
import Spinner from '../../componentes/Spinner/Spinner'
import PopupSenha from '../../componentes/PopupSenha/PopupSenha'
import {APIContext} from '../../hooks/APIProvider'
import {Container, Center, ErrorContainer, Form, PopupSenhaContainer} from './styles'
import Sigae from '../../assets/sigae.svg'

const RecuperarSenha: React.FC = () => {
  const codigo = useQuery().get('codigo')
  const {Requests} = useContext(APIContext)

  const [show, setShow] = useState(false)
  const [valido, setValido] = useState(false)

  const senha1 = useRef<HTMLInputElement>()
  const senha2 = useRef<HTMLInputElement>()

  const [erro1, setErro1] = useState(false)
  const [erro2, setErro2] = useState(false)

  const [enviando, setEnviando] = useState(false)

  const [popupSenhaOpen, setPopupSenhaOpen] = useState(false)
  const [senha, setSenha] = useState('')

  useEffect(() => {
    Requests.mail.checarValidade(`${codigo}`, 'RECUPERACAO_SENHA', (param) => {
      if (param.valido == 'true') setValido(true)
      setShow(true)
    })
  }, [])
  return (
    <>
      <LoadingPersistent visible={!show} />
      <Container>
        <Center>
          {valido && (
            <>
              <img src={Sigae} height={'85px'} />
              <h1>Digite uma nova senha</h1>
              <Form method="POST" name="formRecuperar">
                <InputLogin id="senha1" placeholder="Digite sua senha" 
                  type="password" error={erro1} height={'45px'}
                  ref={senha1} onFocus={() => {
                    setErro1(false)
                  }}>
                </InputLogin>
                <InputLogin id="senha2" placeholder="Repita sua senha" 
                  type="password" error={erro2} height={'45px'}
                  margintop={12} ref={senha2} onFocus={() => {
                    setErro2(false)
                    setPopupSenhaOpen(true)
                  }}
                  onBlur={() => {
                    setPopupSenhaOpen(false)
                    setPopupSenhaOpen(false)
                  }}>
                </InputLogin>
                <PopupSenhaContainer>
                  <PopupSenha visible={popupSenhaOpen} senha={senha} timer={200} />
                </PopupSenhaContainer>
                <Button tipo="generic" margintop={15}>
                  {enviando && (
                    <Spinner/>
                  )}
                  {!enviando && (
                    <div>Alterar senha</div>
                  )}
                </Button>
              </Form>
            </>
          )}
          {!valido && (
            <>
              <ErrorContainer>
                <b>{codigo}</b>
                <span>Não é um código válido</span>
              </ErrorContainer>
            </>
          )}
        </Center>
      </Container>
    </>
  )
}

export default RecuperarSenha
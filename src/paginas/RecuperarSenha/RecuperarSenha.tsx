import React, {useState, useEffect, useRef, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import useQuery from '../../hooks/misc/useQuery'
import LoadingPersistent from '../../componentes/LoadingPersistent/LoadingPersistent'
import InputText from '../../componentes/inputs/InputText/InputText'
import Button from '../../componentes/Button/Button'
import Spinner from '../../componentes/Spinner/Spinner'
import ShowPassword from '../../componentes/ShowPassword/ShowPassword'
import PopupSenha from '../../componentes/PopupSenha/PopupSenha'
import {APIContext} from '../../hooks/APIProvider'
import {useToasts} from 'react-toast-notifications'
import {Senha as senhaValida} from '../../utils/Senha'
import {Container, Center, ErrorContainer, Form, PopupSenhaContainer, Alerta, InputContainer} from './styles'
import Sigae from '../../assets/sigae.svg'

const RecuperarSenha: React.FC = () => {
  const codigo = useQuery().get('codigo')
  const {Requests} = useContext(APIContext)
  const {addToast} = useToasts()

  const [show, setShow] = useState(false)
  const [valido, setValido] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const inputSenha1 = useRef<HTMLInputElement>()
  const inputSenha2 = useRef<HTMLInputElement>()

  const [erro1, setErro1] = useState(false)
  const [erro2, setErro2] = useState(false)

  const [botaoValido, setBotaoValido] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const [popupSenhaOpen, setPopupSenhaOpen] = useState(false)
  const [senha, setSenha] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    Requests.mail.checarValidade(`${codigo}`, 'RECUPERACAO_SENHA', (param) => {
      if (param.valido == 'true') setValido(true)
      setShow(true)
    })
  }, [])

  const enviar = () => {
    if(!enviando) {
      setEnviando(true)
      Requests.mail.enviarSenha(codigo as string, inputSenha1.current!.value, (param) => {
        setEnviando(false)
        setRedirect(true)
        addToast('Sua senha foi alterada com sucesso!', {appearance: 'success'})
      }, (param) => {
        setEnviando(false)
        if(param.erro == 'CODIGO_INVALIDO') {
          return addToast('Código inválido', {appearance: 'error'})
        }
        if(param.erro == 'SENHA_INVALIDA') {
          return addToast('Senha inválida', {appearance: 'error'})
        }
        if(param.erro == 'SENHA_IGUAL') {
          return addToast('A senha digitada é igual a anterior', {appearance: 'error'})
        }
        if(param.erro == 'INTERNAL_SERVER_ERROR') {
          return addToast('Erro interno', {appearance: 'error'})
        }
        if(param.erro == 'UNKNOWN_ERROR') {
          return addToast('Erro desconhecido', {appearance: 'error'})
        }
      })
    }
  }

  return (
    <>
      {redirect && (
        <Redirect to="/login"/>
      )}
      <LoadingPersistent visible={!show} />
      <Container>
        <Center>
          {valido && (
            <>
              <img src={Sigae} height={'85px'} />
              <h1>Digite uma nova senha</h1>
              <Form method="POST" name="formRecuperar">
                <InputContainer>
                  <InputText id="password1" type={
                    showPassword ? 'text' : 'password'
                  } paddingRight placeholder="Digite sua senha" disabled={enviando}
                    error={erro1} margintop={12} height={'45px'} ref={inputSenha1} onChange={() => {
                      const senha1 = inputSenha1.current!.value
                      const senha2 = inputSenha2.current!.value
                      setSenha(senha1)
                      setPopupSenhaOpen(true)

                      setErro1(() => {
                        if (senha1.length == 0) return false
                        return !senhaValida.calcularForcaSenha(senha1).valido
                      })

                      setBotaoValido(() => {
                        const valido = senhaValida.calcularForcaSenha(senha1).valido
                        if (!valido) return false
                        if (senha1 != senha2) return false
                        return true
                      })
                    }} onFocus={() => {
                      setPopupSenhaOpen(true)
                    }} onBlur={() => {
                      setPopupSenhaOpen(false)
                    }} />
                  <ShowPassword selecionado={showPassword} top={22} onClick={() => {
                    setShowPassword(!showPassword)
                  }} />
                </InputContainer>
                <InputContainer>
                  <InputText id="password2" type={
                    showPassword ? 'text' : 'password'
                  } paddingRight placeholder="Repita sua senha" disabled={enviando}
                    error={erro2} margintop={12} height={'45px'} ref={inputSenha2} onChange={() => {
                      const senha1 = inputSenha1.current!.value
                      const senha2 = inputSenha2.current!.value

                      setErro2(() => {
                        if (senha2.length == 0) return false
                        return senha1 != senha2
                      })

                      setBotaoValido(() => {
                        const valido = senhaValida.calcularForcaSenha(senha1).valido
                        if (!valido) return false
                        if (senha1 != senha2) return false
                        return true
                      })
                    }} />
                  <ShowPassword selecionado={showPassword} top={22} onClick={() => {
                    setShowPassword(!showPassword)
                  }} />
                </InputContainer>
                <PopupSenhaContainer>
                  <PopupSenha visible={popupSenhaOpen} senha={senha} timer={200} />
                </PopupSenhaContainer>
                <Alerta visible={erro2}>
                  ● As senhas digitadas não correspondem
                </Alerta>
                <Button cor="generic" disabled={!botaoValido} margin={{top: 15}} onClick={enviar}>
                  {enviando && (
                    <Spinner />
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
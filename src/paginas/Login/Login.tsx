import React, {memo, useContext, useState, useRef} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Loading from '../../componentes/Loading/Loading'
import Form from '../../componentes/Form/Form'
import InputLogin from '../../componentes/InputLogin/InputLogin'
import Spinner from '../../componentes/Spinner/Spinner'
import ShowPassword from '../../componentes/ShowPassword/ShowPassword'
import {APIContext} from '../../hooks/APIProvider'
import {PopupContext} from '../../hooks/PopupProvider'
import {useToasts} from 'react-toast-notifications'
import {
  Container, Center, Header, Main, LinksContainer,
  LinksColuna, LinksRow, Footer, StyledButton
} from './styles'
import {InputErrorIcon} from '../../componentes/Icons/Icons'
import {ReactComponent as Sigae} from '../../assets/sigae.svg'

const Login: React.FC = () => {
  const [enviando, setEnviando] = useState(false)
  const [erro1, setErro1] = useState(false)
  const [erro2, setErro2] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [redirectMain, setRedirectMain] = useState(false)
  const [redirectRegistrar, setRedirectRegistrar] = useState(false)
  const [redirectRegistrarCodigo, setRedirectRegistrarCodigo] = useState('')
  const {Requests, Token} = useContext(APIContext)
  const {showPopup} = useContext(PopupContext)
  const {addToast} = useToasts()
  const inputMatricula = useRef<HTMLInputElement | null>(null)
  const inputSenha = useRef<HTMLInputElement | null>(null)
  const botao = useRef<HTMLButtonElement | null>(null)

  const onMatriculaTyped = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const tamanho = e.currentTarget?.value?.length
    if (e.key === 'Enter') inputSenha.current?.focus()
    if (tamanho == 11) inputSenha.current?.focus()
  }

  const onSenhaTyped = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') botao.current?.click()
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id
    if (id == 'matricula') setErro1(false)
    if (id == 'senha') setErro2(false)
  }

  const logar = () => {
    const matricula = inputMatricula.current?.value as string
    const senha = inputSenha.current?.value as string
    if (matricula.length == 0) setErro1(true)
    if (senha.length == 0) setErro2(true)
    if (matricula.length > 0 && senha.length > 0 && !enviando) {
      setEnviando(true)
      Requests.session.logar(matricula, senha, (param) => {
        Token.definir(param.token)
        setRedirectMain(true)
      }, (param) => {
        setEnviando(false)
        if (param?.erro == 'USUARIO_DESCONHECIDO') {
          return addToast('Matrícula não encontrada', {appearance: 'error'})
        }
        if (param?.erro == 'SENHA_INCORRETA') {
          return addToast('A senha digitada está incorreta', {appearance: 'error'})
        }
        if (param?.erro == 'CONTA_NAO_REGISTRADA') {
          return addToast('Esta matrícula ainda não foi registrada', {appearance: 'error'})
        }
        if (param?.erro == 'CONTA_ESPERANDO_VALIDACAO') {
          setRedirectRegistrarCodigo(param.codigoAcesso as string)
          return setRedirectRegistrar(true)
        }
        if (param?.erro == 'ESTADO_DA_CONTA_DESCONHECIDO') {
          return addToast('Esta matrícula está com estado desconhecido. Isso é um erro!', {appearance: 'error'})
        }
        return addToast('Erro não previsto', {appearance: 'error'})
      })
    }
  }
  return (
    <>
      {redirectMain && (
        <Redirect to="/" />
      )}
      {redirectRegistrar && (
        <Redirect to={`/registrar/${redirectRegistrarCodigo}/validar`} push />
      )}
      <Loading timer={500} />
      <Container>
        <Center>
          <Header>
            <Sigae />
            <h1>
              Sistema de gerenciamento
              <br />
              Atendimento ao estudante
            </h1>
          </Header>
          <Main>
            <Form method="POST" name="Login">
              <InputLogin id="matricula" placeholder="Sua Matrícula" inputMode="numeric" error={erro1}
                ref={inputMatricula} onKeyUp={onMatriculaTyped} onFocus={onFocus}>
                <InputErrorIcon visible={erro1 ? 100 : 0} />
              </InputLogin>
              <InputLogin id="senha" placeholder="Sua senha" margintop={15} type={
                showPassword ? 'text' : 'password'
              } paddingRight error={erro2}
                ref={inputSenha} onKeyUp={onSenhaTyped} onFocus={onFocus}>
                <InputErrorIcon visible={erro2 ? 100 : 0} />
                <ShowPassword top={12} selecionado={showPassword} onClick={() => {
                  setShowPassword(!showPassword)
                }} />
              </InputLogin>
              <StyledButton type="submit" variant="contained" cor="generic" ref={botao} onClick={logar}>
                {!enviando && (
                  <div>Realizar login</div>
                )}
                {enviando && (
                  <Spinner />
                )}
              </StyledButton>
            </Form>
            <LinksContainer>
              <LinksColuna>
                <LinksRow className="leftLink">
                  <Link to="../registrar">Registrar novo usuário</Link>
                </LinksRow>
              </LinksColuna>
              <LinksColuna>
                <LinksRow className="rightLink">
                  <a onClick={() => {
                    showPopup('recuperarSenha')
                  }}>Esqueci minha senha</a>
                </LinksRow>
              </LinksColuna>
            </LinksContainer>
          </Main>
          <Footer>
            <div>© 2020 | Desenvolvimento: <a href="https://portal.ifba.edu.br/"
              target="_blank" rel="noreferrer">IFBA</a></div>
          </Footer>
        </Center>
      </Container>
    </>
  )
}

export default memo(Login)
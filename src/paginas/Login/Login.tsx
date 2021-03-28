import React, {memo, useContext, useState, useEffect, useRef} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Loading from '../../componentes/Loading/Loading'
import Form from '../../componentes/Form/Form'
import InputLogin from '../../componentes/inputs/InputLogin/InputLogin'
import Button from '../../componentes/Button/Button'
import Spinner from '../../componentes/Spinner/Spinner'
import {APIContext} from '../../hooks/APIProvider'
import {PopupContext} from '../../hooks/PopupProvider'
import {useToasts} from 'react-toast-notifications'
import {
  Container, Center, Header, Main, LinksContainer,
  LinksColuna, LinksRow, Footer
} from './styles'
import {InputErrorIcon} from '../../componentes/Icons/Icons'
import {ReactComponent as Sigae} from '../../assets/sigae.svg'

const Login: React.FC = () => {
  const {Requests, setToken} = useContext(APIContext)
  const {showPopup} = useContext(PopupContext)
  const {addToast} = useToasts()

  const inputMatricula = useRef<HTMLInputElement | null>(null)
  const inputSenha = useRef<HTMLInputElement | null>(null)
  const botao = useRef<HTMLButtonElement | null>(null)
  
  const [enviando, setEnviando] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [erro1, setErro1] = useState(false)
  const [erro2, setErro2] = useState(false)

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
    if (matricula.length == 0) {
      setErro1(true)
    }
    if (senha.length == 0) {
      setErro2(true)
    }
    if (matricula.length > 0 && senha.length > 0 && !enviando) {
      setEnviando(true)
      Requests.logar(matricula, senha, (param) => {
        setEnviando(false)
        if (param.erro == 'USUARIO_DESCONHECIDO') {
          addToast('Usuário não encontrado', {appearance: 'error'})
        }
        if (param.erro == 'SENHA_INCORRETA') {
          addToast('Senha incorreta', {appearance: 'error'})
        }
        if (param.token) {
          setToken(param.token)
          setRedirect(true)
        }
      }, () => {
        setEnviando(false)
      })
    }
  }
  if (redirect) {
    return <Redirect to="/" />
  }
  return (
    <>
      <Loading timer={500}/>
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
              <InputLogin id="matricula" placeholder="Sua Matrícula" type="text" error={erro1}
                ref={inputMatricula} onKeyUp={onMatriculaTyped} onFocus={onFocus}>
                <InputErrorIcon visible={erro1 ? 100 : 0} />
              </InputLogin>
              <InputLogin id="senha" placeholder="Sua senha" margintop={15} type="password" error={erro2}
                ref={inputSenha} onKeyUp={onSenhaTyped} onFocus={onFocus}>
                <InputErrorIcon visible={erro2 ? 100 : 0} />
              </InputLogin>
              <Button type="submit" variant="contained" tipo="generic" margintop={10} ref={botao} onClick={logar}>
                {!enviando && (
                  <div>Realizar login</div>
                )}
                {enviando && (
                  <Spinner/>
                )}
              </Button>
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
            <div>© 2020 | Desenvolvimento: <a href="https://portal.ifba.edu.br/">IFBA</a></div>
          </Footer>
        </Center>
      </Container>
    </>
  )
}

export default memo(Login)
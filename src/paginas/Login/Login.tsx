import React, {memo, useContext, useState, useEffect, useRef} from 'react'
import Form from '../../componentes/Form/Form'
import InputLogin from '../../componentes/inputs/InputLogin/InputLogin'
import Button from '../../componentes/Button/Button'
import {LoadingContext} from '../../hooks/LoadingProvider'
import {ReactComponent as Sigae} from '../../assets/sigae.svg'
import {
  Container, Center, Header, Main, LinksContainer,
  LinksColuna, LinksRow, BottomLinkContainer, Footer, IconeError
} from './styles'

const Login: React.FC = () => {
  const {hideLogin} = useContext(LoadingContext)

  useEffect(() => {
    hideLogin()
  }, [])
  const inputMatricula = useRef<HTMLInputElement | null>(null)
  const inputSenha = useRef<HTMLInputElement | null>(null)
  const botao = useRef<HTMLButtonElement | null>(null)
  const [enviado, setEnviado] = useState(false)
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
    console.log(e.currentTarget.id)
  }

  const logar = () => {
    const matricula = inputMatricula.current?.value
    const senha = inputSenha.current?.value
    if (matricula?.length == 0) {
      setErro1(true)
    }
    if (senha?.length == 0) {
      setErro2(true)
    }
  }
  return (
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
            <InputLogin id="matricula" placeholder="Sua Matrícula" type="email" error={erro1} 
            ref={inputMatricula} onKeyUp={onMatriculaTyped} onFocus={onFocus}>
              <IconeError style={{opacity: erro1 ? 100 : 0}}/>
            </InputLogin>
            <InputLogin id="senha" placeholder="Sua senha" margintop={15} type="password" error={erro2} 
            ref={inputSenha} onKeyUp={onSenhaTyped} onFocus={onFocus}>
              <IconeError style={{opacity: erro2 ? 100 : 0}}/>
            </InputLogin>
            <Button variant="contained" tipo="generic" margintop={10} ref={botao}
              onClick={logar}>
              Realizar login
            </Button>
          </Form>
          <LinksContainer>
            <LinksColuna>
              <LinksRow className="leftLink">
                <a href="../registrar">Registrar novo usuário</a>
              </LinksRow>
            </LinksColuna>
            <LinksColuna>
              <LinksRow className="rightLink">
                <a href="../registrar">Esqueci minha senha</a>
              </LinksRow>
            </LinksColuna>
          </LinksContainer>
        </Main>
        <Footer>
          <div>© 2020 | Desenvolvimento: <a href="https://portal.ifba.edu.br/">IFBA</a></div>
        </Footer>
      </Center>
    </Container>
  )
}

export default memo(Login)
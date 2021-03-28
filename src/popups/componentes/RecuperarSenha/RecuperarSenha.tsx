import React, {useState, useRef, useContext} from 'react'
import Form from '../../../componentes/Form/Form'
import Button from '../../../componentes/Button/Button'
import Spinner from '../../../componentes/Spinner/Spinner'
import Banner from '../../../componentes/Banner/Banner'
import {APIContext} from '../../../hooks/APIProvider'
import {RegexUtils} from '../../../utils/Utils'
import {Container, CustumInputLogin} from './styles'
import {InputErrorIcon} from '../../../componentes/Icons/Icons'

const RecuperarSenha: React.FC = () => {
  const {Requests} = useContext(APIContext)
  const input = useRef<HTMLInputElement | null>(null)
  const button = useRef<HTMLButtonElement | null>(null)
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const enviar = () => {
    const email = input.current!.value
    if (email.length <= 0) return setErro(true)
    setShowBanner(false)
    if(RegexUtils.validEmail(email)) {
      setEnviando(true)
      Requests.recuperarSenha(email, () => {
        setEnviando(false)
        setShowBanner(true)
      }, () => {
        setEnviando(false)
      })
    } else {
      setErro(true)
    }
  }

  const onFocus = () => {
    setErro(false)
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') button.current?.click()
  }

  return (
    <Container>
      <Form name="RecuperarSenha" method="POST">
        <CustumInputLogin id="recuperarSenha" placeholder="Digite o seu e-mail" error={erro} ref={input}
          onFocus={onFocus} onKeyDown={onKeyDown}>
          <InputErrorIcon visible={erro ? 1 : 0} />
        </CustumInputLogin>
        <Button type="submit" variant="contained" tipo="generic" margintop={10} onClick={enviar} ref={button}>
          {enviando && (
            <Spinner />
          )}
          {!enviando && (
            <div>Enviar código</div>
          )}
        </Button>
        <Banner visible={showBanner} setVisible={setShowBanner} tipo="generic" margintop={10}>
          Se este e-mail estiver em nossos registros, nós enviaremos um e-mail
          com um código para que você possa recuperar sua senha.
        </Banner>
      </Form>
    </Container>
  )
}

export default RecuperarSenha
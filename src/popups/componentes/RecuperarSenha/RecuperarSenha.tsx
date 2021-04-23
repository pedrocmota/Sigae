import React, {useState, useRef} from 'react'
import Form from '../../../componentes/Form/Form'
import Button from '../../../componentes/Button/Button'
import {validarEmail} from '../../../utils/Validar'
import {Container, CustumInputLogin} from './styles' 
import {InputErrorIcon} from '../../../componentes/Icons/Icons'
import {IPopupBody} from '../../../popups/PopupsInterface'

const RecuperarSenha: React.FC<IPopupBody> = ({APIContext, PopupContext}) => {
  const input = useRef<HTMLInputElement | null>(null)
  const button = useRef<HTMLButtonElement | null>(null)
  const [erro, setErro] = useState(false)
  const Requests = APIContext.Requests

  const enviar = () => {
    const email = input.current!.value
    if (email.length <= 0) return setErro(true)
    if(validarEmail(email)) {
      Requests.session.recuperarSenha(email, () => {})
      PopupContext.showAlerta('info', 'Aviso', `
        Se este e-mail estiver em nossos registros, nós enviaremos um e-mail
        com um código para que você possa recuperar sua senha.
      `)
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
        <Button type="button" variant="contained" tipo="generic" margintop={10} onClick={enviar} ref={button}>
          Enviar código
        </Button>
      </Form>
    </Container>
  )
}

export default RecuperarSenha
import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Button from '../../componentes/Button/Button'
import {Container} from './styles'

const Erro404: React.FC = () => {
  const [redirect, setRedirect] = useState(false)
  return (
    <>
      {redirect && (
        <Redirect to="/" />
      )}
      <Container>
        <h1>404</h1>
        <span>Você deve estar perdido no espaço tempo</span>
        <Button cor="generic" onClick={() => {
          setRedirect(true)
        }}>
          Voltar para o início
      </Button>
      </Container>
    </>
  )
}

export default Erro404
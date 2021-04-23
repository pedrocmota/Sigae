import React from 'react'
import styled from 'styled-components'

interface IConfirmar {
  texto: string
}

const Confirmar: React.FC<IConfirmar> = ({texto = 'Você tem certeza?'}) => {
  return (
    <Container>
      <Texto>
        {texto}
      </Texto>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Texto = styled.div`
  font-size: 20px;
  text-align: center;
`

export default Confirmar
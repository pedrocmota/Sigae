import React from 'react'
import styled from 'styled-components'

interface IConfirmar {
  texto: string
}

const Confirmar: React.FC<IConfirmar> = ({texto = 'Você tem certeza?'}) => {
  return (
    <Texto>
      {texto}
    </Texto>
  )
}

const Texto = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  text-align: center;
`

export default Confirmar
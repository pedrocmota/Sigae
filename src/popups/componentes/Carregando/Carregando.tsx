import React from 'react'
import styled from 'styled-components'
import Spinner from '../../../componentes/Spinner/Spinner'
import {IPopupBody} from '../../PopupsInterface'

interface ICarregando {
  texto: string
}

const Carregando: React.FC<IPopupBody & ICarregando> = ({texto}) => {
  return (
    <Container>
      <Spinner size={'60px'} color={'#5C67BC'} />
      <div>{texto}</div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 50px;
  div {
    margin-top: 10px;
    white-space: pre-line;
  }
`

export default Carregando
import React from 'react'
import styled from 'styled-components'

interface IRequisito {
  texto: string,
  cumprido: boolean
}

const Requisito: React.FC<IRequisito> = (props) => {
  return (
    <Container>
      <div className="texto">{props.texto}</div>
      <Cumprido cumprido={props.cumprido}>
        {props.cumprido ? 'Cumprido' : 'Não cumprido'}
      </Cumprido>
    </Container>
  )
}

const Container = styled.div`
  display: inline-flex;
  margin-top: 2px;
  margin-bottom: 2px;
  .texto {
    font-size: 15px;
  }
`

type ICumprido = Omit<IRequisito, 'texto'>;

const Cumprido = styled.div<ICumprido>`
  color: ${props => props.cumprido ? '#16a53a' : '#d84040'};
  margin-left: 3px;
`

export default Requisito
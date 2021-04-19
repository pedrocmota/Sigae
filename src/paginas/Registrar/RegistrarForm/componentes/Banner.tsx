import React from 'react'
import styled from 'styled-components'

interface IBanner {
  icone: any,
  titulo: string,
  conteudo: string
}

const Banner: React.FC<IBanner> = (props) => {
  return (
    <Container>
      <div className="inLine">
        {props.icone}
        <span>
          {props.titulo}
        </span>
      </div>
      <div className="conteudo">
        {props.conteudo}
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border-radius: 5px;
  background-color: #546274;
  color: white;
  .inLine {
    display: flex;
    word-break: break-word;
    span {
      display: flex;
      align-items: center;
      margin-left: 6px;
      font-size: 18px;
    }
  }
  .conteudo {
    margin-left: 5px;
    margin-top: 4px;
    white-space: pre-line;
  }
`

export default Banner
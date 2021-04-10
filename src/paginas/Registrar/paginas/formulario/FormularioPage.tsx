import React, {useState, useContext, memo} from 'react'
import {RegistrarContext} from '../../Registrar'
import {Container, Info} from './styles'

const FormularioPage: React.FC = () => {
  const {dados} = useContext(RegistrarContext)
  return (
    <Container>
      <Info>
        <div className="nome">
          {dados?.nome}
        </div>
        <div className="matricula">
          Matrícula: <b>{dados?.matricula}</b>
        </div>
        <div className="campus">
          Campus: <b>{dados?.campus}</b>
        </div>
      </Info>
    </Container>
  )
}

export default memo(FormularioPage)
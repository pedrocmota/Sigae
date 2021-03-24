import React, {useState} from 'react'
import styled from 'styled-components'
import Fade from '../../componentes/Fade/Fade'

const Registrar: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => {
        setShow(!show)
      }}>
        {show && (
          <div>Ocultar</div>
        )}
        {!show && (
          <div>Mostrar</div>
        )}
      </button>
      <div style={{margin: '20px'}}>
        <Fade visible={show}>
          <Quadrado/>
        </Fade>
      </div>
    </div>
  )
}

const Quadrado = styled.div`
  width: 300px;
  height: 300px;
  background-color: #7c24af;
`

export default Registrar
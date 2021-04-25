import React, {useState, useEffect} from 'react'
import useQuery from '../../hooks/misc/useQuery'
import LoadingPersistent from '../../componentes/LoadingPersistent/LoadingPersistent'
import {Container, Center} from './styles'
import Sigae from '../../assets/sigae.svg'

const RecuperarSenha: React.FC = () => {
  const codigo = useQuery().get('codigo')
  const [show, setShow] = useState(true)
  useEffect(() => {
    // console.log(codigo)
  }, [])
  return (
    <>
      <LoadingPersistent visible={!show}/>
      <Container>
        <Center>
          <img src={Sigae} height={'85px'}/>
        </Center>
      </Container>
    </>
  )
}

export default RecuperarSenha
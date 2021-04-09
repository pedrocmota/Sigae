import React, {useState} from 'react'
import Loading from '../../componentes/Loading/Loading'
import Footer from '../../componentes/pages/Footer/Footer'
import CodigoPage from './paginas/codigo/CodigoPage'
import FormularioPage from './paginas/formulario/FormularioPage'
import {Container, Top, Main, Bottom, PageContainer} from './styles'
import {ReactComponent as Sigae} from '../../assets/sigae.svg'
import {IDadosRegistro} from '../../types/Registrar'

const Registrar: React.FC = () => {
  const [paginaCodigo, setPaginaCodigo] = useState(true)
  const [paginaForm, setPaginaForm] = useState(false)
  const [dados, setDados] = useState<IDadosRegistro>()
  return (
    <>
      <Loading timer={300}/>
      <Container>
        <Top>
          <Sigae/>
          <h1>Registrar novo usuário</h1>
        </Top>
        <Main>
          <PageContainer visible={paginaCodigo}>
            <CodigoPage dados={dados} setDados={setDados}/>
          </PageContainer>
          <PageContainer visible={paginaForm}>
            <FormularioPage/>
          </PageContainer>
        </Main>
        <Bottom>
          <Footer/>
        </Bottom>
      </Container>
    </>
  )
}

export default Registrar
import React, {useState, createContext, memo} from 'react'
import Loading from '../../componentes/Loading/Loading'
import Footer from '../../componentes/pages/Footer/Footer'
import CodigoPage from './paginas/codigo/CodigoPage'
import FormularioPage from './paginas/formulario/FormularioPage'
import Parse from '../../utils/Parse'
import {Container, Top, Main, Bottom, PageContainer} from './styles'
import {ReactComponent as Sigae} from '../../assets/sigae.svg'
import {IDadosRegistro} from '../../types/Registrar'

interface IRegistrarContext {
  dados: IDadosRegistro | undefined,
  setDados: React.Dispatch<React.SetStateAction<IDadosRegistro | undefined>>,
  irParaForm: (dados: IDadosRegistro) => void
}

export const RegistrarContext = createContext<IRegistrarContext>({} as IRegistrarContext)

export const RegistrarProvider: React.FC = (props) => {
  const [paginaCodigo, setPaginaCodigo] = useState(true)
  const [paginaForm, setPaginaForm] = useState(false)
  const [header, setHeader] = useState('Registrar novo usuário')
  const [dados, setDados] = useState<IDadosRegistro>()

  const irParaForm = (dados: IDadosRegistro) => {
    setDados(dados)
    setPaginaCodigo(false)
    setHeader(
      `Dados do ${Parse.tipo(dados?.tipo)}:`
    )
    setTimeout(() => {
      setPaginaForm(true)
    }, 450)
  }
  return (
    <RegistrarContext.Provider value={{
      dados, setDados, irParaForm
    }}>
      <>
        <Loading timer={300} />
        <Container>
          <Top>
            <Sigae />
            <h1>{header}</h1>
          </Top>
          <Main>
            <PageContainer visible={paginaCodigo}>
              <CodigoPage />
            </PageContainer>
            <PageContainer visible={paginaForm}>
              <FormularioPage/>
            </PageContainer>
          </Main>
          <Bottom>
            <Footer />
          </Bottom>
        </Container>
      </>
    </RegistrarContext.Provider>
  )
}

export default RegistrarProvider
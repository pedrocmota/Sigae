import React, {useState, useRef, useContext, memo, createContext} from 'react'
import Banner from './components/Banner'
import BasicSelect, {IOptions} from '../../../../componentes/selects/BasicSelect/BasicSelect'
import InputText from '../../../../componentes/inputs/InputText/InputText'
import Button from '../../../../componentes/Button/Button'
import Spinner from '../../../../componentes/Spinner/Spinner'
import {RegistrarContext} from '../../Registrar'
import Parse from '../../../../utils/Parse'
import {validar} from './components/Validador'
import {Container, Info, Row, Form} from './styles'
import {
  Person as PersonIcon,
  School,
  ImportContacts,
  AlternateEmail,
  VpnKey
} from '@material-ui/icons'

// interface IFormularioPageContext {
//   valido: boolean, setValido: React.Dispatch<React.SetStateAction<boolean>>,
//   enviando: boolean, setEnviando: React.Dispatch<React.SetStateAction<boolean>>,
//   inputNome: React.RefObject<HTMLInputElement>,
//   inputCurso: React.RefObject<HTMLInputElement>,
//   inputTurma: React.RefObject<HTMLInputElement>,
//   inputDisciplina: React.RefObject<HTMLInputElement>,
//   inputEmail: React.RefObject<HTMLInputElement>,
//   inputSenha1: React.RefObject<HTMLInputElement>,
//   inputSenha2: React.RefObject<HTMLInputElement>,
//   button: React.RefObject<HTMLButtonElement>,
//   turmas: String[], setTurmas: React.Dispatch<React.SetStateAction<String[]>>,
//   inputEmailErro: boolean, setInputEmailErro: React.Dispatch<React.SetStateAction<boolean>>,
//   inputSenha1Erro: boolean, setInputSenha1Erro: React.Dispatch<React.SetStateAction<boolean>>,
//   inputSenha2Erro: boolean, setInputSenha2Erro: React.Dispatch<React.SetStateAction<boolean>>,
//   popupSenhaOpen: boolean, setPopupSenhaOpen: React.Dispatch<React.SetStateAction<boolean>>
// }

// export const FormularioPageContext = createContext<IFormularioPageContext>({} as IFormularioPageContext)

export const FormularioPage: React.FC = () => {
  const {dados} = useContext(RegistrarContext)
  const [valido, setValido] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [turmas, setTurmas] = useState<String[]>([])
  const inputNome = useRef<HTMLInputElement>(null)
  const inputCurso = useRef<HTMLInputElement>(null)
  const inputTurma = useRef<HTMLInputElement>(null)
  const inputDisciplina = useRef<IOptions[]>([])
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputSenha1 = useRef<HTMLInputElement>(null)
  const inputSenha2 = useRef<HTMLInputElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  const [inputEmailErro, setInputEmailErro] = useState(false)
  const [inputSenha1Erro, setInputSenha1Erro] = useState(false)
  const [inputSenha2Erro, setInputSenha2Erro] = useState(false)

  const [popupSenhaOpen, setPopupSenhaOpen] = useState(false)
  if (dados == undefined) return <></>
  validar({
    dados: dados,
    valido: valido, setValido: setValido,
    enviando: enviando, setEnviando: setEnviando,
    inputNome: inputNome,
    inputCurso: inputCurso,
    inputTurma: inputTurma,
    inputDisciplina: inputDisciplina,
    inputEmail: inputEmail,
    inputSenha1: inputSenha1,
    inputSenha2: inputSenha2,
    button: button,
    turmas: turmas, setTurmas: setTurmas,
    inputEmailErro: inputEmailErro, setInputEmailErro: setInputEmailErro,
    inputSenha1Erro: inputSenha1Erro, setInputSenha1Erro: setInputSenha1Erro,
    inputSenha2Erro: inputSenha2Erro, setInputSenha2Erro: setInputSenha2Erro,
    popupSenhaOpen: popupSenhaOpen, setPopupSenhaOpen: setPopupSenhaOpen
  })
  return (
    <Container>
      <Info>
        <div className="nome">
          {dados.nome}
        </div>
        <div className="matricula">
          Matrícula: <b>{dados.matricula}</b>
        </div>
        <div className="campus">
          Campus: <b>{dados.campus}</b>
        </div>
      </Info>
      <Form method="POST" name="Formulario">
        <Row>
          <Banner icone={<PersonIcon style={{width: '30px', height: '30px'}} />}
            titulo="Abreviação do nome"
            conteudo={
              `Essa configuração define a abreviação do seu nome.
                Seu nome aparecerá com essa abreviação na maioria das vezes.`
            }>
          </Banner>
          <BasicSelect placeholder="Escolha seu nome" options={Parse.nomes(dados.nome)}
            input={{height: '40px', margintop: 12}} ref={inputNome} />
        </Row>
        {dados.tipo == 'DISCENTE' && (
          <>
            <Row>
              <Banner icone={<School style={{width: '30px', height: '30px'}} />}
                titulo="Seu curso"
                conteudo={
                  `Escolha o curso que você cursa atualmente.
                    Esta opção pode ser alterada posteriormente.`
                }>
              </Banner>
              <BasicSelect placeholder="Escolha seu curso" options={Parse.cursos(dados.turmas as any)}
                ref={inputCurso} input={{height: '40px', margintop: 12}} onChange={(obj) => {
                  if(obj != null && obj != undefined) {
                    const valor = obj.valor
                    const turmas = dados.turmas![valor]
                    setTurmas(turmas)
                  } else {
                    setTurmas([])
                  }
                }} />
            </Row>
            <Row>
              <Banner icone={<ImportContacts style={{width: '30px', height: '30px'}} />}
                titulo="Sua turma"
                conteudo={
                  `Escolha a sua turma cujo você faz parte atualmente.
                    Esta opção pode ser alterada posteriormente.`
                }>
              </Banner>
              <BasicSelect placeholder="Escolha sua turma" options={turmas} ref={inputTurma}
                disabled={turmas.length == 0} input={{height: '40px', margintop: 12}} />
            </Row>
          </>
        )}
        {dados.tipo == 'DOCENTE' && (
          <Row>
            <Banner icone={<School style={{width: '30px', height: '30px'}} />}
              titulo="Seu curso"
              conteudo={
                `Selecione as disciplinas que você ministra.
              Esta opção pode ser alterada posteriormente.`
              }>
            </Banner>
            <BasicSelect placeholder="Escolha sua disciplina" options={dados.disciplinas} multiple
              input={{height: '40px', margintop: 12}} onChange={(obj) => {
                inputDisciplina.current = obj
                console.log(obj)
              }} />
          </Row>
        )}
        <Row>
          <Banner icone={<AlternateEmail style={{width: '30px', height: '30px'}} />}
            titulo="Seu Email"
            conteudo={
              `O SiGAÊ enviará e-mails para a conta, informando a situação dos atendimentos, essa opção pode ser desativada posteriormente.
                O e-mail também servirá para recuperar a conta caso haja perda de senha.`
            }>
          </Banner>
          <InputText id="emailRegistro" type="email" placeholder="Digite seu Email" ref={inputEmail}
            margintop={12} height={'40px'} />
        </Row>
        <Row>
          <Banner icone={<VpnKey style={{width: '30px', height: '30px'}} />}
            titulo="Sua senha"
            conteudo={
              `Digite uma senha siga as seguintes regras:
                • Entre 6 e 500 caracteres.
                • Pelo menos uma letra maiúscula.
                • Pelo menos um número.
                • Pelo menos um caractere especial.
                `
            }>
          </Banner>
          <InputText id="password1" type="password" placeholder="Digite sua senha"
            margintop={12} height={'40px'} ref={inputSenha1} />
          <InputText id="password2" type="password" placeholder="Repita sua senha"
            margintop={12} height={'40px'} ref={inputSenha2} />
        </Row>
        <Button type="submit" variant="contained" tipo="generic"
          disabled={!valido} margintop={10} marginbottom={20} ref={button}>
          {!enviando && (
            <div>Finalizar inscrição</div>
          )}
          {enviando && (
            <Spinner />
          )}
        </Button>
      </Form>
    </Container>
  )
}
import React, {useState, useRef, useContext} from 'react'
import Banner from './componentes/Banner'
import BasicSelect, {IOptions} from '../../../../componentes/selects/BasicSelect/BasicSelect'
import InputText from '../../../../componentes/inputs/InputText/InputText'
import Button from '../../../../componentes/Button/Button'
import Spinner from '../../../../componentes/Spinner/Spinner'
import PopupSenha from '../../../../componentes/PopupSenha/PopupSenha'
import {APIContext} from '../../../../hooks/APIProvider'
import {PopupContext} from '../../../../hooks/PopupProvider'
import {useToasts} from 'react-toast-notifications'
import {RegistrarContext} from '../../Registrar'
import Parse from '../../../../utils/Parse'
import {validar, IValidadorProps} from './componentes/Validador'
import {IEnvio} from './componentes/Envio'
import {iOptionsToStringArray} from '../../../../utils/Utils'
import {Container, Info, Row, Form, InputContainer, Alerta} from './styles'
import {
  Person as PersonIcon,
  School,
  ImportContacts,
  AlternateEmail,
  VpnKey,
  Create
} from '@material-ui/icons'

export const FormularioPage: React.FC = () => {
  const {codigo, dados} = useContext(RegistrarContext)
  const {Requests} = useContext(APIContext)
  const {showPopup} = useContext(PopupContext)
  const {addToast} = useToasts()

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

  const [senha, setSenha] = useState('')
  const [popupSenhaOpen, setPopupSenhaOpen] = useState(false)
  if (dados == undefined) return <></>
  const dadosValidar: IValidadorProps = {
    dados: dados,
    valido: valido, setValido: setValido,
    inputNome: inputNome,
    inputCurso: inputCurso,
    inputTurma: inputTurma,
    inputDisciplina: inputDisciplina,
    inputEmail: inputEmail,
    inputSenha1: inputSenha1,
    inputSenha2: inputSenha2,
    inputEmailErro: inputEmailErro, setInputEmailErro: setInputEmailErro,
    inputSenha1Erro: inputSenha1Erro, setInputSenha1Erro: setInputSenha1Erro,
    inputSenha2Erro: inputSenha2Erro, setInputSenha2Erro: setInputSenha2Erro
  }
  // showPopup('confirmarInscricao', {
  //   codigo: codigo
  // })
  return (
    <Container>
      <button onClick={() => {
        showPopup('confirmarInscricao', {
          codigo: codigo
        })
      }}>
        Teste
      </button>
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
            disabled={enviando} input={{height: '40px', margintop: 12}} ref={inputNome} onChange={() => {
              validar(dadosValidar)
            }} />
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
                disabled={enviando} ref={inputCurso} input={{height: '40px', margintop: 12}} onChange={(obj) => {
                  if (obj != null && obj != undefined) {
                    const valor = obj.valor
                    const turmas = dados.turmas![valor]
                    setTurmas(turmas)
                  } else {
                    setTurmas([])
                  }
                  validar(dadosValidar)
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
                disabled={turmas.length == 0 || enviando} input={{height: '40px', margintop: 12}} 
                onChange={() => {
                  validar(dadosValidar)
                }} />
            </Row>
          </>
        )}
        {dados.tipo == 'DOCENTE' && (
          <Row>
            <Banner icone={<Create style={{width: '30px', height: '30px'}} />}
              titulo="Suas disciplinas"
              conteudo={
                `Selecione as disciplinas que você ministra.
                Esta opção pode ser alterada posteriormente.`
              }>
            </Banner>
            <BasicSelect placeholder="Escolha sua disciplina" options={dados.disciplinas} multiple
              disabled={enviando} input={{height: '40px', margintop: 12}} onChange={(obj) => {
                inputDisciplina.current = obj
                validar(dadosValidar)
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
            disabled={enviando} error={inputEmailErro} margintop={12} height={'40px'} onChange={() => {
              validar(dadosValidar)
            }} />
        </Row>
        <Row style={{marginBottom: '0px'}}>
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
          <InputContainer>
            <InputText id="password1" type="password" placeholder="Digite sua senha" disabled={enviando}
              error={inputSenha1Erro} margintop={12} height={'40px'} ref={inputSenha1} onChange={() => {
                if (inputSenha1?.current?.value != undefined) {
                  const senha = inputSenha1.current.value
                  setSenha(senha)
                  setPopupSenhaOpen(senha.length > 0)
                }
                validar(dadosValidar)
              }} onFocus={() => {
                setPopupSenhaOpen(true)
              }} onBlur={() => {
                setPopupSenhaOpen(false)
              }} />
            <PopupSenha visible={popupSenhaOpen} senha={senha} timer={200} />
          </InputContainer>
          <InputText id="password2" type="password" placeholder="Repita sua senha" disabled={enviando}
            error={inputSenha2Erro} margintop={12} height={'40px'} ref={inputSenha2} onChange={() => {
              validar(dadosValidar)
            }} />
          <Alerta visible={inputSenha2Erro}>
            ● As senhas digitadas não correspondem
          </Alerta>
        </Row>
        <Button type="submit" variant="contained" tipo="generic"
          disabled={!valido} margintop={10} marginbottom={20} ref={button}
          onClick={() => {
            if(!enviando) {
              const dadosEnvio = () => {
                const dadosRetorno:IEnvio = {
                  codigo: codigo,
                  nomePreferencial: inputNome?.current?.value as string,
                  email: inputEmail?.current?.value as string,
                  senha: inputSenha1?.current?.value as string,
                }
                if(dados.tipo == 'DISCENTE') {
                  dadosRetorno.curso = inputCurso?.current?.value as string
                  dadosRetorno.turma = inputTurma?.current?.value as string
                }
                if(dados.tipo == 'DOCENTE') {
                  dados.disciplinas = iOptionsToStringArray(inputDisciplina.current)
                }
                return dadosRetorno
              }
              setEnviando(true)
              Requests.registro.enviar(dadosEnvio(), () => {
                setEnviando(false)
                
              }, (param) => {
                setEnviando(false)
                if(param.erro == 'CODIGO_INVALIDO') {
                  return addToast('O código é inválido', {appearance: 'error'})
                }
                if(param.erro == 'CODIGO_JA_USADO') {
                  return addToast('O código já foi usado', {appearance: 'error'})
                }
                if(param.erro == 'NOME_PREFERENCIAL_INVALIDO') {
                  return addToast('O nome preferencial é inválid', {appearance: 'error'})
                }
                if(param.erro == 'EMAIL_INVALIDO') {
                  return addToast('O e-mail digitado é inválido', {appearance: 'error'})
                }
                if(param.erro == 'EMAIL_JA_USADO') {
                  return addToast('O e-mail digitado já foi utilizado', {appearance: 'error'})
                }
                if(param.erro == 'SENHA_INVALIDA') {
                  return addToast('A senha digitada é inválida', {appearance: 'error'})
                }
                if(param.erro == 'CURSO_INVALIDO') {
                  return addToast('O curso digitado é inválido', {appearance: 'error'})
                }
                if(param.erro == 'TURMA_INVALIDA') {
                  return addToast('A turma digitada é inválida', {appearance: 'error'})
                }
                if(param.erro == 'LISTA_DISCIPLINAS_INVALIDA') {
                  return addToast('A lista de disciplinas é inválida', {appearance: 'error'})
                }
                if(param.erro == 'DISCIPLINA_DA_LISTA_INVALIDA') {
                  return addToast('Uma das disciplinas digitadas é inválida', {appearance: 'error'})
                }
                if(param.erro == 'ERRO_DESCONHECIDO_EMAIL') {
                  return addToast('Erro desconhecido ao enviar o e-mail', {appearance: 'error'})
                }
                if(param.erro == 'ERRO_DESCONHECIDO' || param.erro == 'ERRO_DESCONHECIDO (2)') {
                  return addToast('Erro desconhecido', {appearance: 'error'})
                }
              })
            }
          }}>
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
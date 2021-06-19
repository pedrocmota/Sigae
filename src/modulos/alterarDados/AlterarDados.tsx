import React, {useState, useContext, useEffect, useRef} from 'react'
import useIsMounted from '../../hooks/useeffects/useIsMounted'
import Label from './componentes/Label/Label'
import Select from '../../componentes/Select/Select'
import SecondaryInputText from '../../componentes/SecondaryInputText/SecondaryInputText'
import Link from '../../componentes/Link/Link'
import {RemountContext} from '../../componentes/Remount/Remount'
import {MainContext} from '../../paginas/Main/Main'
import {APIContext} from '../../hooks/APIProvider'
import Parse from '../../utils/Parse'
import {validarEmail} from '../../utils/Validar'
import {TopButton, EmailContainer, EmailErroContainer} from './styles'
import {MainContainer, Header, Container} from './styles'

import SaveIcon from '@material-ui/icons/Save'
import UndoIcon from '@material-ui/icons/Undo'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SchoolIcon from '@material-ui/icons/School'
import ImportContactsIcon from '@material-ui/icons/ImportContacts'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import CreateIcon from '@material-ui/icons/Create'
import WarningIcon from '@material-ui/icons/Warning'

const ALterarDados: React.FC = () => {
  const {Requests} = useContext(APIContext)
  const {keyMount, remount} = useContext(RemountContext)
  const isMounted = useIsMounted()

  const {dados} = useContext(MainContext)
  const [botaoSalvar, setBotaoSalvar] = useState(false)
  const [salvando, setSalvando] = useState(false)
  const [turmasArray, setTurmasArray] = useState<String[]>(
    dados!.estaticos.turmas[dados!.curso][dados!.campus]
  )
  const [alterados, setAlterados] = useState({
    nome: false,
    curso: false,
    turma: false,
    disciplinas: false,
    email: false
  })
  const [erros, setErros] = useState({
    emailValido: false,
    emailUsado: false
  })

  const timeoutCheckEmail = useRef<NodeJS.Timeout | undefined>()
  const checkEmail = (email: string) => {
    if (timeoutCheckEmail.current != undefined) clearTimeout(timeoutCheckEmail.current)
    if (email != dados!.email) {
      timeoutCheckEmail.current = setTimeout(() => {
        Requests.dados.checarEmail(email, (resposta) => {
          if (isMounted() && resposta.retorno == 'true') {
            setErros(erros => {
              return {...erros, emailUsado: true}
            })
          }
        })
      }, 800)
    }
  }
  return (
    <>
      {dados && (
        <MainContainer key={keyMount}>
          <Header>
            <TopButton cor="alternative" width={'250px'} margin={{right: 10}}
              disabled={!botaoSalvar || !salvando}>
              <SaveIcon />
              <label>Salvar alterações</label>
            </TopButton>
            <TopButton cor="alternative" width={'250px'}
              disabled={!salvando && (
                !alterados.nome &&
                !alterados.curso &&
                !alterados.turma &&
                !alterados.disciplinas
              )} onClick={remount}>
              <UndoIcon />
              <label>Descartar alterações</label>
            </TopButton>
          </Header>
          <Container>
            <Label icone={AccountCircleIcon} selecionado={alterados.nome}>
              Alterar nome de exibição
            </Label>
            <Select placeholder="Escolha seu nome" options={Parse.nomes(dados.nome)}
              defaultValue={dados.nomePreferencial} disabled={salvando} input={SecondaryInputText}
              inputStyles={{height: '40px'}} margin={{top: 12}} onChange={(v) => {
                setAlterados({...alterados, nome: v.valor != dados.nomePreferencial})
              }} onKeyDown={(e) => {

              }} />
            {dados.tipo == 'DISCENTE' && (
              <>
                <Label icone={SchoolIcon} selecionado={alterados.curso} marginTop={15}>
                  Alterar curso
                </Label>
                <Select placeholder="Escolha seu curso" options={dados.estaticos.cursos}
                  defaultValue={dados.curso} input={SecondaryInputText} disabled={salvando}
                  inputStyles={{height: '40px'}} onChange={(v) => {
                    if (v != null) {
                      const curso = v.valor
                      const turmas = dados.estaticos.turmas[curso][dados.campus]
                      setTurmasArray(turmas)
                    } else {
                      setTurmasArray([])
                    }
                    setAlterados({...alterados, curso: v.valor != dados.curso})
                  }} onKeyDown={(e) => {

                  }} />
                <Label icone={CreateIcon} marginTop={15} selecionado={alterados.turma}>
                  Alterar turma
                </Label>
                <Select placeholder="Escolha sua turma" options={turmasArray} defaultValue={dados.turma}
                  input={SecondaryInputText} disabled={salvando}
                  inputStyles={{height: '40px'}} onChange={() => {

                  }} onKeyDown={(e) => {

                  }} />
              </>
            )}
            {dados.tipo == 'DOCENTE' && (
              <>
                <Label icone={ImportContactsIcon} selecionado={alterados.disciplinas} marginTop={15}>
                  Alterar disciplinas ministradas
                </Label>
                <Select placeholder="Escolha suas disciplinas"
                  options={dados.estaticos.cursos} defaultValue={dados.curso} disabled={salvando}
                  input={SecondaryInputText} inputStyles={{height: '40px'}} onChange={() => {

                  }} onKeyDown={(e) => {

                  }} />
              </>
            )}
            <Label icone={AlternateEmailIcon} selecionado={alterados.email} marginTop={15}>
              Alterar e-mail
            </Label>
            <SecondaryInputText placeholder="Digite seu e-mail" type="email" defaultValue={dados.email}
              height={'40px'} margintop={12} disabled={salvando || dados.misc.emailTemporario != undefined}
              onInput={(e) => {
                const valor = e.currentTarget.value
                if (valor.length > 0) {
                  const valido = validarEmail(valor)
                  setErros({
                    emailUsado: false,
                    emailValido: !valido
                  })
                  if (valido) checkEmail(valor)
                } else {
                  setErros({
                    emailUsado: false,
                    emailValido: false
                  })
                }
              }} />
            {dados.misc.emailTemporario && (
              <EmailContainer>
                <Link style={{marginLeft: '3px'}}>
                  Digitar código
                </Link>
                <Link style={{marginLeft: '15px'}}>
                  Reenviar email
                </Link>
                <Link style={{marginLeft: '15px'}}>
                  Cancelar troca e-mail
                </Link>
              </EmailContainer>
            )}
            {(erros.emailValido || erros.emailUsado) && (
              <EmailErroContainer>
                <WarningIcon width={28} height={28} />
                {(erros.emailValido && !erros.emailUsado) && (
                  <>O e-mail digitado é inválido</>
                )}
                {(!erros.emailValido && erros.emailUsado) && (
                  <>O e-mail já foi utilizado</>
                )}
              </EmailErroContainer>
            )}
          </Container>
        </MainContainer>
      )}
    </>
  )
}

export default ALterarDados
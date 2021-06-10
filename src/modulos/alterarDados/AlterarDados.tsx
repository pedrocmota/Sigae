import React, {useState, useContext, useEffect} from 'react'
import useIsMounted from '../../hooks/useeffects/useIsMounted'
import Label from './componentes/Label/Label'
import Select from '../../componentes/Select/Select'
import SecondaryInputText from '../../componentes/SecondaryInputText/SecondaryInputText'
import Link from '../../componentes/Link/Link'
import {ModuloContext} from '../../paginas/Main/componentes/Modulo/ModuloProvider/ModuloProvider'
import {MainContext} from '../../paginas/Main/Main'
import Parse from '../../utils/Parse'
import {TopButton, EmailContainer} from './styles'
import {MainContainer, Header, Container} from './styles'

import SaveIcon from '@material-ui/icons/Save'
import UndoIcon from '@material-ui/icons/Undo'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SchoolIcon from '@material-ui/icons/School'
import ImportContactsIcon from '@material-ui/icons/ImportContacts'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import CreateIcon from '@material-ui/icons/Create'

const ALterarDados: React.FC = () => {
  const {dados} = useContext(MainContext)
  const [botaoSalvar, setBotaoSalvar] = useState(false)
  const [botaoDesfazer, setBotaoDesfazer] = useState(false)
  const [salvando, setSalvando] = useState(false)
  const [turmasArray, setTurmasArray] = useState<String[]>(
    dados!.estaticos.turmas[dados!.curso][dados!.campus]
  )
  const [erroEmail, setErroEmail] = useState(false)
  return (
    <>
      {dados && (
        <MainContainer>
          <Header>
            <TopButton cor="alternative" width={'250px'} margin={{right: 10}}
              disabled={!botaoSalvar || !salvando}>
              <SaveIcon />
              <label>Salvar alterações</label>
            </TopButton>
            <TopButton cor="alternative" width={'250px'}
              disabled={!botaoDesfazer || !salvando}>
              <UndoIcon />
              <label>Descartar alterações</label>
            </TopButton>
          </Header>
          <Container>
            <Label icone={AccountCircleIcon} selecionado={false}>
              Alterar nome de exibição
            </Label>
            <Select placeholder="Escolha seu nome" options={Parse.nomes(dados.nome)} 
              defaultValue={dados.nomePreferencial} disabled={salvando} input={SecondaryInputText}
              inputStyles={{height: '40px', margintop: 12}} onChange={() => {

              }} onKeyDown={(e) => {

              }} />
            {dados.tipo == 'DISCENTE' && (
              <>
                <Label icone={SchoolIcon} selecionado={false} marginTop={15}>
                  Alterar curso
                </Label>
                <Select placeholder="Escolha seu curso" options={dados.estaticos.cursos} 
                  defaultValue={dados.curso} input={SecondaryInputText} disabled={salvando} 
                  inputStyles={{height: '40px', margintop: 12}} onChange={(e) => {
                    if (e != null) {
                      const curso = e.valor
                      const turmas = dados.estaticos.turmas[curso][dados.campus]
                      setTurmasArray(turmas)
                    } else {
                      setTurmasArray([])
                    }
                  }} onKeyDown={(e) => {

                  }} />
                <Label icone={CreateIcon} selecionado={false} marginTop={15}>
                  Alterar turma
                </Label>
                <Select placeholder="Escolha sua turma" options={turmasArray} defaultValue={dados.turma}
                  input={SecondaryInputText} disabled={salvando} 
                  inputStyles={{height: '40px', margintop: 12}} onChange={() => {

                  }} onKeyDown={(e) => {

                  }} />
              </>
            )}
            {dados.tipo == 'DOCENTE' && (
              <>
                <Label icone={ImportContactsIcon} selecionado={false} marginTop={15}>
                  Alterar disciplinas ministradas
                </Label>
                <Select placeholder="Escolha suas disciplinas"
                  options={dados.estaticos.cursos} defaultValue={dados.curso} disabled={salvando} 
                  input={SecondaryInputText} inputStyles={{height: '40px', margintop: 12}} onChange={() => {

                  }} onKeyDown={(e) => {

                  }} />
              </>
            )}
            <Label icone={AlternateEmailIcon} selecionado={false} marginTop={15}>
              Alterar e-mail
            </Label>
            <SecondaryInputText placeholder="Digite seu e-mail" defaultValue={dados.email} height={'40px'}
              margintop={12} disabled={salvando || dados.misc.emailTemporario != undefined}/>
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
          </Container>
        </MainContainer>
      )}
    </>
  )
}

export default ALterarDados
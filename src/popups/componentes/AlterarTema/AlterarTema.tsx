import React, {useState, useContext} from 'react'
import {ButtonContainer, Ok, Fechar} from '../../../componentes/PopupBase/Button'
import CheckDiv from '../../../componentes/CheckDiv/CheckDiv'
import {IPopupBody} from '../../PopupsInterface'
import {Container, MainContainer} from './styles'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness2Icon from '@material-ui/icons/Brightness2'

const AlterarTema: React.FC<IPopupBody> = (props) => {
  const {close} = props.PopupContext
  const {nomeTema, definirTema} = props.TemaContext
  const {addToast} = props.useToasts
  const [tema, setTema] = useState<ListaTemas>(nomeTema)
  return (
    <Container>
      <MainContainer>
        <CheckDiv titulo="Tema claro" icone={Brightness7Icon} select={tema == 'Light'} onSelect={() => {
          setTema('Light')
        }}>
          Tema padrão do SiGAÊ.
        </CheckDiv>
        <CheckDiv titulo="Tema escuro" icone={Brightness2Icon} select={tema == 'Dark'} onSelect={() => {
          setTema('Dark')
        }}>
          Tema escuro. Bom para utilizar durante a noite.
        </CheckDiv>
      </MainContainer>
      <ButtonContainer>
        <Ok onClick={() => {
          if (tema != nomeTema) {
            addToast('Tema alterado com sucesso!', {appearance: 'success'})
            definirTema(tema)
          }
          close()
        }}>Salvar</Ok>
        <Fechar onClick={() => close()}>Descartar</Fechar>
      </ButtonContainer>
    </Container>
  )
}

export default AlterarTema
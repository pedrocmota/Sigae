import {IPopupProps} from './PopupsInterface'
import Confirmar from './componentes/Confirmar/Confirmar'
import RecuperarSenha from './componentes/RecuperarSenha/RecuperarSenha'

const Popups:IPopupProps = {
  confirmar: {
    titulo: 'Tem certeza?',
    componente: Confirmar,
    largura: '400px',
    altura: '300px',
  },
  recuperarSenha: {
    titulo: 'Recuperar sua senha',
    componente: RecuperarSenha,
    largura: '400px',
    altura: '425px',
    ocultarOK: true,
    closeOnClick: true,
  }
}

export default Popups
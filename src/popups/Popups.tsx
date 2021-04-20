import {IPopupProps} from './PopupsInterface'
import Confirmar from './componentes/Confirmar/Confirmar'
import RecuperarSenha from './componentes/RecuperarSenha/RecuperarSenha'
import ConfirmarInscricao from './componentes/ConfirmarInscricao/ConfirmarInscricao'
import Carregando from './componentes/Carregando/Carregando'

const Popups:IPopupProps = {
  confirmar: {
    titulo: 'Tem certeza?',
    componente: Confirmar,
    largura: '420px',
    altura: '200px',
    textoOk: 'Sim',
    textoFechar: 'Não'
  },
  recuperarSenha: {
    titulo: 'Esqueceu sua senha?',
    componente: RecuperarSenha,
    largura: '400px',
    altura: '425px',
    ocultarOK: true,
    closeOnClick: true
  },
  confirmarInscricao: {
    titulo: 'Confirmar inscrição',
    componente: ConfirmarInscricao,
    largura: '450px',
    altura: '325px',
    ocultarOK: true,
    ocultarFechar: true,
    closeOnClick: false
  },
  carregando: {
    titulo: 'Carregando...',
    componente: Carregando,
    largura: '450px',
    altura: '325px',
    ocultarOK: true,
    ocultarFechar: true,
    closeOnClick: false
  }
}

export default Popups
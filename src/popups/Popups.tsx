import {IPopupKey} from './PopupsInterface'
import Confirmar from './componentes/Confirmar/Confirmar'
import RecuperarSenha from './componentes/RecuperarSenha/RecuperarSenha'
import Carregando from './componentes/Carregando/Carregando'

export type Keys = keyof typeof Popups;

const Popups = {
  confirmar: {
    titulo: 'Tem certeza?',
    componente: Confirmar,
    largura: '420px',
    altura: '200px',
    ocultarHeader: true,
    mostrarOk: true,
    mostrarFechar: true,
    textoOk: 'Sim',
    textoFechar: 'Não',
    closeOnClick: false
  },
  recuperarSenha: {
    titulo: 'Esqueceu sua senha?',
    componente: RecuperarSenha,
    largura: '400px',
    altura: '320px',
    mostrarFechar: true,
    mostrarOk: false,
    closeOnClick: true
  },
  carregando: {
    titulo: 'Carregando...',
    componente: Carregando,
    largura: '400px',
    altura: '320px',
    mostrarFechar: false,
    mostrarOk: false,
    closeOnClick: false
  }
}

export default Popups as IPopupKey
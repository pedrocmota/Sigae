import {IListaModulos} from '../types/Modulos'

const Modulos = {
  inicio: {
    titulo: 'Início',
    icone: null,
    condicao: {
      logado: true,
      naoLogado: true,
      discentes: true,
      docentes: true,
      admins: true,
    },
    esperar: false
  }
}

export type listaModulos = keyof typeof Modulos;


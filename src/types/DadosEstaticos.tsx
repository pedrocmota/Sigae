import {tokenErros} from './ErrosGenericos'

export type tiposUsuario = 'DISCENTE' | 'DOCENTE' | 'ADMIN' | 'VISITANTE'
export type tipoCodigos = 'RECUPERACAO_SENHA' | 'VALIDACAO_CONTA'

export interface IListaCursoTurmas {
  [key: string]: String[]
}

export interface IDadosIniciais {
  logado: boolean,
  id: string,
  erro?: tokenErros,
  nome: string,
  nomePreferencial: string,
  email: string,
  matricula: string,
  campus: string,
  tipo: tiposUsuario,
  curso: string,
  turma: string,
  estaticos: {
    campus: String[],
    cursos: String[],
    turmas: {
      [key: string]: {
        [key: string]: String[]
      }
    },
    disciplinas: String[]
  }
}
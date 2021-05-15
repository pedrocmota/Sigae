import {tokenErros} from './ErrosGenericos'

export type tiposUsuario = 'DISCENTE' | 'DOCENTE' | 'ADMIN' | 'VISITANTE'
export type tipoCodigos = 'RECUPERACAO_SENHA' | 'VALIDACAO_CONTA'

export interface IListaCursoTurmas {
  [key: string]: String[]
}

export interface IDadosIniciais {
  erro?: tokenErros,
  nome: string,
  nomePreferencial: string,
  matricula: string,
  campus: string,
  tipo: tiposUsuario,
  curso: string,
  turma: string,
  dadosEstaticos: {
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
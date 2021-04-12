import {IListaCursoTurmas, tiposUsuario} from './DadosEstaticos'

export interface IDadosRegistro {
  nome: string,
  matricula: string,
  campus: string,
  tipo: tiposUsuario,
  turmas?: IListaCursoTurmas,
  disciplinas?: string[]
}
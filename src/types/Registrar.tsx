import {ICursoTurmasLista, IDisciplinasLista} from './DadosEstaticos'

export interface IRegistroProps {
  dados: IDadosRegistro | undefined,
  setDados?: React.Dispatch<React.SetStateAction<IDadosRegistro | undefined>>
}

export type tiposUsuario = 'Discente' | 'Docente' | 'Administrador'

export interface IDadosRegistro {
  codigo: string,
  nome: string,
  matricula: string,
  tipo: tiposUsuario,
  turmas?: ICursoTurmasLista,
  disciplinas?: IDisciplinasLista
}
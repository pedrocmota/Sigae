import {listaModulos} from '../../../../modulos/Modulos'

export interface INode extends React.HTMLAttributes<HTMLDivElement> {
  titulo: string,
  icone: any,
  tabIndex: number,
  condicao: ICondicao,
  moduloAssociado?: listaModulos
}

export interface IRow extends React.HTMLAttributes<HTMLDivElement>{
  titulo: string,
  icone?: any,
  tabIndex: number,
  condicao: ICondicao,
  moduloAssociado?: listaModulos
}

export interface ICondicao {
  logado: boolean,
  naoLogado: boolean,
  discentes: boolean,
  docentes: boolean,
  admins: boolean
}
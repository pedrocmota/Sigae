import {ICondicao} from '../Permissao'

export interface INode extends React.HTMLAttributes<HTMLDivElement> {
  titulo: string,
  icone: any,
  tabIndex: number,
  condicao: ICondicao,
  moduloAssociado?: string
}

export interface IRow extends React.HTMLAttributes<HTMLDivElement> {
  titulo: string,
  icone?: any,
  tabIndex: number,
  condicao: ICondicao,
  moduloAssociado?: string,
  onAction?: () => void
}
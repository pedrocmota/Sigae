export type tipo = 'ERROR' | 'WARNING'

export interface IConsoleEntry {
  titulo: string,
  tipo: tipo,
  horario: string,
  conteudo: string
}
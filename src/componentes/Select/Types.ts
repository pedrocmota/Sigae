export interface IOptions {
  valor: string,
  grupo?: string
}

export type values = String[] | IGrupo

interface IGrupo {
  [key: string]: String[]
}
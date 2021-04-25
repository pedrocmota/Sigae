export type tiposUsuario = 'DISCENTE' | 'DOCENTE' | 'ADMIN'
export type tipoCodigos = 'RECUPERACAO_SENHA' | 'VALIDACAO_CONTA'

export interface IListaCursoTurmas {
  [key: string]: String[]
}
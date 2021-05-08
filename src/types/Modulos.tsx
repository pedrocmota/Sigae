export interface IListaModulos {
  [key: string]: IModulo
}

export interface IModulo {
  titulo: string,
  icone: any,
  condicao: {
    logado: boolean,
    naoLogado: boolean,
    discentes: boolean,
    docentes: boolean,
    admins: boolean
  },
  esperar: boolean
}
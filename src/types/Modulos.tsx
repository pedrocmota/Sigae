export interface IListaModulos {
  [key: string]: IModulo
}

export interface IModulo {
  titulo: string,
  icone: any,
  componente: React.FC<any>,
  condicao: {
    logado: boolean,
    naoLogado: boolean,
    discentes: boolean,
    docentes: boolean,
    admins: boolean
  },
  esperar: boolean
}
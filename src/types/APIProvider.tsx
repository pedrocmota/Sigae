export interface IEnv {
  apiAdress: string
}

export interface ITokenObject {
  valor: string,
  existe: () => boolean,
  definir: (valor: string) => void,
  remover: () => void
}
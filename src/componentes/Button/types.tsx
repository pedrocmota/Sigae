export type Tipos = 'generic' | 'success' |  'error'

export type ITipos = {
  [key in Tipos]: IButtonStyles;
}

export interface IButtonStyles {
  background: string,
  foreground: string,
  disabled: string
}
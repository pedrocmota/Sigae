export type tipos = 'generic' | 'alternative' | 'success' |  'error'

export type ITipos = {
  [key in tipos]: ITipo;
}

export interface ITipo {
  background: string,
  foreground: string,
  disabled: string
}
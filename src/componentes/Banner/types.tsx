export type Tipos = 'generic' | 'success' | 'warning' | 'error'

export type ITipos = {
  [key in Tipos]: IBannerStyles;
}

export interface IBannerStyles {
  background: string,
  foreground: string
}
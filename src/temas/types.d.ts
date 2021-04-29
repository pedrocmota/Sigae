import 'styled-components'

declare global {
  export type ListaTemas = 'Light' | 'Dark'
}

declare module 'styled-components' {

  export interface DefaultTheme {
    titulo: string
  }
}

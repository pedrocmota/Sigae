export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean,
  mask?: maskTypes,
  width?: string,
  height?: string,
  margintop?: number,
  marginbottom?: number,
  marginleft?: number,
  marginright?: number,
  fontSize?: number,
  borderSize?: number
}

export type maskTypes = 'CPF' | 'data' | 'octaCode' | 'octaCodeUpper'

export type IMask = {
  [key in maskTypes]: (string | RegExp)[];
}

export interface IInputLogin extends IInput {
  error?: boolean,
  paddingRight?: boolean
}

export interface IInputLoginStyled {
  error?: boolean,
  visible?: boolean,
  paddingRight?: number
}
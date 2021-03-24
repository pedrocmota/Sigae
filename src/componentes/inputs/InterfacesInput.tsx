export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: number,
  height?: number,
  margintop?: number,
  marginbottom?: number,
  marginleft?: number,
  marginright?: number,
  fontSize?: number,
  borderSize?: number
}

export interface IInputLogin extends IInput {
  placeholder: string,
  error?: boolean
}

export interface IInputLoginStyled {
  error?: boolean,
  visible?: boolean
}
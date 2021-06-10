import {masks} from '../Mask/Mask'

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean,
  mask?: masks,
  width?: string,
  height?: string,
  margintop?: number,
  marginbottom?: number,
  marginleft?: number,
  marginright?: number,
  fontSize?: number,
  borderSize?: number
}

export type IMask = {
  [key in masks]: (string | RegExp)[];
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
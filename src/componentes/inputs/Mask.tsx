export type masks = 'CPF' | 'data' | 'octaCode' | 'octaCodeUpper'

export type IMask = {
  [key in masks]: (string | RegExp)[]
}

export const Masks:IMask = {
  CPF: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
  data: [/\d/,  /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  octaCode: [/[a-zA-Z0-9]/,  /[a-zA-Z0-9]/, /[a-zA-Z0-9]/, /[a-zA-Z0-9]/, /[a-zA-Z0-9]/, /[a-zA-Z0-9]/, /[a-zA-Z0-9]/, /[a-zA-Z0-9]/],
  octaCodeUpper: [/[A-Z0-9]/,  /[A-Z0-9]/, /[A-Z0-9]/, /[A-Z0-9]/, /[A-Z0-9]/, /[A-Z0-9]/, /[A-Z0-9]/, /[A-Z0-9]/]
}
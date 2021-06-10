import React from 'react'
import InputText from '../InputText/InputText'
import {IOptions} from './Types'

export const converter = (obj: any) => {
  const returnArray: IOptions[] = []
  if (Array.isArray(obj)) {
    const array = obj as string[]
    array.forEach(el => {
      returnArray.push({
        valor: el,
      })
    })
    return returnArray
  }
  if (typeof obj == 'object') {
    Object.keys(obj).forEach((key) => {
      const chave = obj[key] as string[]
      chave.forEach(el => {
        returnArray.push({
          valor: el,
          grupo: key
        })
      })
    })
    return returnArray
  }
  return [{valor: ''}]
}

export const createPlaceholder = (placeholder: string, numero: number, isMultiple: boolean | undefined) => {
  if(isMultiple != true) return placeholder
  if(numero == 0) return placeholder
  if(numero == 1) return `${numero} opção foi selecionada`
  if(numero > 1)  return `${numero} opções foram selecionadas`
}

export const createInput = (paramInput: React.FC | undefined) => {
  if(paramInput == undefined) {
    return InputText
  } else {
    const Input = paramInput
    return Input
  }
}
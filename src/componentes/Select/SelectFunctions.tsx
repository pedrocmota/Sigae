import {IOptions} from './Select'

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
}

export const createPlaceholder = (placeholder: string, numero: number, isMultiple: boolean | undefined) => {
  if(isMultiple != true) return placeholder
  if(numero == 0) return placeholder
  if(numero == 1) return `${numero} opção foi selecionada`
  if(numero > 1)  return `${numero} opções foram selecionadas`
}
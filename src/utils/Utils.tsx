import {IOptions} from '../componentes/Select/Select'

export function isDev() {
  const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  return development
}

export const fixRoute = (route:string) => {
  if (!route.startsWith('/')) route = `/${route}`
  return route
}

export const parseToNumber = (str: any) => {
  const n = parseInt(str)
  return n == NaN ? -1 : n
}

export const numbersOfTrues = (...args: boolean[]) => {
  let n = 0
  args.forEach((el) => {
    if(el) n++
  })
  return n
}

export const compareVars = (var1: any, var2: any, defaultVar: any) => {
  if(var1 != undefined) return var1
  if(var2 != undefined) return var2
  return defaultVar
}

export const getRefValue = <T extends unknown>(ref: React.RefObject<T>) => {
  const current = ref.current
  if(current == null || current == undefined) return ''
  const value = (current as any).value
  if(value == null || value == undefined) return ''
  return value as string
}

export const getArrayValue = <T extends unknown>(ref: React.RefObject<T>) => {
  const current = ref.current
  if(current == null || current == undefined) return [] as T
  return current as T
}

export const iOptionsToStringArray = (options: IOptions[]) => {
  const stringArray = [] as string[]
  options.forEach(element => {
    stringArray.push(element.valor)
  })
  return stringArray
}
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
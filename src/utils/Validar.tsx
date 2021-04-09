export const validarEmail = (email: string) => {
  var regex = /\S+@\S+\.\S+/
  return regex.test(email)
}
export const RegexUtils = {

  validEmail: (email: string) => {
    var regex = /\S+@\S+\.\S+/
    return regex.test(email)
  }
}
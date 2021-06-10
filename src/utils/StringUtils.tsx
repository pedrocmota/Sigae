const StringUtils = {
  contains(str: string, test: string) {
    const split = test.split('')
    let encontrado = false
    split.forEach((el) => {
      if (str.includes(el)) encontrado = true
    })
    return encontrado
  }
}

export default StringUtils
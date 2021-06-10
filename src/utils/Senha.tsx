import StringUtils from './StringUtils'
import {numbersOfTrues} from './Utils'

interface IForcaSenha {
  forca: number,
  forcaTexto: string,
  valido: boolean,
  validoTamanho: boolean,
  validoMaiusculas: boolean,
  validoNumeros: boolean,
  validoEspeciais: boolean,
  color: string
}

export const Senha = {

  calcularForcaSenha: (senha: string) => {
    const validoTamanho = senha.length >= 6 && senha.length <= 500
    const validoMaiusculas = StringUtils.contains(senha, 'QWERTYUIOPASDFGHJKLÇZXCVBNM')
    const validoNumeros = StringUtils.contains(senha, '1234567890')
    const validoEspeciais = StringUtils.contains(senha, '\'^£$%&*()}{@#~?><>,|=_+¬-]/!')
    const valido = validoTamanho && validoMaiusculas && validoNumeros && validoEspeciais
    const numero = numbersOfTrues(validoTamanho, validoMaiusculas, validoNumeros, validoEspeciais)
    let forcaTexto = 'undefined'
    let forca = 0
    let color = ''
    if (numero == 0) {
      forcaTexto = 'Inválida'
      forca = 0
      color = '#d13f3f'
    }
    if (numero == 1) {
      forcaTexto = 'Ridícula'
      forca = 20
      color = '#d13f3f'
    }
    if (numero == 2) {
      forcaTexto = 'Fraca'
      forca = 50
      color = '#d13f3f'
    }
    if (numero == 3) {
      forcaTexto = 'Razoável'
      forca = 60
      color = '#e0d03c'
    }
    if (numero == 4) {
      forcaTexto = 'Forte'
      forca = 100
      color = '#28ad45'
    }
    const retorno: IForcaSenha = {
      valido: valido,
      validoTamanho: validoTamanho,
      validoMaiusculas: validoMaiusculas,
      validoNumeros: validoNumeros,
      validoEspeciais: validoEspeciais,
      forcaTexto: forcaTexto,
      forca: forca,
      color: color
    }
    return retorno
  }
}
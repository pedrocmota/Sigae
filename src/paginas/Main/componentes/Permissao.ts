import {IDadosIniciais} from '../../../types/DadosEstaticos'

export interface ICondicao {
  logado: boolean,
  naoLogado: boolean,
  discentes: boolean,
  docentes: boolean,
  admins: boolean
}

export const validarPermissao = (logado: boolean, condicao: ICondicao, dados: IDadosIniciais) => {
  if (dados.logado) {
    if (!condicao.logado) return false
    const validoDiscente = condicao.discentes && dados.tipo == 'DISCENTE'
    const validoDocente = condicao.discentes && dados.tipo == 'DOCENTE'
    const validoAdmin = condicao.discentes && dados.tipo == 'ADMIN'
    if (!validoDiscente && !validoDocente && !validoAdmin) return false
  } else {
    if (!condicao.naoLogado) return false
  }
  return true
}
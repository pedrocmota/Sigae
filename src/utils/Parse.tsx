import {tiposUsuario, IListaCursoTurmas} from '../types/DadosEstaticos'

const Parse = {

  nomes: (nomeCompleto: string) => {
    const nomesArray = nomeCompleto.split(' ')
    const primeiroNome = nomesArray[0]
    const combinacoes:string[] = []
    nomesArray.forEach((sobrenome, index) => {
      if(index > 0) {
        combinacoes.push(primeiroNome + ' ' + sobrenome)
      }
    })
    return combinacoes
  },

  tipo: (tipo: tiposUsuario, upper = true) => {
    if(tipo === 'DISCENTE') return upper ? 'Discente' : 'discente'
    if(tipo === 'DOCENTE') return upper ? 'Docente' : 'docente'
    if(tipo === 'ADMIN') return upper ? 'Administrador' : 'administrador'
    return upper ? 'Desconhecido' : 'desconhecido'
  },

  cursos: (lista: IListaCursoTurmas) => {
    const array:String[] = []
    Object.keys(lista).forEach((curso) => {
      array.push(curso)
    })
    return array
  }
}

export default Parse
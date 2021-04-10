import {tiposUsuario} from '../types/DadosEstaticos'

const Parse = {

  tipo: (tipo: tiposUsuario, upper = true) => {
    if(tipo === 'DISCENTE') return upper ? 'Discente' : 'discente'
    if(tipo === 'DOCENTE') return upper ? 'Docente' : 'docente'
    if(tipo === 'ADMIN') return upper ? 'Administrador' : 'administrador'
    return upper ? 'Desconhecido' : 'desconhecido'
  }
}

export default Parse
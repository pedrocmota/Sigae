export interface ICursoLista {
  [key: string]: {//id do curso
    label: string
  }
}

export interface ICursoTurmasLista {
  [key: string]: {//id do curso
    label: string,
    turmas: {
      [key: string]: {//id da turma
        label: string
      }
    }
  }
}

export interface IDisciplinasLista {
  [key: string]: {//id da disciplina
    label: string
  }
}
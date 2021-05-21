export const fixed = (ativado: boolean) => {
  const body = document.getElementsByTagName('body')[0]
  if(ativado) {
    body.style.setProperty('position', 'fixed')
  } else {
    body.style.removeProperty('position')
  }
}


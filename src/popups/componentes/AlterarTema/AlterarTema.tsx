import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {Container} from './styles'

const AlterarTema: React.FC = () => {
  return (
    <Container>
      <RadioGroup aria-label="Alterar Tema" name="alterarTema">
        <FormControlLabel value="light" control={<Radio />} label="Tema claro" />
        <FormControlLabel value="dark" control={<Radio />} label="Tema escuro" />
      </RadioGroup>
    </Container>
  )
}

export default AlterarTema
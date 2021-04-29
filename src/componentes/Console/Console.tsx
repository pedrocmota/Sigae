import React, {useContext} from 'react'
import useForceUpdate from '../../hooks/misc/useForceUpdate'
import {v4 as uuidv4} from 'uuid'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import {TransitionProps} from '@material-ui/core/transitions'
import Collapsible from './componentes/Collapsible/Collapsible'
import {ConsoleContext} from '../../hooks/ConsoleProvider'
import {Dialog, ConsoleBar, Container, TextoVazio} from './styles'
import {Delete, Close} from '@material-ui/icons'
import Si from '../../assets/si.svg'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {children?: React.ReactElement},
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Console: React.FC = () => {
  const {dados, open, closeConsole} = useContext(ConsoleContext)
  const forceUpdate = useForceUpdate()
  const clearConsole = () => {
    dados.current = []
    forceUpdate()
  }
  return (
    <Dialog fullScreen open={open} onClose={closeConsole} TransitionComponent={Transition}>
      <ConsoleBar>
        <div className="consoleBar left">
          <img src={Si} width={40} />
          <h2>Console do SiGAÊ</h2>
        </div>
        <div className="consoleBar right">
          <Tooltip title="Limpar console">
            <IconButton className="limpar" edge="start" color="inherit"
              onClick={clearConsole} aria-label="limpar">
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip title="Fechar console">
            <IconButton className="fechar" edge="start" color="inherit" 
              onClick={closeConsole} aria-label="close">
              <Close />
            </IconButton>
          </Tooltip>
        </div>
      </ConsoleBar>
      <Container vazio={dados.current.length == 0}>
        {dados.current.map((item) => (
          <Collapsible {...item} key={uuidv4()} />
        ))}
        {dados.current.length == 0 && (
          <TextoVazio>O console, por enquanto, está vazio.</TextoVazio>
        )}
      </Container>
    </Dialog>
  )
}

export default Console
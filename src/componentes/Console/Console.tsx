import React, {useState, useEffect, useContext} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import {TransitionProps} from '@material-ui/core/transitions'
import {Dialog} from './styles'
import {ConsoleContext} from '../../hooks/ConsoleProvider'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {children?: React.ReactElement},
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Console: React.FC = () => {
  const {open, closeConsole} = useContext(ConsoleContext)
  return (
    <Dialog fullScreen open={open} onClose={closeConsole} TransitionComponent={Transition}>
      <AppBar className="appBar">
        <Toolbar className="toolbar">
          <IconButton edge="start" color="inherit" onClick={closeConsole} aria-label="close">
            <CloseIcon />
          </IconButton>
          <h2>Console do Sigae</h2>
        </Toolbar>
      </AppBar>
      
    </Dialog>
  )
}

export default Console
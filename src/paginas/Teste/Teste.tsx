import React, {useContext} from 'react'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'

import {ConsoleContext} from '../../hooks/ConsoleProvider'

export default function FullScreenDialog() {
  const {open, openConsole, closeConsole} = useContext(ConsoleContext)

  return (
    <div>
      
    </div>
  )
}
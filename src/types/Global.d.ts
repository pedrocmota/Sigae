import React from 'react'
import {SvgIconTypeMap} from '@material-ui/core'
import {OverridableComponent} from '@material-ui/core/OverridableComponent'

declare module '*.png' {
  const value: any
  export = value
}
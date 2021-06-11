import {SvgIconTypeMap} from '@material-ui/core'
import {OverridableComponent} from '@material-ui/core/OverridableComponent'

export type MaterialUIIcon = OverridableComponent<SvgIconTypeMap>

export interface IMargin {
  margin?: {
    top?: number,
    left?: number,
    right?: number,
    bottom?: number
  }
}
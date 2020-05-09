import { ChildrenProps, StyleProps } from '../../../props'

export enum BoxDirection {
  ROW = 'row',
  COLUMN = 'column'
}

export enum BoxJustify {
  START = 'flex-start',
  CENTER = 'center',
  END = 'flex-end',
  SPACE_AROUND = 'space-around',
  SPACE_BETWEEN = 'space-between',
  SPACE_EVENLY = 'space-evenly'
}

export enum BoxAlign {
  START = 'flex-start',
  CENTER = 'center',
  END = 'flex-end',
  STRETCH = 'stretch',
  BASELINE = 'baseline'
}

export interface BoxProps extends ChildrenProps, StyleProps {
  direction?: BoxDirection
  reverse?: boolean
  justify?: BoxJustify
  align?: BoxAlign
}

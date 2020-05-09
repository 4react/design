import React, { forwardRef } from 'react'
import RowContainer from './RowContainer'
import { RowGutter, digestRowGutter } from './RowGutter'
import RowJustify, { rowJustifyContent } from './RowJustify'
import RowVAlign, { rowAlignItems } from './RowVAlign'
import { ChildrenProps, StyleProps } from '../../../props'

export interface RowProps extends StyleProps, ChildrenProps {
  justify?: RowJustify
  vAlign?: RowVAlign
  gutters?: RowGutter | [RowGutter, RowGutter?, RowGutter?, RowGutter?]
}

const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const {
    justify = RowJustify.LEFT,
    vAlign = RowVAlign.TOP,
    gutters = 0,
    className,
    style,
    children
  } = props

  const [gutter1, gutter2, gutter3, gutter4] = Array.isArray(gutters) ? gutters : [gutters]

  return (
    <RowContainer
      ref={ref}
      justifyContent={rowJustifyContent(justify)}
      alignItems={rowAlignItems(vAlign)}
      marginTop={digestRowGutter(gutter1)}
      marginLeft={digestRowGutter(gutter2 || gutter1)}
      marginRight={digestRowGutter(gutter4 || gutter2 || gutter1)}
      marginBottom={digestRowGutter(gutter3 || gutter1)}
      className={className}
      style={style}
    >
      {children}
    </RowContainer>
  )
})

export default Row

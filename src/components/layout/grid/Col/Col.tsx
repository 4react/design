import React, { forwardRef } from 'react'
import { ColAlign, digestColAlign, ColAlignValue } from './ColAlign'
import ColContainer from './ColContainer'
import { digestColOffset } from './ColOffset'
import { ColOrder, digestColOrder } from './ColOrder'
import { ColSize, digestColSize } from './ColSize'
import { ColVAlign, digestColVAlign, ColVAlignValue } from './ColVAlign'
import { ChildrenProps, StyleProps } from '../../../props'

export interface ColProps extends StyleProps, ChildrenProps {
  size?: ColSize
  offset?: ColSize
  order?: ColOrder
  align?: ColAlign
  vAlign?: ColVAlign
}

const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const {
    size = '',
    offset,
    order,
    align = ColAlignValue.JUSTIFY,
    vAlign = ColVAlignValue.TOP,
    className,
    style,
    children
  } = props

  return (
    <ColContainer
      ref={ref}
      order={digestColOrder(order)}
      justifyContent={digestColVAlign(vAlign)}
      alignItems={digestColAlign(align)}
      width={digestColSize(size)}
      marginLeft={digestColOffset(offset)}
      className={className}
      style={style}
    >
      {children}
    </ColContainer>
  )
})

export default Col

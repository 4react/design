import React, { forwardRef } from 'react'
import { BoxAlign, BoxDirection, BoxJustify, BoxProps } from './Box.props'
import { Container, getFlexDirection } from './Box.style'

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    const {
      direction = BoxDirection.ROW,
      reverse = false,
      justify = BoxJustify.CENTER,
      align = BoxAlign.CENTER,
      children,
      style,
      ...otherProps
    } = props
    return (
      <Container
        ref={ref}
        style={{
          flexDirection: getFlexDirection(direction, reverse),
          justifyContent: justify,
          alignItems: align,
          ...style
        }}
        {...otherProps}
      >
        {children}
      </Container>
    )
  }
)

export default Box

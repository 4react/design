import React, { forwardRef } from 'react'
import { Container as ContainerContainer } from './ContainerContainer'
import { ChildrenProps, RefProps, StyleProps } from '../../../props'

export interface ContainerProps extends RefProps<HTMLDivElement>, ChildrenProps, StyleProps {
  responsive?: boolean
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    const { responsive = false, children, ...otherProps } = props
    return (
      <ContainerContainer
        ref={ref}
        responsive={responsive}
        {...otherProps}
      >
        {children}
      </ContainerContainer>
    )
  }
)

export default Container

import React, { FC } from 'react'
import LayoutContainer from './LayoutContainer'
import { StyleProps } from '../../../props'

export interface LayoutProps extends StyleProps {
}

const Layout: FC<LayoutProps> = props => {
  const { children, ...otherProps } = props

  return (
    <LayoutContainer {...otherProps}>
      {children}
    </LayoutContainer>
  )
}

export default Layout

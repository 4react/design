import React from 'react'

export interface ChildrenProps {
  children?: React.ReactChildren
}

export interface ParametricChildrenProps<P> {
  children?: (params: P) => React.ReactChildren
}

export interface StyleProps {
  style?: object
  className?: string
}

export interface RefProps<T> {
  ref: React.RefObject<T>
}

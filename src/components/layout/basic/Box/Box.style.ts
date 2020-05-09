import styled from 'styled-components'
import { BoxDirection } from './Box.props'

export const getFlexDirection = (direction: BoxDirection, reverse: boolean) => {
  switch (direction) {
    case BoxDirection.ROW:
      return reverse ? 'row-reverse' : 'row'
    case BoxDirection.COLUMN:
      return reverse ? 'column-reverse' : 'column'
    default:
      return 'row'
  }
}

export const Container = styled.div`
  display: inline flex;
  justify-content: center;
  align-items: center;
`

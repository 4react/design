import { ResponsiveProperty } from '../../../../core/breakpoints/ResponsiveProperty'
import {
  digestResponsiveProperty, ResponsiveValue, transformResponsiveValue
} from '../../../../core/breakpoints/ResponsiveValue'

export type ColSizeValue = (
  string
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
  | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
)

export type ColSize = ResponsiveProperty<ColSizeValue>

export const colSizeValueToString = (size: ColSizeValue): string => {
  switch (typeof size) {
    case 'number':
      return `${(100 * size) / 24}%`
    case 'string':
      return size
    default:
      return '0'
  }
}

export const digestColSize = (property: ColSize): ResponsiveValue<string> => (
  transformResponsiveValue<ColSizeValue, string>(
    colSizeValueToString,
    digestResponsiveProperty<ColSizeValue>(property)
  )
)

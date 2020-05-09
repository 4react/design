import { ResponsiveProperty } from '../../../../core/breakpoints/ResponsiveProperty'
import {
  digestResponsiveProperty, ResponsiveValue, transformResponsiveValue
} from '../../../../core/breakpoints/ResponsiveValue'
import Size, { rem } from '../../../../core/size'

export type RowGutterValue = 0 | 1 | 2 | 3 | 4 | 5 | string

export type RowGutter = ResponsiveProperty<RowGutterValue>

export const RowGutterValues = [
  rem(Size.PX_0),
  rem(Size.PX_4),
  rem(Size.PX_8),
  rem(Size.PX_16),
  rem(Size.PX_32),
  rem(Size.PX_64)
]

export const rowGutterValueToString = (gutter: RowGutterValue): string => {
  switch (typeof gutter) {
    case 'number':
      return RowGutterValues[gutter]
    case 'string':
    default:
      return gutter
  }
}

export const digestRowGutter = (property: RowGutter): ResponsiveValue<string> => (
  transformResponsiveValue<RowGutterValue, string>(
    rowGutterValueToString,
    digestResponsiveProperty<RowGutterValue>(property)
  )
)

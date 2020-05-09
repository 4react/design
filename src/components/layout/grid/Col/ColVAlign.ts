import { ResponsiveProperty } from '../../../../core/breakpoints/ResponsiveProperty'
import {
  digestResponsiveProperty, ResponsiveValue, transformResponsiveValue
} from '../../../../core/breakpoints/ResponsiveValue'

export enum ColVAlignValue {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom'
}

export type ColVAlign = ResponsiveProperty<ColVAlignValue>

export const colVAlignToString = (vAlign: ColVAlign): string => {
  switch (vAlign) {
    case ColVAlignValue.TOP:
      return 'flex-start'
    case ColVAlignValue.MIDDLE:
      return 'center'
    case ColVAlignValue.BOTTOM:
      return 'flex-end'
    default:
      return 'flex-start'
  }
}

export const digestColVAlign = (property: ColVAlign): ResponsiveValue<string> => (
  transformResponsiveValue<ColVAlignValue, string>(
    colVAlignToString,
    digestResponsiveProperty<ColVAlignValue>(property)
  )
)

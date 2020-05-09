import { ResponsiveProperty } from '../../../../core/breakpoints/ResponsiveProperty'
import {
  digestResponsiveProperty, ResponsiveValue, transformResponsiveValue
} from '../../../../core/breakpoints/ResponsiveValue'

export enum ColAlignValue {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify'
}

export type ColAlign = ResponsiveProperty<ColAlignValue>

export const colAlignValueToString = (align: ColAlignValue): string => {
  switch (align) {
    case ColAlignValue.LEFT:
      return 'flex-start'
    case ColAlignValue.CENTER:
      return 'center'
    case ColAlignValue.RIGHT:
      return 'flex-end'
    case ColAlignValue.JUSTIFY:
      return 'stretch'
    default:
      return 'flex-start'
  }
}

export const digestColAlign = (property: ColAlign): ResponsiveValue<string> => (
  transformResponsiveValue<ColAlignValue, string>(
    colAlignValueToString,
    digestResponsiveProperty<ColAlignValue>(property)
  )
)

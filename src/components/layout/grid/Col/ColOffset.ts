import { ColSizeValue, colSizeValueToString } from './ColSize'
import { ResponsiveProperty } from '../../../../core/breakpoints/ResponsiveProperty'
import {
  digestResponsiveProperty, ResponsiveValue, transformResponsiveValue
} from '../../../../core/breakpoints/ResponsiveValue'

export type ColOffset = ResponsiveProperty<ColSizeValue>

export const digestColOffset = (property?: ColOffset): ResponsiveValue<ColSizeValue> => (
  transformResponsiveValue<ColSizeValue, string>(
    colSizeValueToString,
    digestResponsiveProperty<ColSizeValue>(property)
  )
)

import { ResponsiveProperty } from '../../../../core/breakpoints/ResponsiveProperty'
import { digestResponsiveProperty, ResponsiveValue } from '../../../../core/breakpoints/ResponsiveValue'

export type ColOrder = ResponsiveProperty<number>

export const digestColOrder = (property?: ColOrder): ResponsiveValue<number> => (
  digestResponsiveProperty<number>(property)
)

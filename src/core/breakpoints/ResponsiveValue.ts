import Breakpoint from './Breakpoint'
import { ResponsiveProperty } from './ResponsiveProperty'

export interface ResponsiveValue<T> {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  xxl?: T
}

export const digestResponsiveProperty = <T extends boolean | number | string>(
  property?: ResponsiveProperty<T>
): ResponsiveValue<T> => {
  if (!property) return {}
  if (typeof property === 'object') {
    return {
      ...(property.base && { xs: property.base }),
      ...(property.xs && { xs: property.xs }),
      ...(property.sm && { sm: property.sm }),
      ...(property.md && { md: property.md }),
      ...(property.lg && { lg: property.lg }),
      ...(property.xl && { xl: property.xl }),
      ...(property.xxl && { xxl: property.xxl })
    }
  }
  return { xs: property }
}

export const transformResponsiveValue = <FromType, ToType>(
  transform: (value: FromType) => ToType,
  values: ResponsiveValue<FromType>
) => ({
  ...(values.xs && { xs: transform(values.xs) }),
  ...(values.sm && { sm: transform(values.sm) }),
  ...(values.md && { md: transform(values.md) }),
  ...(values.lg && { lg: transform(values.lg) }),
  ...(values.xl && { xl: transform(values.xl) }),
  ...(values.xxl && { xxl: transform(values.xxl) })
})

interface MapOf<T> {
  [key: string]: T
}

export const composeResponsive = (properties: MapOf<ResponsiveValue<any>>) => {
  const res: ResponsiveValue<MapOf<any>> = {}
  Object.keys(properties).forEach((propertyName: string) => {
    const property: ResponsiveValue<any> = properties[propertyName]

    Object.keys(property).forEach(key => {
      const breakpoint = key as Breakpoint
      const responsiveValue = property[breakpoint]
      res[breakpoint] = {
        ...res[breakpoint] || {},
        [propertyName]: responsiveValue
      }
    })
  })
  return res
}

import { ResponsiveValue } from './ResponsiveValue'

export interface ResponsiveObject<T> extends ResponsiveValue<T> {
  base?: T
}

export type ResponsiveProperty<T extends boolean | number | string> = T | ResponsiveObject<T>

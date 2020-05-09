export const DEFAULT_GLOBAL_FONT_SIZE = 18

export const px = (size: number): string => `${size}px`

export const rem = (size: number): string => `${size / DEFAULT_GLOBAL_FONT_SIZE}rem`

export const size = (value?: number | string): string | undefined => {
  if (value === undefined || value === null) {
    return undefined
  }
  if (typeof value === 'number') {
    return rem(value)
  }
  return value
}

enum Size {
  PX_0 = 0,
  PX_1 = 1,
  PX_2 = 2,
  PX_4 = 4,
  PX_8 = 8,
  PX_12 = 12,
  PX_16 = 16,
  PX_20 = 20,
  PX_24 = 24,
  PX_32 = 32,
  PX_40 = 40,
  PX_64 = 64,
  PX_128 = 128,
  PX_256 = 256,
  PX_512 = 512,
  PX_1024 = 1024
}

export default Size

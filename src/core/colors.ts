enum Color {
  BASE = 'base',
  PRIMARY_DARK = 'primary-dark',
  PRIMARY_SHADOW = 'primary-shadow',
  PRIMARY_STANDARD = 'primary-standard',
  PRIMARY_LIGHT = 'primary-light',
  ALERT = 'alert',
  CAUTION = 'caution',
  ACCENT = 'accent',
  HIGHLIGHT = 'highlight',
  DETAIL = 'pale',
  GREY_ULTRA_DARK = 'grey-ultra-dark',
  GREY_DARK = 'grey-dark',
  GREY_SHADOW = 'grey-shadow',
  GREY_NEUTRAL = 'grey-neutral',
  GREY_LIGHT = 'grey-light',
  GREY_ULTRA_LIGHT = 'grey-ultra-light',
  TRANSPARENT = 'transparent'
}

export default Color

export interface Palette {
  [Color.BASE]: string
  [Color.PRIMARY_DARK]: string
  [Color.PRIMARY_SHADOW]: string
  [Color.PRIMARY_STANDARD]: string
  [Color.PRIMARY_LIGHT]: string
  [Color.ALERT]: string
  [Color.CAUTION]: string
  [Color.ACCENT]: string
  [Color.HIGHLIGHT]: string
  [Color.DETAIL]: string
  [Color.GREY_ULTRA_DARK]: string
  [Color.GREY_DARK]: string
  [Color.GREY_SHADOW]: string
  [Color.GREY_NEUTRAL]: string
  [Color.GREY_LIGHT]: string
  [Color.GREY_ULTRA_LIGHT]: string
}

export type Colors = Palette & {
  [Color.TRANSPARENT]: string
}

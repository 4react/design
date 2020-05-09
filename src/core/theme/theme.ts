import Color, { Colors, Palette } from '../colors'
import Font, { Fonts } from '../fonts'

export interface Theme {
  colors: Colors
  fonts: Fonts
  // widths: Omit<BreakpointValues, 'base' | 'xs'>
}

export interface ThemeConfig {
  colors?: Partial<Palette>
  fonts?: Partial<Fonts>
  // widths?: Partial<Omit<BreakpointValues, 'base' | 'xs'>>
}

export const defaultTheme: Theme = {
  colors: {
    [Color.BASE]: '#ffffff',
    [Color.PRIMARY_DARK]: '#245348',
    [Color.PRIMARY_SHADOW]: '#40907F',
    [Color.PRIMARY_STANDARD]: '#63E2C6',
    [Color.PRIMARY_LIGHT]: '#8DE9D5',
    [Color.ALERT]: '#D81E5B',
    [Color.CAUTION]: '#FF6B6B',
    [Color.ACCENT]: '#F19953',
    [Color.HIGHLIGHT]: '#C3D350',
    [Color.DETAIL]: '#E6F14A',
    [Color.GREY_ULTRA_DARK]: '#333333',
    [Color.GREY_DARK]: '#4f4f4f',
    [Color.GREY_SHADOW]: '#828282',
    [Color.GREY_NEUTRAL]: '#bdbdbd',
    [Color.GREY_LIGHT]: '#e0e0e0',
    [Color.GREY_ULTRA_LIGHT]: '#f2f2f2',
    [Color.TRANSPARENT]: 'transparent'
  },
  fonts: {
    [Font.BOLD]: 'bold',
    [Font.MEDIUM]: 'medium',
    [Font.BOOK]: 'book',
    [Font.THIN]: 'thin'
  }
}

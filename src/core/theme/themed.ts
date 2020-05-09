import * as StyledComponents from 'styled-components'
import { ThemeConfig } from './theme'
import Color from '../colors'
import Font from '../fonts'

const themedFactory = <T>(themeCategory: string) => (
  (value?: T) => (
    (p: StyledComponents.ThemedStyledProps<any, ThemeConfig>) => (
      p.theme[themeCategory][value] || value
    )
  )
)

const themed = {
  color: themedFactory<Color>('colors'),
  font: themedFactory<Font>('fonts')
}

export default themed

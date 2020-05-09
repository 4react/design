import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { defaultTheme, Theme } from './theme'

const useTheme = (): Theme => {
  const theme = useContext(ThemeContext)
  return theme || defaultTheme
}

export default useTheme

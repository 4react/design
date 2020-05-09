import merge from 'lodash/merge'
import React, { FC } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { defaultTheme, ThemeConfig } from './theme'

export interface ThemeProviderProps {
  config?: ThemeConfig
}

const ThemeProvider: FC<ThemeProviderProps> = props => {
  const { config, children } = props
  const theme = merge(defaultTheme, config)
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <>
        {children}
      </>
    </StyledComponentsThemeProvider>
  )
}

export default ThemeProvider

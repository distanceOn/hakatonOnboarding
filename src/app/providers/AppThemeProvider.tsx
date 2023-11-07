import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/app/styles/GlobalStyle'
import { Theme } from '@/app/styles/Theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

export const AppThemeProvider = ({ children }: ThemeProviderProps) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

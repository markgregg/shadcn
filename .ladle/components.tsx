import type { GlobalProvider } from '@ladle/react'
import '../src/styles/tokens.css'
import '../src/styles/global.css'
import '../src/styles/components.css'
import { ThemeProvider } from '../src/components/theme-provider'

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="light">
      <div>{children}</div>
    </ThemeProvider>
  )
}

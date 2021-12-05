import * as React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import Typography from "./Typography"
import Color from "./Color"
import Constants from "./Constants"
import CssReset from "./CssReset"

export * from "./Primitives"
export const constants = Constants

const theme = {}

type ThemeProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProps): JSX.Element => (
  <StyledThemeProvider theme={theme}>
    <CssReset />
    <Color />
    <Typography />
    {children}
  </StyledThemeProvider>
)

export default ThemeProvider
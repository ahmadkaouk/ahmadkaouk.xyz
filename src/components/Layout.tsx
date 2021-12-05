import * as React from "react"
import styled from "styled-components"

import Footer from "./Footer"
import ThemeProvider, { constants } from "../theme"

const LayoutGrid = styled.div`
  min-height: 100vh;
  min-width: 100%;
  padding: 20px 500px;
  display: grid;
  grid-template-columns: 100%;
  gap: 80px;
  align-content: space-between;
  background-color: var(--color-background);
  @media (max-width: ${constants.breakpoints.lg}) {
    padding: 20px 50px;
    gap: 40px;
  }
`

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ThemeProvider>
    <LayoutGrid>
      {children}
      <Footer />
    </LayoutGrid>
  </ThemeProvider>
)

export default MainLayout

import { createGlobalStyle, css } from "styled-components"

const Colors = css`
  :root {
    --color-text: #191917;
    --color-background: #fff;
  }
  body {
    color: var(--color-text);
    background-color: var(--color-background);
  }
`

const Color = createGlobalStyle`
    ${Colors}
`

export default Color

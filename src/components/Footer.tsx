import React from "react"
import styled from "styled-components"
import config from "../theme/config"
import SocialLinks from "./SocialLinks"
import { Caption } from "../theme"

const Wrapper = styled.footer`
  display: grid;
  gap: 30px;
  justify-items: center;
  align-items: center;
  padding: 32px 0px 16px;
`

const LinkGrid = styled.section`
  display: inline-grid;
  gap: 40px;
  justify-items: center;
  align-items: center;
`
const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <LinkGrid>
        <SocialLinks />
        <Caption>{config.website.copyright}</Caption>
      </LinkGrid>
    </Wrapper>
  )
}

export default Footer

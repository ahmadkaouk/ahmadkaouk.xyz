import React from "react"
import styled, { css } from "styled-components"
import constants from "../theme/Constants"
import config from "../theme/config"

const Wrapper = styled.div`
  display: grid;
  grid-template-column: 100%;
`

const MainSection = styled.div`
  display: block;
  padding-top: 200px;
`

const SubSection = styled.div`
  display: grid;
  gap: 20px;
`
const H1 = styled.h1`
  font-family: "Space Mono", sans-serif;
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  @media (max-width: ${constants.breakpoints.lg}) {
    font-size: 50px;
  }
`
const H2 = styled.h2`
  font-family: "Space Mono", sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: ${constants.breakpoints.lg}) {
    font-size: 17px;
  }
`

const P = styled.p`
  font-family: "Space Mono";
  line-height: 2;
  padding-top: 20px;
  @media (max-width: ${constants.breakpoints.lg}) {
    font-size: 17px;
  }
`

const LinkGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  padding-top: 40px;
  gap: 25px;
`
// Utilities
const StyledLink = styled.a`
  font-family: "Space Mono";
  text-transform: uppercase;
  color: var(--color-text);
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  @media (max-width: ${constants.breakpoints.lg}) {
    font-size: 17px;
  }
`

const Main = (): JSX.Element => {
  return (
    <Wrapper>
      <MainSection>
        <H1> Hi, I am Ahmad Kaouk_</H1>
        <H2>Senior Software Engineer. Blockchain Enthusiastic.</H2>
        <P>
          I am Senior Software Engineer, originally from lebanon and currently
          living in Paris, France. I am passionate about programming and
          Blockchain.
        </P>
        <P>
          I have been creating and building software since 5 years or so. I
          worked mainly with C++, C and python. These days, I’m hooked with
          Rust.
        </P>
        <P>
          In my free time, I enjoy reading about the blockchain technology and
          cryptocurrency markets, learning and coding with Rust, exercising or
          even relaxing and playing video games.
        </P>
      </MainSection>

      <LinkGrid>
        <StyledLink href={config.user.linkedIn}>LinkedIn</StyledLink>
        <StyledLink href={config.user.github}>Github</StyledLink>
        <StyledLink href={config.user.medium}>Medium</StyledLink>
        <StyledLink href={config.user.twitter}>Twitter</StyledLink>
        <StyledLink href={"mailto:" + config.user.email}>E-mail</StyledLink>
      </LinkGrid>
    </Wrapper>
  )
}

export default Main

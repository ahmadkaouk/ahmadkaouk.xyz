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
  font-family: "Alfa Slab One", cursive;
  font-size: 65px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 2px;
  @media (max-width: ${constants.breakpoints.lg}) {
    font-size: 50px;
  }
`
const H2 = styled.h2`
  font-family: "Fira Sans", sans-serif;
  font-size: 35px;
  font-weight: 600;
  line-height: 1;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: ${constants.breakpoints.lg}) {
    font-size: 17px;
  }
`

const P = styled.p`
  font-family: "Fira Sans";
  font-size: 25px;
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
        <H1> Hi, I am Ahmad Kaouk</H1>
        <H2>Senior Software Engineer. Blockchain Enthusiastic.</H2>
        <P>
          Hi there,
          I am Senior Software Engineer with 5 years of relevant experience in creating software. I am based in Paris, France. Currenlty, I am working at Sesame IT. I have a keen interest with Blockchain, Cryptography and Finance. I am also interested in modern programming languages, espacially Rust and Go.
        </P>
        <P>
          Now, I am spending my time on:
          <ul>
            <li>Focusing on Idiomatic Rust.</li>
            <li>Diving into the blockchain/crypto world.</li>
          </ul>
        </P>
        <P>
          Interests:
          <ul>
            <li>Blockchain technologies (Substrate)</li>
            <li>Peer to Peer Networking (libp2p)</li>
            <li>Smart Contracts and Solidity</li>
            <li>Cryptograhphy</li>
          </ul>
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

import React from "react"
import styled from "styled-components"
import config from "../theme/config"

import { Twitter, Linkedin, Github, Mail } from "styled-icons/feather"
import { Medium } from "styled-icons/boxicons-logos"
import { StyledIcon } from "styled-icons/types"

const LinkGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
`
// Utilities
const SocialLink = (
  url: string,
  Icon: StyledIcon,
  label?: string
): JSX.Element => (
  <a href={url} aria-label={label}>
    <Icon color='black' size={26} />
  </a>
)

const LinkedInLink = (): JSX.Element => {
  const url = config.user.linkedIn
  return SocialLink(url, Linkedin)
}

const GithubLink = (): JSX.Element => {
  const url = config.user.github
  return SocialLink(url, Github)
}

const TwitterLink = (): JSX.Element => {
  const url = config.user.twitter
  return SocialLink(url, Twitter)
}

const MailLink = (): JSX.Element => {
  const url = "mailto:" + config.user.email
  return SocialLink(url, Mail)
}
const SocialLinks = (): JSX.Element => (
  <LinkGrid>
    <LinkedInLink />
    <GithubLink />
    <TwitterLink />
    <MailLink />
  </LinkGrid>
)

export default SocialLinks

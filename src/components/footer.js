import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FooterLinkContainer = styled.div`
  margin: 10px;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 5px;
  &:hover {
    cursor: pointer;
    transition-duration: 0.5s;
    color: #f0f0f0;
    background-color: black;
  }
`

const Footer = () => (
  <FooterContainer>
    <FooterLinkContainer>
      <FooterLink href="https://www.github.com/tiffbouchard/portfolio">
        {" "}
        © {new Date().getFullYear()} Tiffany Bouchard
      </FooterLink>
    </FooterLinkContainer>
  </FooterContainer>
)

export default Footer

import React from "react"

import styled from "styled-components"

import Section from "../../styles/Section"
import Nav from "../nav"
import Socials from "../socials"

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }
`

const NameHeader = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 90px;
  text-align: center;
  margin: 5px;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const SocialsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align: items: flex-end;
`

const LandingSection = () => (
  <Section>
    <NavContainer>
      <Nav />
    </NavContainer>
    <SocialsContainer>
      <Socials />
    </SocialsContainer>
    <MainContainer>
      <NameHeader>TIFFANY BOUCHARD</NameHeader>
      {/* <p>software developer</p> */}
    </MainContainer>
  </Section>
)

export default LandingSection

import React from "react"
import styled from "styled-components"

import Nav from "../nav"
import Socials from "../socials"

const Section = styled.section`
  height: 100vh;
  z-index: 1;
  position: relative;
`

const MainContainer = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NameHeader = styled.h1`
  font-family: NeueMontreal;
  font-size: 150px;
  text-align: center;
`

const Bio = styled.p`
  font-family: NeueMontrealLight;
  font-size: 30px;
  text-align: center;
`

const LandingSection = () => (
  <Section>
    <Nav />
    <MainContainer>
      <NameHeader>Tiffany Bouchard</NameHeader>
      <Bio>
        Toronto based developer passionate about actualizing innovation,
        creativity and design.
      </Bio>
    </MainContainer>
    <Socials />
  </Section>
)

export default LandingSection

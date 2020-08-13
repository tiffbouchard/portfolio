import React from "react"

import styled from "styled-components"

import Nav from "../nav"
// import Socials from "../socials"

const Section = styled.section`
  height: 100vh;
`
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
  font-size: 50px;
  text-align: center;
  margin: 5px;
`
// -webkit-text-fill-color: rgba(247, 245, 241);
// -webkit-text-stroke: 5px black;
const SocialsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align: items: flex-end;
`

const LandingSection = () => (
  <Section>
    <Nav />
    {/* <SocialsContainer></SocialsContainer> */}
    <MainContainer>
      <NameHeader>Tiffany Bouchard</NameHeader>
      <p>
        Toronto based developer passionate about actualizing innovation,
        creativity and design.
      </p>
    </MainContainer>
  </Section>
)

export default LandingSection

import React from "react"
import styled from "styled-components"
import { Spring } from "react-spring/renderprops"
// import Hamburger from "hamburger-react"

import Nav from "../nav"
import Socials from "../socials"

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NameHeader = styled.h1`
  font-family: NeueMontrealLight;
  font-size: 130px;
  text-align: center;
  margin-top: 210px;
  margin-bottom: 5px;
  transition: 0.5s;
  @media (max-width: 950px) {
    font-size: 85px;
  }
  @media (max-width: 600px) {
    font-size: 60px;
    margin-top: 0px;
  }
  @media (max-height: 650px) {
    font-size: 60px;
    margin-top: 0px;
  }
`

const Bio = styled.p`
  font-family: NeueMontrealLight;
  font-size: 25px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 210px;
  transition: 0.5s;
  @media (max-width: 950px) {
    font-size: 17px;
  }
  @media (max-width: 600px) {
    margin: 0 15px 0 15px;
  }
  @media (max-height: 650px) {
    font-size: 17px;
    margin-bottom: 0px;
  }
`

const LandingSection = () => {
  return (
    <Section>
      <Nav />
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 2000 }}
      >
        {props => (
          <div style={props}>
            {/* <Hamburger /> */}

            <div>
              <NameHeader>Tiffany Bouchard</NameHeader>
              <Bio>
                Full-stack developer passionate about actualizing innovation,
                creativity and design.
              </Bio>
            </div>
          </div>
        )}
      </Spring>
      <Socials />
    </Section>
  )
}

export default LandingSection

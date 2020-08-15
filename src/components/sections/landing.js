import React from "react"
import styled from "styled-components"
import { Spring } from "react-spring/renderprops"
import Hamburger from "hamburger-react"

import "./landing.css"

import Nav from "../nav"
import Socials from "../socials"

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NameHeader = styled.h1`
  font-family: NeueMontrealLight;
  font-size: 130px;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 5px;
`

const Bio = styled.p`
  font-family: NeueMontrealLight;
  font-size: 25px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 180px;
`

const LandingSection = () => {
  return (
    <Section>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 500 }}
      >
        {props => (
          <div style={props}>
            <Hamburger className="hamburger" />
            <Nav />
            <div>
              <NameHeader>Tiffany Bouchard</NameHeader>
              <Bio>
                Toronto based developer passionate about actualizing innovation,
                creativity and design.
              </Bio>
            </div>
            <Socials />
          </div>
        )}
      </Spring>
    </Section>
  )
}

export default LandingSection

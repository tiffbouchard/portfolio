import React from "react"
import styled from "styled-components"
import { Spring } from "react-spring/renderprops"
import Hamburger from "hamburger-react"

import Nav from "../nav"
import Socials from "../socials"

const Section = styled.section`
  display: flex;
  height: 100vh;
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
const Ham = styled.Hamburger`
    justify-self: flex-end;
    @media (max-width: 600px) {
      visibility: hidden;
`

const LandingSection = () => {
  return (
    <>
      <Ham />
      <Section>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 500, duration: 500 }}
        >
          {props => (
            <div style={props}>
              <Nav />
              <div>
                <NameHeader>Tiffany Bouchard</NameHeader>
                <Bio>
                  Toronto based developer passionate about actualizing
                  innovation, creativity and design.
                </Bio>
              </div>
              <Socials />
            </div>
          )}
        </Spring>
      </Section>
    </>
  )
}

export default LandingSection

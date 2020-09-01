import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const LandingElementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  nav {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    a {
      font-size: 40px;
      font-family: "NMBold";
      letter-spacing: 1px;
      text-decoration: none;
      color: black;
      -webkit-text-fill-color: #f0faf1;
      -webkit-text-stroke-width: 1.3px;
      -webkit-text-stroke-color: black;
      transition: 0.5s ease-in-out;
      &:hover {
        text-shadow: 2px 2px;
      }
    }
  }
  div {
    text-align: center;
    h1 {
      letter-spacing: 1px;
      font-family: "NMBold";
      font-size: 180px;
      margin: 0px;
    }
    p {
      font-family: "NeueMontreal";
      margin-top: 0px;
      font-size: 30px;
      padding-left: 7px;
    }
  }
`

const LandingSection = () => {
  return (
    <section className="landing-section">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 2000 }}
      >
        {props => (
          <LandingElementsContainer style={props}>
            <div>
              <h1>TIFFANY BOUCHARD</h1>
              <p>
                Full-stack developer passionate about actualizing innovation,
                creativity and design.
              </p>
            </div>
          </LandingElementsContainer>
        )}
      </Spring>
    </section>
  )
}

export default LandingSection

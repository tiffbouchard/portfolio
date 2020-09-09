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
      font-size: 190px;
      margin: 0px;
      transition: 0.5s;
      @media (max-width: 1280px) {
        font-size: 150px;
      }
      @media (max-width: 800px) {
        font-size: 120px;
      }
      @media (max-width: 550px) {
        font-size: 90px;
      }
      @media (max-width: 420px) {
        font-size: 60px;
      }
    }
    p {
      font-family: "NeueMontreal";
      margin-top: 0px;
      font-size: 30px;
      padding-left: 7px;
      @media (max-width: 950px) {
        font-size: 30px;
      }
      @media (max-width: 550px) {
        font-size: 25px;
      }
      @media (max-width: 420px) {
        font-size: 15px;
      }
    }
  }
`

const LandingSection = props => {
  return (
    <section className="landing-section" id="home">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 300, duration: 1000 }}
      >
        {props => (
          <LandingElementsContainer style={props}>
            <div>
              <h1>TIFFANY BOUCHARD</h1>
              <p>
                Full-stack developer passionate about actualizing innovation,
                creativity and beautiful design.
              </p>
            </div>
          </LandingElementsContainer>
        )}
      </Spring>
    </section>
  )
}

export default LandingSection

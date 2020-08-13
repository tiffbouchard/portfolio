import React from "react"
import styled from "styled-components"

import Section from "../../styles/Section"

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 70px 10px 70px;
  p {
    font-family: "Montserrat", sans-serif;
  }
`
const AboutHeader = styled.h1`
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin: 70px 0 0 0;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    height: 50px;
    filter: grayscale(100%) brightness(70%) contrast(2);
    padding: 10px;
    &:hover {
      filter: none;
      transition-duration: 0.5s;
    }
  }
`

const SubHeaders = styled.h2`
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`

const AboutSection = props => (
  <section id="about">
    <AboutContainer>
      <AboutHeader>about</AboutHeader>
      <p>
        I am a software developer based in Toronto, ON and I strive to combine
        my love for beautiful design with my passion for building things with
        code. I aim to combine my wide range of skills and expereinces and
        things I like to build some great things
      </p>
      <SubHeaders>SKILLS</SubHeaders>
      <SkillsContainer>
        {/* <img src={html} alt="django" />
        <img src={css} alt="django" />
        <img src={javascript} alt="django" />
        <img src={jquery} alt="django" />
        <img src={python} alt="django" />
        <img src={react} alt="django" />
        <img src={django} alt="django" />
        <img src={nodejs} alt="django" />
        <img src={express} alt="django" />
        <img src={mongodb} alt="django" />
        <img src={postgresql} alt="django" /> */}
      </SkillsContainer>
    </AboutContainer>
  </section>
)

export default AboutSection

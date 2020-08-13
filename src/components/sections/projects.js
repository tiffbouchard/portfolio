import React from "react"
import Section from "../../styles/Section"

import styled from "styled-components"

// import projectone from "../../images/tinker.jpg"

const Header = styled.h1`
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin: 70px 0 0 0;
  text-align: center;
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
  grid-template-rows: auto;
  grid-gap: 10px;
  margin: 10px 70px 10px 70px;
  img {
    width: 100%;
    height: auto;
  }
`

const ProjectDiv = styled.div`
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: white;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`

const ProjectsSection = props => (
  <Section id="work">
    <Header>work</Header>
    <ProjectContainer></ProjectContainer>
  </Section>
)

export default ProjectsSection

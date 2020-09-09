import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const AboutElementsContainer = styled.div`
  max-width: 900px;
  h1 {
    margin: 0px 30px 50px 30px;
    font-size: 47px;
    font-family: "NMBold";
  }
  p {
    margin: 0px 30px 50px 30px;
    font-family: "NeueMontreal";
    text-align: justify;
  }
`
const SkillsElementsContainer = styled.div`
  margin: 0px 30px 50px 30px;
  h1 {
    font-size: 47px;
    font-family: "NMBold";
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ul {
      font-family: "NeueMontreal";
      list-style-type: none;
      padding: 0;
    }
    .header {
      font-family: "NMBold";
    }
  }
`

const Anchor = styled.div`
  height: 100%;
  min-height: 180px;
`

const AboutSection = props => {
  React.useEffect(() => {
    AOS.init()
  })

  return (
    <section className="sub-section">
      <Anchor id="about" />
      <div>
        <AboutElementsContainer
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <h1>ABOUT</h1>
          <p>
            I am a full-stack developer based in Toronto. I received my BA in
            Philosophy and Criminology from the University of Toronto and
            graduted from General Assembly's Software Engineering Immersive
            program in July 2020.
            <br />
            <br />I strive to combine my love for design and creative visions
            with my passion for logic and technology.
            <br />
            <br />
            When I am not behind my screen, I'm probably travelling, staying
            active, or listening to good music and eating good food.
          </p>
        </AboutElementsContainer>
        <SkillsElementsContainer
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="1000"
        >
          <h1>SKILLS</h1>
          <div>
            <ul>
              <li className="header">LANGUAGES</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
            <ul>
              <li className="header">FRAMEWORKS</li>
              <li>React</li>
              <li>Next</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
            <ul>
              <li className="header">TOOLS</li>
              <li>Git & Github</li>
              <li>Bash</li>
              <li>Chrome DevTools</li>
              <li>Postman</li>
              <li>MongoDB</li>
            </ul>
            <ul>
              <li className="header">DESIGN</li>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Prototyping</li>
              <li>Wireframing</li>
              <li>ERD</li>
            </ul>
          </div>
        </SkillsElementsContainer>
      </div>
    </section>
  )
}

export default AboutSection

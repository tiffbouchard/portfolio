import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const AboutElementsContainer = styled.div`
  max-width: 900px;
  h1 {
    margin: 0px 30px 50px 30px;
    font-size: 30px;
  }
  p {
    margin: 0px 30px 50px 30px;
    text-align: justify;
    a {
      color: black;
      &:hover {
        color: black;
      }
    }
  }
`
const SkillsElementsContainer = styled.div`
  margin: 0px 30px 50px 30px;
  h1 {
    font-size: 30px;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ul {
      list-style-type: none;
      padding: 0;
    }
    .header {
      margin-bottom: 5px;
    }
  }
`

const AboutSection = props => {
  React.useEffect(() => {
    AOS.init()
  })

  return (
    <section className="sub-section">
      <div>
        <AboutElementsContainer
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <p>
            I am a full-stack developer based in Toronto. After graduating from
            the University of Toronto with a BA in Philosophy and Criminology, I
            revisited my interest in development and enrolled in General
            Assembly's Software Engineering Immersive program. I possess a deep
            interest for all aspects of development, from learning new languages
            and frameworks to understanding how computers work. I learn a little
            more everyday and have no intentions of stopping.
            <br />
            <br />
            My love for good design influences my desire to write clean code and
            create beautiful interfaces that provide seamless UX.
            <br />
            <br />
            When I am not behind my screen, I'm probably travelling, staying
            active, or listening to music, watching movies and feasting on some
            bomb-ass food{" "}
            <a href="http://instagram.com/weatingood" target="blank">
              (food gram plug🍴)
            </a>
            .
          </p>
        </AboutElementsContainer>
        <SkillsElementsContainer
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="1000"
        >
          <div>
            <ul>
              <li className="header">Languages</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
            <ul>
              <li className="header">Frameworks</li>
              <li>React</li>
              <li>Next</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
            <ul>
              <li className="header">Tools</li>
              <li>Git & Github</li>
              <li>Bash</li>
              <li>Chrome DevTools</li>
              <li>Postman</li>
              <li>MongoDB</li>
            </ul>
            <ul>
              <li className="header">Design</li>
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

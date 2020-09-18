import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const AboutElementsContainer = styled.div`
  font-family: NeueMontreal;
  max-width: 1300px;
  display: flex;
  padding: 40px;
  p {
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
  font-family: NeueMontreal;
  padding: 40px;
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
    <section>
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
        <AboutElementsContainer>
          <p>
            I am a full-stack developer based in Toronto. After graduating from
            the University of Toronto with a BA in Philosophy and Criminology, I
            revisited my interest in development and enrolled in General
            Assembly's Software Engineering Immersive program. I possess a deep
            interest for all aspects of development, from learning new languages
            and frameworks to understanding how computers work.
            <br />
            <br />
            My love for good design influences my desire to write clean code and
            create beautiful interfaces that provide seamless UX. I have a
            passion for minimalism and I believe that less is truly more not
            only in design but all aspects of life. I am a very well-rounded
            individual with experiences in different fields and many different
            interests. My knowledge and multidisciplinary approach allows me to
            bring something different to the roles I work in and enables me to
            see the big picture and understand how visions and ideas can come to
            fruition.
            <br />
            <br />
            When I am not behind my screen, I'm probably travelling, staying
            active, or listening to music, watching movies and feasting on good
            food
            <a href="http://instagram.com/betterfull" target="blank">
              (food blog plug🍴).
            </a>
            <br />
            <br />I would love to chat, so feel free to hit me up! You can reach
            me at tiffnbouchard@gmail.com!
          </p>
        </AboutElementsContainer>
        <SkillsElementsContainer>
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

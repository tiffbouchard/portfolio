import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const AboutElementsContainer = styled.div`
  font-family: NeueMontreal;
  max-width: 1000px;
  display: flex;
  padding: 40px;
  margin-top: 30px;
  p {
    text-align: center;
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
  padding: 0 40px 40px 40px;
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
            I am a developer & designer based in Toronto.  
            <br />
            <br />
            My love for design influences my desire to write clean code and
            create beautiful interfaces that provide seamless user experience. I am inspired by minimalism and I believe that less is truly more not
            only in design but life. I utilize a multidisciplinary approach to development and design which allows me to
            see the bigger picture and create a shared vision.
            <br />
            <br />
            I enjoy to travelling, moving my body, listening to music, watching movies and eating a lot.
            <br />
            <br />Feel free to hit me up. You can reach
            me at tiffnbouchard@gmail.com.
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

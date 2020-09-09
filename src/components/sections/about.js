import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const AboutElementsContainer = styled.div`
  max-width: 900px;
  margin-bottom: 50px;
  h1 {
    font-size: 47px;
    font-family: "NMBold";
  }
  p {
    font-family: "NeueMontreal";
    text-align: justify;
  }
`
const SkillsElementsContainer = styled.div`
  h1 {
    font-size: 47px;
    font-family: "NMBold";
  }
  div {
    display: flex;
    justify-content: space-between;
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
const AboutSection = props => {
  AOS.init()
  return (
    <section className="sub-section">
      <div id="about">
        <AboutElementsContainer
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <h1>ABOUT</h1>
          <p>
            I am a full-stack software developer based in Toronto. I strive to
            combine my love for beautiful design with my passion for building
            things with code. I aim to combine my wide range of skills and
            expereinces and things I like to build some great things. When I am
            not behind my screen, I'm probably travelling, staying active, or
            listening to good music and eating good food. I am a software
            developer based in Toronto, ON and I strive to combine my love for
            beautiful design with my passion for building things with code. I
            aim to combine my wide range of skills and expereinces and things I
            like to build some great things I am a software developer based in
            Toronto, ON and I strive to combine my love for beautiful design
            with my passion for building things with code. I aim to combine my
            wide range of skills and expereinces and things I like to build some
            great things. I am a software developer based in Toronto, ON and I
            strive to combine my love for beautiful design with my passion for
            building things with code. I aim to combine my wide range of skills
            and expereinces and things I like to build some great things
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

// const About = () => {
//   return (
//     <>
//       <Paragraph>
//         I am a developer based in Toronto but ready to take on the world. I
//         completed my Honours Bachelor of Arts at the University of Toronto in
//         Philosophy and Criminology. I am a graduate of General Assembly and
//         self-taught.
//       </Paragraph>
//       <Paragraph>My skillset includes</Paragraph>
//       <Paragraph>
//         I am in love with travelling the world, meeting new fascinating people
//         and gaining new experiences.
//       </Paragraph>

//       <Paragraph>
//         I am also an avid believer of minimalist and that less is more. I try to
//         continously learn ways to implement this into my code and design.
//         Despite being messy, mess gives way to anxiety and unneeded baggage down
//         the line. I believe this is true with code and I hope to learn ways to
//         always improve my code to make it clean and coherent.
//       </Paragraph>
//       <Paragraph>
//         I am a firm believer that creativity is the future and love and look
//         forward to working on projects with visionaries to help their ideas come
//         to life.
//       </Paragraph>
//       <Paragraph>
//         I believe that beautiful design is imperitive to a good product and is a
//         symbol of what the product stands for. I aim to implement beautiful
//         design in all aspects of my code.
//       </Paragraph>
//     </>
//   )
// }

// export default About

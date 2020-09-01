import React from "react"

import styled from "styled-components"

const AboutElementsContainer = styled.div`
  max-width: 900px;
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
  }
`
const AboutSection = props => (
  <section className="sub-section">
    <div id="about">
      <AboutElementsContainer>
        <h1>ABOUT</h1>
        <p>
          I am a software developer based in Toronto, ON and I strive to combine
          my love for beautiful design with my passion for building things with
          code. I aim to combine my wide range of skills and expereinces and
          things I like to build some great things. I am a software developer
          based in Toronto, ON and I strive to combine my love for beautiful
          design with my passion for building things with code. I aim to combine
          my wide range of skills and expereinces and things I like to build
          some great things I am a software developer based in Toronto, ON and I
          strive to combine my love for beautiful design with my passion for
          building things with code. I aim to combine my wide range of skills
          and expereinces and things I like to build some great things. I am a
          software developer based in Toronto, ON and I strive to combine my
          love for beautiful design with my passion for building things with
          code. I aim to combine my wide range of skills and expereinces and
          things I like to build some great things
        </p>
      </AboutElementsContainer>
      <SkillsElementsContainer>
        <h1>SKILLS</h1>
        <div>
          <ul>
            <li>LANGUAGES</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
          <ul>
            <li>FRAMEWORKS</li>
            <li>React</li>
            <li>Next</li>
            <li>Express</li>
            <li>Node</li>
          </ul>
          <ul>
            <li>TOOLS</li>
            <li>Git & Github</li>
            <li>Bash</li>
            <li>Chrome DevTools</li>
            <li>Postman</li>
            <li>MongoDB</li>
          </ul>
          <ul>
            <li>DESIGN</li>
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

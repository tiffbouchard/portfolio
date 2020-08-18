import React from "react"
import styled from "styled-components"

const Paragraph = styled.div`
  padding: 10px;
`

const About = () => {
  return (
    <>
      <Paragraph>
        I am a developer based in Toronto but ready to take on the world. I
        completed my Honours Bachelor of Arts at the University of Toronto in
        Philosophy and Criminology. I am a graduate of General Assembly and
        self-taught.
      </Paragraph>
      <Paragraph>My skillset includes</Paragraph>
      <Paragraph>
        I am in love with travelling the world, meeting new fascinating people
        and gaining new experiences.
      </Paragraph>

      <Paragraph>
        I am also an avid believer of minimalist and that less is more. I try to
        continously learn ways to implement this into my code and design.
        Despite being messy, mess gives way to anxiety and unneeded baggage down
        the line. I believe this is true with code and I hope to learn ways to
        always improve my code to make it clean and coherent.
      </Paragraph>
      <Paragraph>
        I am a firm believer that creativity is the future and love and look
        forward to working on projects with visionaries to help their ideas come
        to life.
      </Paragraph>
      <Paragraph>
        I believe that beautiful design is imperitive to a good product and is a
        symbol of what the product stands for. I aim to implement beautiful
        design in all aspects of my code.
      </Paragraph>
    </>
  )
}

export default About

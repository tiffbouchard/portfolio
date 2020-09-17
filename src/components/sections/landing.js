import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const AboutElementsContainer = styled.div`
  max-width: 1250px;
  margin: 40px;
  p {
    font-size: 40px;
  }
`

const LandingSection = props => {
  React.useEffect(() => {
    AOS.init()
  })

  return (
    <section>
      <div>
        <AboutElementsContainer
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <p>
            Full-stack developer passionate about actualizing innovation,
            creativity & quality design, with a mission to build things with
            purpose that enrich lives.
          </p>
        </AboutElementsContainer>
      </div>
    </section>
  )
}

export default LandingSection

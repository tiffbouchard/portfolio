import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const AboutElementsContainer = styled.div`
  height: 70vh;
  max-width: 1250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 40px;
  p {
    font-family: NeueMontrealLight;
    font-size: 40px;
    @media (max-width: 400px) {
      font-size: 30px;
    }
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

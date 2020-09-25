import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import ExternalLinkIcon from "../icons/external.svg"
import Github from "../icons/hollow-cut-github.svg"

const MainProjectsContainer = styled.div`
  max-width: 1300px;
  @media (max-width: 830px) {
    width: 100%;
    h1 {
      margin: 30px;
    }
  }
`

const ProjectContainerOne = styled.div`
  display: flex;
  margin: 40px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    h4 {
      font-family: NeueMontreal;
      font-size: 25px;
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      span {
        font-family: NeueMontreal;
        font-size: 12px;
        padding: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        border: solid 1px;
      }
    }
    p {
      font-family: NeueMontreal;
      text-align: justify;
    }
  }
  img {
    height: 400px;
    margin-left: 30px;
  }
  @media (max-width: 1000px) {
    display: block;
    flex-wrap: wrap;
    img {
      max-width: 100%;
      height: auto;
      margin-left: 0px;
    }
  }
`

const ProjectContainerTwo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
  margin: 60px 40px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    h4 {
      font-family: NeueMontreal;
      font-size: 25px;
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      span {
        font-family: "NeueMontreal";
        font-size: 11px;
        padding: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        border: solid 1px;
        flex-wrap: wrap;
      }
    }
    p {
      font-family: "NeueMontreal";
      text-align: justify;
    }
  }
  img {
    margin-right: 30px;
    max-width: 600px;
  }
  @media (max-width: 1000px) {
    display: block;
    flex-wrap: wrap;
    img {
      max-width: 100%;
      height: auto;
      margin-right: 0px;
    }
  }
`

const OtherProjectsBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-family: "NeueMontreal";
    margin: 40px 0px;
    text-align: center;
    font-size: 12px;
    padding: 5px;
    border: solid 1px;
    width: 150px;
    background-color: transparent;
  }
`

const ProjectsSection = props => {
  React.useEffect(() => {
    AOS.init()
  })
  return (
    <section id="projects">
      <MainProjectsContainer>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Ojos</h4>
            <div>
              <span>
                <a href="http://github.com/tiffbouchard/ojos" target="blank">
                  Code ↗
                </a>
              </span>
              <span>
                <a href="http://ojos.vercel.app" target="blank">
                  Live ↗
                </a>
              </span>
            </div>
            <p>
              OJOS is an eCommerce site created for a friends boutique specializing in
              deadstock fabrics, one-of-one and custom pieces. It is made with
              Next.js framework for React. It uses Sanity.io headless CMS for
              seamless user interaction so that admin can add, delete and update
              products when they would like. A customer can add products to
              their cart and checkout with Shopify. The site also features an
              Instagram feed that uses the Instagram authless API and newsletter
              functionality integrated with Mailchimp. The site is hosted on
              Vercel.
            </p>
            <div>
              <span>React</span>
              <span>Next.js</span>
              <span>Sanity.io</span>
              <span>Shopify</span>
              <span>Vercel</span>
            </div>
          </div>
          <div>
            <img src="https://i.imgur.com/U9i2m2e.png" />
          </div>
        </ProjectContainerOne>
        <ProjectContainerTwo
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Forkpitch</h4>
            <div>
              <span>
                <a
                  href="http://github.com/tiffbouchard/forkpitch"
                  target="blank"
                >
                  Code ↗
                </a>
              </span>
              <span>
                <a href="http://forkpitch.herokuapp.com" target="blank">
                  Live ↗
                </a>
              </span>
            </div>
            <p>
              Forkpitch is a music review search engine application that uses an
              unofficial Pitchfork API to scrape album review data. Users are
              able to log in with Google OAuth, leave reviews on albums, access
              their reviews, delete reviews and search Pitchfork album reviews.
              The design is heavily inspired by the original Pitchfork website.
              I have recently began improving it so there is still a lot of work
              that needs to be done, such as protecting routes, adding ability
              to save albums and edit reviews.
            </p>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div>
            <img src="https://i.imgur.com/Kiht1Ux.png" />
          </div>
        </ProjectContainerTwo>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Chef</h4>
            <div>
              <span>
                <a
                  href="http://github.com/tiffbouchard/chef.dev"
                  target="blank"
                >
                  Code ↗
                </a>
              </span>
              {/* <span>
                <a href="">Live</a>
              </span> */}
            </div>
            <p>
              A blog geared towards tech tutorials. Blog posts are enabled with
              a fully functional RTE. User's can post blog posts, view other
              users blog posts as well as other users public profiles.
              Collaborated with a team of two other developers. (Currently
              fixing bugs)
            </p>
            <div>
              <span>React</span>
              <span>Material-UI</span>
              <span>MongoDB</span>
              <span>Node.js</span>
              <span>Express</span>
            </div>
          </div>
          <div>
            <img src="https://i.imgur.com/amGK4Xd.png" />
          </div>
        </ProjectContainerOne>
      </MainProjectsContainer>
      <OtherProjectsBtn>
        <a href="http://github.com/tiffbouchard/repositories" target="blank">
          Other Projects
        </a>
      </OtherProjectsBtn>
    </section>
  )
}

export default ProjectsSection

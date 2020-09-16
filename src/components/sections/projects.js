import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"
import OJOS from "../../../static/images/ojos.png"
import ExternalLinkIcon from "../icons/external.svg"
import Github from "../icons/hollow-cut-github.svg"

const MainProjectsContainer = styled.div`
  max-width: 900px;
  h1 {
    font-size: 30px;
    font-family: "NeueMontreal";
    text-align: right;
    margin: 0 30px 40px 30px;
  }
  @media (max-width: 830px) {
    width: 100%;
    h1 {
      margin: 30px;
    }
  }
`

const OtherProjectsContainer = styled.div`
  max-width: 900px;
  @media (max-width: 420px) {
    width: 100%;
  }
`

const ProjectContainerOne = styled.div`
  display: flex;
  margin: 0px 30px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    h4 {
      font-family: "NeueMontreal";
      font-size: 20px;
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      span {
        font-family: "NeueMontreal";
        font-size: 12px;
        padding: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        border-radius: 2px;
        border: solid 1px;
      }
    }
    p {
      font-family: "NeueMontreal";
      text-align: justify;
    }
  }
  img {
    height: 400px;
    margin-left: 30px;
  }
  @media (max-width: 830px) {
    display: block;
    flex-wrap: wrap;
    margin: 30px;
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
  margin: 60px 30px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    h4 {
      font-family: "NeueMontreal";
      font-size: 20px;
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      span {
        font-family: "NeueMontreal";
        font-size: 12px;
        padding: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        border-radius: 2px;
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
    max-width: 500px;
  }
  @media (max-width: 830px) {
    display: block;
    flex-wrap: wrap;
    margin: 30px;
    img {
      max-width: 100%;
      height: auto;
      margin-left: 0px;
    }
  }
`

const ProjectsSection = props => {
  React.useEffect(() => {
    AOS.init()
  })
  return (
    <section className="sub-section" id="projects">
      <MainProjectsContainer>
        <h1
          id="projects-header"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          Projects
        </h1>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>
              Ojos
              <a href="http://ojos.vercel.app" target="blank">
                <ExternalLinkIcon
                  style={{ height: "20px", marginLeft: "5px" }}
                />
              </a>
              <a href="http://github.com/tiffbouchard/ojos" target="blank">
                <Github style={{ height: "20px", marginLeft: "5px" }} />
              </a>
            </h4>
            <div>
              <span>React</span>
              <span>Next.js</span>
              <span>Sanity.io</span>
              <span>Shopify</span>
              <span>Vercel</span>
            </div>
            <p>
              OJOS is an eCommerce site created for a boutique specializing in
              deadstock fabrics, one-of-one and custom pieces. It is made with
              Next.js framework for React. It uses Sanity.io headless CMS for
              seamless user interaction so that admin can add, delete and update
              products when they would like. A customer can add products to
              their cart and checkout with Stripe. The site also features an
              Instagram feed that uses the Instagram authless API and newsletter
              functionality integrated with Mailchimp. The site is hosted on
              Vercel.
            </p>
          </div>
          <div>
            <img src={OJOS} />
          </div>
        </ProjectContainerOne>
        <ProjectContainerTwo
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>
              Iome
              {/* <a href="http://ojos.vercel.app" target="blank">
                <ExternalLinkIcon
                  style={{ height: "20px", marginLeft: "5px" }}
                />
              </a> */}
              <a href="http://github.com/tiffbouchard/iome" target="blank">
                <Github style={{ height: "20px", marginLeft: "5px" }} />
              </a>
            </h4>
            <div>
              <span>React</span>
              <span>Express</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>RSuite</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <p>
              A task management app geared towards creatives to help boost their
              confidence in creating their portfolio as well as provide
              motivation and helpful resources. Users are able to walk through
              modules, take notes and track their progress. Future features
              include an explore page similar to Dribbble where final portfolios
              can be shared and feedback can be circulated. Collaborated with
              one developer and three UX designers.
              <br />
              <br />
              *This project is a work in progress.
            </p>
          </div>
          <div>
            <img src="https://i.imgur.com/d3YRIPg.png" />
          </div>
        </ProjectContainerTwo>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>
              Chef
              <a href="http://chefdev.herokuapp.com" target="blank">
                <ExternalLinkIcon
                  style={{ height: "20px", marginLeft: "5px" }}
                />
              </a>
              <a href="http://github.com/tiffbouchard/chef.dev" target="blank">
                <Github style={{ height: "20px", marginLeft: "5px" }} />
              </a>
            </h4>
            <div>
              <span>React</span>
              <span>Material-UI</span>
              <span>MongoDB</span>
              <span>Node.js</span>
              <span>Express</span>
            </div>
            <p>
              A blog geared towards tech tutorials. Blog posts are enabled with
              a fully functional RTE. User's can post blog posts, view other
              users blog posts as well as other users public profiles.
              Collaborated with a team of two other developers.
            </p>
          </div>
          <div>
            <img src="https://i.imgur.com/NsFZSp0.png" />
          </div>
        </ProjectContainerOne>
      </MainProjectsContainer>
      <button>More Projects</button>
      <OtherProjectsContainer>
        {/* <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Sneaker Collector</h4>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Python</span>
              <span>Django</span>
            </div>
            <p>
              An app that allows you to keep track of your sneaker collection as
              well as cleaning schedules. You can add and delete sneakers and
              cleaning schedules as well.
            </p> */}
        {/* </div>
        </ProjectContainerOne> */}
      </OtherProjectsContainer>
    </section>
  )
}

export default ProjectsSection

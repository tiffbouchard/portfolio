import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const MainProjectsContainer = styled.div`
  max-width: 900px;
  h1 {
    font-size: 47px;
    font-family: "NMBold";
    text-align: right;
    margin-bottom: 40px;
  }
`

const OtherProjectsContainer = styled.div`
  max-width: 900px;
`

const ProjectContainerOne = styled.div`
  display: flex;
  margin-bottom: 0px;
  margin-top: 0px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4 {
      font-family: "NMBold";
      font-size: 30px;
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
    &:hover {
      opacity: 0.5;
    }
  }
`

const ProjectContainerTwo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
  margin-top: 60px;
  margin-bottom: 60px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4 {
      font-family: "NMBold";
      font-size: 30px;
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
    margin-right: 30px;
    max-width: 400px;
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
          PROJECTS
        </h1>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>OJOS</h4>
            <div>
              <span>React</span>
              <span>Next.js</span>
              <span>Sanity.io</span>
              <span>Stripe</span>
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
            <img src="https://i.imgur.com/jfrwOT3.png" />
          </div>
        </ProjectContainerOne>
        <ProjectContainerTwo
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Project Six</h4>
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
            <h4>CHEF.DEV</h4>
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
      <OtherProjectsContainer>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Forkpitch</h4>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Materialize</span>
              <span>MongoDB</span>
              <span>Express</span>
              <span>Node.js</span>
              <span>Pitchfork API</span>
              <span>Heroku</span>
            </div>
            <p>
              An app that allows you to search Pitchfork music review database
              and leave reviews on the reviews. Pretty meta.
            </p>
          </div>
        </ProjectContainerOne>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>How Risky?</h4>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>Materialize</span>
              <span>Python</span>
              <span>Django</span>
              <span>Postgresql</span>
              <span>AWS S3</span>
              <span>COVID-19 API</span>
            </div>
            <p>
              An app that displays to the users COVID statistics based on their
              given location. A user can also take risk assessments for certain
              activities as well as add, delete and update activities and create
              schedules. Collaborated with a team of three other developers.
            </p>
          </div>
        </ProjectContainerOne>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Ebay Automation</h4>
            <div>
              <span>Python</span>
              <span>Ebay API</span>
            </div>
            <p>
              Python script that automates specific searches for listings and
              adds them to a users watchlist.
            </p>
          </div>
        </ProjectContainerOne>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Delete Screenshots</h4>
            <div>
              <span>Python</span>
            </div>
            <p>
              A simple Python script that helps me get rid of all the
              screenshots I take without needing to go through them all.
            </p>
          </div>
        </ProjectContainerOne>
        <ProjectContainerOne
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
            </p>
          </div>
        </ProjectContainerOne>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Github Profile</h4>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Github API</span>
            </div>
            <p>
              A simple app that allows you to search the Github API and display
              a profile for that specific user. It displays, followers, stars,
              followings and repository information along with respective links.
            </p>
          </div>
        </ProjectContainerOne>
        <ProjectContainerOne
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div>
            <h4>Hangman</h4>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
            </div>
            <p>
              My first project done with vanilla HTML, CSS and Javascript. A
              simple hangman game with a lot of bugs, I want to fix this up but
              also like having it as a throwback.
            </p>
          </div>
        </ProjectContainerOne>
      </OtherProjectsContainer>
    </section>
  )
}

export default ProjectsSection

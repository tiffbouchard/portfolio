import React from "react"
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
      margin-right: 30px;
      font-family: "NeueMontreal";
      text-align: justify;
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
      margin-left: 30px;
      font-family: "NeueMontreal";
      text-align: justify;
    }
  }
`

const ProjectsSection = props => (
  <section className="sub-section">
    <MainProjectsContainer>
      <h1 id="projects-header">PROJECTS</h1>
      <ProjectContainerOne>
        <div>
          <h4>OJOS</h4>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>Sanity.io</span>
            <span>Stripe</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" />
        </div>
      </ProjectContainerOne>
      <ProjectContainerTwo>
        <div>
          <h4>Project Six</h4>
          <div>
            <span>React</span>
            <span>MongoDB</span>
            <span>RSuite</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. .Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" />
        </div>
      </ProjectContainerTwo>
      <ProjectContainerOne>
        <div>
          <h4>CHEF.DEV</h4>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>Sanity.io</span>
            <span>Stripe</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" />
        </div>
      </ProjectContainerOne>
    </MainProjectsContainer>
    <OtherProjectsContainer>
      <ProjectContainerOne>
        <div>
          <h4>Forkpitch</h4>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>Sanity.io</span>
            <span>Stripe</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
      </ProjectContainerOne>
      <ProjectContainerOne>
        <div>
          <h4>How Risky?</h4>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>Sanity.io</span>
            <span>Stripe</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
      </ProjectContainerOne>
      <ProjectContainerOne>
        <div>
          <h4>Ebay Automation</h4>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>Sanity.io</span>
            <span>Stripe</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
      </ProjectContainerOne>
      <ProjectContainerOne>
        <div>
          <h4>Delete Screenshots</h4>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>Sanity.io</span>
            <span>Stripe</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
      </ProjectContainerOne>
      <ProjectContainerOne>
        <div>
          <h4>Sneaker Collector</h4>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>Sanity.io</span>
            <span>Stripe</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
      </ProjectContainerOne>
      <ProjectContainerOne>
        <div>
          <h4>Github Profile</h4>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>Sanity.io</span>
            <span>Stripe</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
      </ProjectContainerOne>
      <ProjectContainerOne>
        <div>
          <h4>Hangman</h4>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>Sanity.io</span>
            <span>Stripe</span>
          </div>
          <p>
            Design focused and curious full-stack web developer passionate about
            innovation, creativity and actualizing visions by solving problems
            .Design focused and curious full-stack web developer passionate
            about innovation, creativity and actualizing visions by solving
            problems. Design focused and curious full-stack web developer
            passionate about innovation, creativity and actualizing visions by
            solving problems .
          </p>
        </div>
      </ProjectContainerOne>
    </OtherProjectsContainer>
  </section>
)

export default ProjectsSection

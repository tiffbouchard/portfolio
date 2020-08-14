import React, { Component } from "react"
import styled from "styled-components"

import Modal from "./modal.js"

const ProjectList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
    button {
      padding: 10px;
      font-family: NeueMontreal;
      background: none;
      font-size: 40px;
      border: none;
      color: black;
      &:hover {
        cursor: pointer;
        transition-duration: 0.5s;
        -webkit-text-fill-color: #f0f0f0;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
      }
      &:focus {
        outline: none;
      }
    }
  }
`

class Work extends Component {
  state = {
    showAbout: false,
    showWork: false,
    showContact: false,
  }

  openAboutModal = () => {
    this.setState({ showAbout: true })
  }

  closeAboutModal = () => {
    this.setState({ showAbout: false })
  }

  openWorkModal = () => {
    this.setState({ showWork: true })
  }

  closeWorkModal = () => {
    this.setState({ showWork: false })
  }

  openContactModal = () => {
    this.setState({ showContact: true })
  }

  closeContactModal = () => {
    this.setState({ showContact: false })
  }

  render() {
    return (
      <ProjectList>
        <Modal
          showAbout={this.state.showAbout}
          handleClose={this.closeAboutModal}
        ></Modal>
        <Modal
          showWork={this.state.showWork}
          handleClose={this.closeWorkModal}
        ></Modal>
        <Modal
          showContact={this.state.showContact}
          handleClose={this.closeContactModal}
        ></Modal>
        <button onClick={this.openAboutModal}>About</button>
        <button onClick={this.openWorkModal}>Work</button>
        <button onClick={this.openContactModal}>Contact</button>
        <button href="/">Resume</button>
      </ProjectList>
    )
  }
}

export default Work

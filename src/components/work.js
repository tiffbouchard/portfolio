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
    showPOne: false,
    showPTwo: false,
    showPThree: false,
    showPFour: false,
  }

  openOneModal = () => {
    this.setState({ showPOne: true })
  }

  closeOneModal = () => {
    this.setState({ showPOne: false })
  }

  openTwoModal = () => {
    this.setState({ showPTwo: true })
  }

  closeTwoModal = () => {
    this.setState({ showPTwo: false })
  }

  openThreeModal = () => {
    this.setState({ showPThree: true })
  }

  closeThreeModal = () => {
    this.setState({ showPThree: false })
  }

  openFourModal = () => {
    this.setState({ showPFour: true })
  }

  closeFourModal = () => {
    this.setState({ showPFour: false })
  }

  render() {
    return (
      <ProjectList>
        <Modal
          showAbout={this.state.showPOne}
          handleClose={this.closeOneModal}
        ></Modal>
        <Modal
          showWork={this.state.showPTwo}
          handleClose={this.closeTwoModal}
        ></Modal>
        <Modal
          showContact={this.state.showPThree}
          handleClose={this.closeThreeModal}
        ></Modal>
        <Modal
          showContact={this.state.showPFour}
          handleClose={this.closeFourModal}
        ></Modal>
        <button onClick={this.openOneModal}>TaskLite</button>
        <button onClick={this.openTwoModal}>OJOS</button>
        <button onClick={this.openThreeModal}>Chef.dev</button>
        <button onClick={this.openFourModal}>LinenWay</button>
      </ProjectList>
    )
  }
}

export default Work

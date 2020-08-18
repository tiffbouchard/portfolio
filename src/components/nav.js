import React, { Component } from "react"
import styled from "styled-components"
import { Trail, Spring } from "react-spring/renderprops"

import Form from "./contactform.js"
import About from "./about.js"
import Work from "./work.js"
import Modal from "./modal.js"

const NavBar = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 0;
    button {
      padding: 10px;
      font-family: NeueMontreal;
      background: none;
      font-size: 40px;
      border: none;
      color: black;
      transition: 0.5s;
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
      @media (max-width: 950px) {
      font-size: 30px;
    }
      @media (max-width: 600px) {
        font-size: 20px;
    }
    @media (max-height: 650px) {
      font-size: 20px;
    }
    }
  }
`

class NavBarSection extends Component {
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
    const items = [
      { title: "About", key: 1, onClick: this.openAboutModal },
      { title: "Work", key: 2, onClick: this.openWorkModal },
      { title: "Contact", key: 3, onClick: this.openContactModal },
      { title: "Resume", key: 4, onClick: this.openResumeModal },
    ]
    return (
      <NavBar id="home">
        <Modal
          showAbout={this.state.showAbout}
          handleClose={this.closeAboutModal}
        >
          <About />
        </Modal>
        <Modal showWork={this.state.showWork} handleClose={this.closeWorkModal}>
          <Work />
        </Modal>
        <Modal
          showContact={this.state.showContact}
          handleClose={this.closeContactModal}
        >
          <Form />
        </Modal>
        <Trail
          items={items}
          keys={item => item.key}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000, duration: 2000 }}
        >
          {item => props => (
            <button style={props} onClick={item.onClick}>
              {item.title}
            </button>
          )}
        </Trail>
      </NavBar>
    )
  }
}

export default NavBarSection

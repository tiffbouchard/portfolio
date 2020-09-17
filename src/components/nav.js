import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"
import downloadFile from "../../static/documents/tiffanybouchardresume.pdf"

import About from "../components/about"

import Modal from "react-modal"

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#efeee9",
  },
}

const customTwoStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#efeee9",
  },
}

const Nav = styled.nav`
background-color: transparent;
list-style-type: none;
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
margin: 30px;
padding-top: 10px;
padding-bottom: 10px;
transition: background 0.5s;
button, a {
      padding: 10px;
      background: none;
      font-size: 20px;
      border: none;
      color: black;
      transition: 0.5s;
      text-decoration: none;
      &:hover {
        cursor: pointer;
        text-decoration: line-through;
      }
    a {
      color: black;
    }
  }
  .mobile-menu {
    display: none;
    font-family: NeueMontreal;
  }
  .nav-link {
    font-family: NeueMontreal;
  }
  .heading {
    font-family: MigraBold;
    font-size: 40px;
  }
}
  @media (max-width: 960px) {
    .nav-link {
      display: none;
    }
    .mobile-menu {
      display: flex;
    }
  }

  @media (max-width: 460px) {
   .heading {
    font-size: 30px;
    text-align: left;
  }
}
  

  &:hover {
    background-color: #efeee9;
}
`

const NavBar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const [modalTwoIsOpen, setTwoIsOpen] = React.useState(false)

  function openTwoModal() {
    setTwoIsOpen(true)
  }

  function closeTwoModal() {
    setTwoIsOpen(false)
  }

  function openModalAndClose() {
    setTwoIsOpen(false)
    setIsOpen(true)
  }

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 300, duration: 1000 }}
    >
      {props => (
        <Nav style={props}>
          <div>
            <button className="heading" onClick={() => scrollTo("#top")}>
              Tiffany Bouchard
            </button>
          </div>
          <div>
            <button className="nav-link" onClick={openModal}>
              About
            </button>
            <button className="nav-link" onClick={() => scrollTo("#projects")}>
              Projects
            </button>
            <a className="nav-link" href="mailto:tiffnbouchard@gmail.com">
              Contact
            </a>
            <a className="nav-link" href={downloadFile} download>
              Resume
            </a>
            <button
              className="mobile-menu"
              id="menu-modal"
              onClick={openTwoModal}
            >
              Menu
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <button
              style={{
                border: "none",
                fontSize: "25px",
                fontFamily: "NeueMontrealLight",
              }}
              onClick={closeModal}
            >
              X
            </button>
            <About />
          </Modal>

          <Modal
            isOpen={modalTwoIsOpen}
            onRequestClose={closeTwoModal}
            style={customTwoStyles}
          >
            <button
              style={{
                border: "none",
                fontSize: "25px",
                fontFamily: "NeueMontrealLight",
              }}
              onClick={closeTwoModal}
            >
              X
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
              }}
            >
              <button
                style={{
                  border: "none",
                  fontSize: "25px",
                  fontFamily: "NeueMontrealLight",
                }}
                className="nav-link"
                onClick={openModalAndClose}
              >
                About
              </button>
              <a
                style={{
                  border: "none",
                  fontSize: "25px",
                  fontFamily: "NeueMontrealLight",
                }}
                className="nav-link"
                href="http://tiffbouchard.com/#projects"
              >
                Projects
              </a>
              <a
                style={{
                  border: "none",
                  fontSize: "25px",
                  fontFamily: "NeueMontrealLight",
                }}
                className="nav-link"
                href="mailto:tiffnbouchard@gmail.com"
              >
                Contact
              </a>
              <a
                style={{
                  border: "none",
                  fontSize: "25px",
                  fontFamily: "NeueMontrealLight",
                }}
                className="nav-link"
                href={downloadFile}
                download
              >
                Resume
              </a>
            </div>
          </Modal>
        </Nav>
      )}
    </Spring>
  )
}

export default NavBar

import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"
import downloadFile from "../../static/documents/tiffanybouchardresume.pdf"

const Nav = styled.nav`
  font-family: NeueMontreal;
  background-color: transparent;
  z-index: 1000;
  max-width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 40px;
    button {
      padding: 10px;
      background: none;
      font-size: 25px;
      border: none;
      color: black;
      transition: 0.5s;
      text-decoration: none;
      &:hover {
        cursor: pointer;
      }
      &:focus {
      outline: none;
    }
    a {
      color: black;
    }
      @media (max-width: 960px) {
      display: none;
    }
  }
}
`

const NavBar = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 300, duration: 1000 }}
    >
      {props => (
        <Nav style={props} id="top">
          <div>
            <button>Tiffany Bouchard</button>
          </div>
          <div>
            <button onClick={() => scrollTo("#projects")} href="#projects">
              Projects
            </button>
            <button>
              <a href="mailto:tiffnbouchard@gmail.com">Contact</a>
            </button>
            <button>
              <a href={downloadFile} download>
                Resume
              </a>
            </button>
          </div>
        </Nav>
      )}
    </Spring>
  )
}

export default NavBar

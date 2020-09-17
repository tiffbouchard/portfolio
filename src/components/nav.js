import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"
import downloadFile from "../../static/documents/tiffanybouchardresume.pdf"

const Nav = styled.nav`
  font-family: NeueMontreal;
  background-color: transparent;
  z-index: 1000;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 40px;
  transition: background 0.5s;
    button, a {
      padding: 10px;
      background: none;
      font-size: 25px;
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
      @media (max-width: 960px) {
      display: none;
    }
  }
}
&:hover {
  background-color: #efeee9;
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
        <Nav style={props}>
          <div>
            <button onClick={() => scrollTo("#top")}>Tiffany Bouchard</button>
          </div>
          <div id="nav-links">
            <button onClick={() => scrollTo("#projects")} href="#projects">
              Projects
            </button>
            <a href="mailto:tiffnbouchard@gmail.com">Contact</a>
            <a href={downloadFile} download>
              Resume
            </a>
          </div>
        </Nav>
      )}
    </Spring>
  )
}

export default NavBar

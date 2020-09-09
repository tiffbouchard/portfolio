import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const Nav = styled.nav`
  z-index: 1000;
  maxwidth: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 15px;
  background-color: #f0faf1;
    button {
      padding: 10px;
      font-family: NMBold;
      background: none;
      font-size: 45px;
      border: none;
      color: black;
      transition: 0.5s;
      text-decoration: none;
      -webkit-text-fill-color: #f0faf1;
      -webkit-text-stroke-width: 1.3px;
      -webkit-text-stroke-color: black;
      &:hover {
        cursor: pointer;
        text-shadow: 2px 2px;
        transition-duration: 0.5s;
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

const NavBar = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 300, duration: 1000 }}
    >
      {props => (
        <Nav style={props}>
          <button onClick={() => scrollTo("#about")} href="#about">
            ABOUT
          </button>
          <button onClick={() => scrollTo("#projects")} href="#projects">
            PROJECTS
          </button>
          <button onClick={() => scrollTo("#contact")} href="#contact">
            CONTACT
          </button>
          <button href="#resume">RESUME</button>
        </Nav>
      )}
    </Spring>
  )
}

export default NavBar

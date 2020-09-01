import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
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
    a {
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
        text-shadow: 2px 2px;
        transition-duration: 0.5s;
      }
      @media (max-width: 950px) {
      font-size: 50px;
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
    <Nav>
      <a href="#about">ABOUT</a>
      <a href="#projects">PROJECTS</a>
      <a href="#contact">CONTACT</a>
      <a href="#resume">RESUME</a>
    </Nav>
  )
}

export default NavBar

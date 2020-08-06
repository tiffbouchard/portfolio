import React from "react"
import styled from "styled-components"

import scrollTo from "gatsby-plugin-smoothscroll"

const NavBar = styled.ul`
  list-style-type: none;
  position: fixed;
  display: flex;
  margin: 20px 40px;
  li {
    padding: 5px;
    button {
      background: none;
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      border: none;
      color: black;
      padding: 5px;
      &:hover {
        cursor: pointer;
        transition-duration: 0.5s;
        color: #f0f0f0;
        background-color: black;
      }
      &:focus {
        outline: none;
      }
    }
  }
`

const NavBarSection = () => (
  <NavBar id="home">
    <li>
      <button onClick={() => scrollTo("#about")}>ABOUT</button>
    </li>
    <li>
      <button onClick={() => scrollTo("#work")}>WORK</button>
    </li>
    <li>
      <button href="mailto:tiffany.bouchard@mail.utoronto.ca">CONTACT</button>
    </li>
    <li>
      <button href="/">CV</button>
    </li>
  </NavBar>
)

export default NavBarSection

import React from "react"
import styled, { css } from "styled-components"

const NavBar = styled.ul`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  text-align: right;
  list-style-type: none;
  margin: 0;
`

const NavLink = styled.a`
  text-decoration: none;
  color: black;
`

// .nav-links:hover {
//   color: white;
//   background-color: black;
// }

const NavBarSection = props => (
  <nav className="navbar-section">
    <NavBar>
      <li>
        <NavLink href="/#about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink href="/#work">WORK</NavLink>
      </li>
      <li>
        <NavLink href="/#contact">CONTACT</NavLink>
      </li>
      <li>
        <NavLink href="/#cv">CV</NavLink>
      </li>
    </NavBar>
  </nav>
)

export default NavBarSection

import React from "react"
// import "./NavBarSection.css"

const NavBarSection = props => (
  <nav className="navbar-section">
    <ul className="navbar">
      <li>
        <a className="nav-links" href="/#about">
          ABOUT
        </a>
      </li>
      <li>
        <a className="nav-links" href="/#work">
          WORK
        </a>
      </li>
      <li>
        <a className="nav-links" href="/#contact">
          CONTACT
        </a>
      </li>
      <li>
        <a className="nav-links" href="/#cv">
          CV
        </a>
      </li>
    </ul>
  </nav>
)

export default NavBarSection

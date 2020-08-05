import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Landing from "./sections/landing"
import About from "./sections/about"
import Projects from "./sections/projects"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Landing />
      <About />
      <Projects />
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.github.com/tiffbouchard/portfolio">Tiffany</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

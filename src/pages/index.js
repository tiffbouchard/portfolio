import React from "react"
import SEO from "../components/seo"

import Nav from "../components/nav.js"
import Footer from "../components/footer"
import About from "../components/sections/about.js"
import Projects from "../components/sections/projects.js"

import "../../src/global.css"

const IndexPage = props => {
  return (
    <>
      <SEO />
      <Nav />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default IndexPage

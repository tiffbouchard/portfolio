import React from "react"
import SEO from "../components/seo"

import Nav from "../components/nav.js"
import Footer from "../components/footer"
import About from "../components/sections/about.js"
import Projects from "../components/sections/projects.js"
import Landing from "../components/sections/landing"

import "../../src/global.css"

const IndexPage = props => {
  return (
    <div id="top">
      <SEO />
      <Nav />
      {/* <About /> */}
      <Landing />
      <Projects />
      <Footer />
    </div>
  )
}

export default IndexPage

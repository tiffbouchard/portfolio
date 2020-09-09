import React from "react"

import Socials from "../components/socials"
import Nav from "../components/nav.js"
import Footer from "../components/footer"
import Landing from "../components/sections/landing.js"
import About from "../components/sections/about.js"
import Projects from "../components/sections/projects.js"
import Contact from "../components/sections/contact.js"

import "../../src/global.css"

const IndexPage = props => {
  return (
    <>
      <Socials />
      <Nav />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage

import React from "react"

// import SEO from "../components/seo"

import Socials from "../components/socials"
import Nav from "../components/nav.js"
import Footer from "../components/footer"
import Landing from "../components/sections/landing/landing.js"
import About from "../components/sections/about/about.js"
import Projects from "../components/sections/projects/projects.js"
import Contact from "../components/sections/contact/contact.js"

import "../../src/global.css"

const IndexPage = () => {
  return (
    <>
      <Nav />
      {/* <Socials /> */}
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default IndexPage

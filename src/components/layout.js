import React from "react"

import Landing from "./sections/landing"
import About from "./sections/about"
import Projects from "./sections/projects"
import Footer from "./footer"
import "./layout.css"

const Layout = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default Layout

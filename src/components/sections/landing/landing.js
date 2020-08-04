import React from "react"
import styles from "./LandingSection.module.css"
import NavBarSection from "../NavBarSection/NavBarSection"
import SocialSection from "../SocialSection/SocialSection"

const LandingSection = props => (
  <section className={styles.LandingSection}>
    <NavBarSection />
    <SocialSection />
    <div className="logo">T</div>
    <h1 className="name">Tiffany Bouchard</h1>
    <p className="sub-heading">software developer</p>
    <p className="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem
      repellat voluptatem corporis blanditiis necessitatibus libero nobis dolore
      excepturi, deleniti laboriosam voluptatum enim deserunt commodi quos. Vel
      neque id a.
    </p>
  </section>
)

export default LandingSection

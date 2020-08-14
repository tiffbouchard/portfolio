import React from "react"
import styled from "styled-components"

const NavBar = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
  li {
    padding: 10px;
    a {
      font-family: NeueMontreal;
      font-size: 40px;
      text-decoration: none;
      color: black;
      &:hover {
        cursor: pointer;
        transition-duration: 0.5s;
        -webkit-text-fill-color: #f0f0f0;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
      }
    }
  }
`

const Socials = () => (
  <NavBar>
    <li>
      <a href="http://www.instagram.com/tiffbouchard" target="blank">
        Instagram
      </a>
    </li>
    <li>
      <a href="http://www.linkedin.com/in/tiffanybouchard" target="blank">
        LinkedIn
      </a>
    </li>
    <li>
      <a href="http://www.twitter.com/tiffbouchard" target="blank">
        Twitter
      </a>
    </li>
  </NavBar>
)

export default Socials

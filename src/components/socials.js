import React from "react"
import { Trail } from "react-spring/renderprops"
import styled from "styled-components"

const NavBar = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  transition: 0.5s;
  padding: 0;
  margin: 0;
  position: sticky;
  top: 20px;
  li {
    padding: 10px;
    a {
      font-family: NeueMontreal;
      font-size: 15px;
      text-decoration: none;
      color: black;
      @media (max-width: 950px) {
        font-size: 20px;
      }
      @media (max-width: 600px) {
        font-size: 10px;
      }
      @media (max-height: 650px) {
        font-size: 10px;
      }
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

const items = [
  { title: "Github", key: 1, href: "http://www.github.com/tiffbouchard" },
  { title: "Instagram", key: 2, href: "http://www.instagram.com/tiffbouchard" },
  {
    title: "LinkedIn",
    key: 3,
    href: "http://www.linkedin.com/in/tiffanybouchard",
  },
  { title: "Twitter", key: 4, href: "http://www.twitter.com/tiffbouchard" },
]

const Socials = () => (
  <NavBar>
    <Trail
      items={items}
      keys={item => item.key}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 3000 }}
    >
      {item => props => (
        <li>
          <a style={props} href={item.href} target="blank">
            {item.title}
          </a>
        </li>
      )}
    </Trail>
  </NavBar>
)

export default Socials

import React from "react"
import { Trail } from "react-spring/renderprops"
import styled from "styled-components"
import Github from "./icons/hollow-cut-github.svg"
import Ig from "./icons/hollow-cut-instagram.svg"
import Linkedin from "./icons/hollow-cut-linkedin.svg"
import Twitter from "./icons/hollow-cut-twitter.svg"

const NavBar = styled.ul`
  height: 90vh;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: flex-end;
  background-color: transparent;
  margin-left: -20px;
  li {
    background-color: transparent;
    a {
      background-color: transparent;
    }
  }
  .icon {
    background-color: transparent;
    height: 25px;
    padding: 8px;
    opacity: 0.2;
    transition: 0.5s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 1050px) {
    position: absolute;
  }
`

const items = [
  {
    icon: <Github className="icon" />,
    key: 1,
    href: "http://www.github.com/tiffbouchard",
  },
  {
    icon: <Ig className="icon" />,
    key: 2,
    href: "http://www.instagram.com/tiffbouchard",
  },
  {
    icon: <Linkedin className="icon" />,
    key: 3,
    href: "http://www.linkedin.com/in/tiffanybouchard",
  },
  {
    icon: <Twitter className="icon" />,
    key: 4,
    href: "http://www.twitter.com/tiffbouchard",
  },
]

const Socials = () => (
  <NavBar>
    <Trail
      items={items}
      keys={item => item.key}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 300, duration: 1000 }}
    >
      {item => props => (
        <li>
          <a style={props} href={item.href} target="blank">
            {item.icon}
          </a>
        </li>
      )}
    </Trail>
  </NavBar>
)

export default Socials

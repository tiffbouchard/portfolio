import React from "react"

import styled from "styled-components"

import github from "./icons/github.svg"
import linkedin from "./icons/linkedin.svg"
import twitter from "./icons/twitter.svg"
import instagram from "./icons/instagram.svg"

const LogoList = styled.ul`
  height: 10px;
  position: fixed;
  margin: 700px 0 0 -20px;
    li {
      list-style-type: none;
      a {
        img {
          height: 25px;
          padding: 5px;
          transition: transform 1s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
`

const SocialSection = props => (
  <LogoList>
    <li>
      <a href="http://github.com/tiffbouchard" target="blank">
        <img src={github} alt="github" />
      </a>
    </li>
    <li>
      <a href="http://twitter.com/tiffbouchard" target="blank">
        <img src={twitter} alt="twitter" />
      </a>
    </li>
    <li>
      <a href="http://linkedin.com/in/tiffanybouchard" target="blank">
        <img src={linkedin} alt="linkedin" />
      </a>
    </li>
    <li>
      <a href="http://instagram.com/tiffbouchard" target="blank">
        <img src={instagram} alt="instagram" />
      </a>
    </li>
  </LogoList>
)

export default SocialSection

import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  position: fixed-bottom;
  margin: 40px;
    a {
      padding: 10px;
      font-family: NeueMontreal;
      background: none;
      font-size: 15px;
      border: none;
      color: black;
      transition: 0.5s;
      text-decoration: none;
      &:hover {
        text-decoration: line-through;
      }
    }
  }
  @media (max-width: 960px) {
    align-items: center;
    flex-direction: column;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a href="http://tiffbouchard.com">
          Built & Designed by Tiffany Bouchard
        </a>
      </div>
      <div>
        <a href="http://github.com/tiffbouchard" target="blank">
          Github ↗
        </a>
        <a href="http://linkedin.com/in/tiffanybouchard" target="blank">
          LinkedIn ↗
        </a>
        <a href="http://twitter.com/tiffbouchard" target="blank">
          Twitter ↗
        </a>
        <a href="http://instagram.com/tiffbouchard" target="blank">
          Instagram ↗
        </a>
      </div>
    </FooterContainer>
  )
}

export default Footer

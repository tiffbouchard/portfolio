import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed-bottom;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 15px;
  background-color: #f0faf1;
    a {
      padding: 10px;
      font-family: NeueMontreal;
      background: none;
      font-size: 12px;
      border: none;
      color: black;
      transition: 0.5s;
      text-decoration: none;
      &:hover {
        color: #3E3E3E;
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div>🌱</div>
      <a href="#about">Built & Designed by Tiffany Bouchard</a>
    </FooterContainer>
  )
}

export default Footer

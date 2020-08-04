import React from "react"
// import "./NavBarSection.css"
import styled, { css } from "styled-components"

const ConstructionContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Construction = props => (
  <ConstructionContainer>
    <h1>Under Construction</h1>
  </ConstructionContainer>
)

export default Construction

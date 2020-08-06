import React from "react"
import styled from "styled-components"

import Section from "../../styles/Section"

import django from "../icons/django-plain.svg"
import css from "../icons/css3-original.svg"
import express from "../icons/express-original.svg"
import html from "../icons/html5-original.svg"
import javascript from "../icons/javascript-plain.svg"
import jquery from "../icons/jquery-original-wordmark.svg"
import mongodb from "../icons/mongodb-original-wordmark.svg"
import nodejs from "../icons/nodejs-original-wordmark.svg"
import postgresql from "../icons/postgresql-original-wordmark.svg"
import python from "../icons/python-original.svg"
import react from "../icons/react-original-wordmark.svg"

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 70px 10px 70px;
  p {
    font-family: "Montserrat", sans-serif;
  }
`
const AboutHeader = styled.h1`
  font-size: 80px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin: 70px 0 0 0;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    height: 50px;
    filter: grayscale(100%) brightness(70%) contrast(2);
    padding: 10px;
    &:hover {
      filter: none;
      transition-duration: 0.5s;
    }
  }
`

const SubHeaders = styled.h2`
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`

const AboutSection = props => (
  <Section id="about">
    <AboutContainer>
      <AboutHeader>ABOUT</AboutHeader>
      <p>I'm a software developer based in Toronto, ON.</p>
      <p>
        I am a life-long learner and thrive on change. My customer service
        experience has equipped me with strong communication skills and the
        ability to work with a team. Throughout my studies, I have deepened my
        critical and creative thinking while refining my ability to communicate
        ideas succinctly and effectively. I am a naturally empathic person,
        detail-oriented and I always keep an open mind. As a software developer,
        I strive to combine all my skills to create efficient and beautiful
        things for people, with people.
      </p>
      <SubHeaders>SKILLS</SubHeaders>
      <SkillsContainer>
        <img src={html} alt="django" />
        <img src={css} alt="django" />
        <img src={javascript} alt="django" />
        <img src={jquery} alt="django" />
        <img src={python} alt="django" />
        <img src={react} alt="django" />
        <img src={django} alt="django" />
        <img src={nodejs} alt="django" />
        <img src={express} alt="django" />
        <img src={mongodb} alt="django" />
        <img src={postgresql} alt="django" />
      </SkillsContainer>
    </AboutContainer>
  </Section>
)

export default AboutSection

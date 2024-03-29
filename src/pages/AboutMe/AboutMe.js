import React from "react"
import styled from "styled-components"
import headshot from "./headshot.jpeg"

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <HeadshotPicture />
      <TextWrapper>
        <MainText>About Me</MainText>
        <Description>
          I'm a Web Developer based in Spokane, WA. I specialize in Functional
          React, Software Architecture, Extreme Programming, Agile
          Methodologies, Codebase Management, Coaching and Training, and Team
          Communication.
        </Description>
        <Description>
          I'm a Christian, a husband, a father to two children, and a total
          nerd. When I'm not building something on the internet, I spend my time
          hanging out with my family and playing games with my friends.
        </Description>
        <Description>
          I live my life intentionally and with passion. I care deeply about
          those around me, and work tirelessly to better myself everyday.
        </Description>
      </TextWrapper>
    </AboutMeWrapper>
  )
}

export default AboutMe

const AboutMeWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  min-height: 700px;
  width: 100%;
  max-width: 1100px;
`

const TextWrapper = styled.div`
  flex: 1 1 55%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 0px;
  max-width: 500px;
  @media (max-width: 400px) {
    padding: 0px;
    margin-top: 20px;
  }
`

const HeadshotPicture = styled.img.attrs((props) => ({
  src: headshot,
}))`
  flex: 0 1 45%;
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const Description = styled.p`
  font-weight: 300;
  line-height: 30px;
  font-size: clamp(0.8rem, 5vw, 1.3rem);
  color: ${(props) => props.theme.secondaryText};
  margin: 8px 0;
`

const MainText = styled.h1`
  font-size: clamp(2.3rem, 10vw, 3.5rem);
  border-bottom: ${(props) => `2px solid ${props.theme.primary}`};
  width: fit-content;
  white-space: nowrap;
  @media (max-width: 1100px) {
    margin-bottom: 30px;
    align-self: center;
  }
`

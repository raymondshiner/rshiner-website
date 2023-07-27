import { useWindowDimensions } from "hooks"
import { useState } from "react"
import styled from "styled-components"
import DesktopTabs from "./DesktopTabs"
import MobileTabs from "./MobileTabs"
import { workHistory } from "./workHistory"

const Experience = () => {
  const [activeJob, setActiveJob] = useState("dmg")
  const { width } = useWindowDimensions()

  const onJobSelected = (job) => {
    setActiveJob(job)
  }

  let componentToRender = (
    <>
      <MobileTabs activeJob={activeJob} onJobSelected={onJobSelected} />
      <MobileComponentWrapper>
        {workHistory[activeJob].component}
      </MobileComponentWrapper>
    </>
  )

  if (width > 800)
    componentToRender = (
      <DesktopTabWrapper>
        <DesktopTabs activeJob={activeJob} onJobSelected={onJobSelected} />
        <Divider />
        {workHistory[activeJob].component}
      </DesktopTabWrapper>
    )

  return <FadeIn>{componentToRender}</FadeIn>
}

export default Experience

const FadeIn = styled.div`
  ${(props) => props.theme.fadeIn}
`

const MobileComponentWrapper = styled.div`
  margin-top: 20px;
`

const DesktopTabWrapper = styled.div`
  display: flex;
  min-height: 400px;
  margin-top: 10px;
`

const Divider = styled.div`
  min-width: 3px;
  background-color: ${(props) => props.theme.backgroundHighlight};
  margin-left: 10px;
`

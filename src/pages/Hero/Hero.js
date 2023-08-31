import { ExternalLink } from "components/ExternalLink";
import { GithubLogo, LinkedInLogo } from "components/icons/Icons";
import Particles from "react-particles-js";
import styled from "styled-components";
import TerminalAnimation from "./TerminalAnimation";

const heroIconStyles = {
    height: "5vh",
    minHeight: "50px",
    maxHeight: "70px",
};

const Hero = () => {
    return (
        <HeroWrapper>
            <StyledParticles />
            <FlexBoxColumn>
                <MainText>Raymond Shiner</MainText>
                <TerminalAnimation />
                <IconWrapper>
                    <ExternalLink url="https://github.com/raymondshiner">
                        <GithubLogo style={heroIconStyles} />
                    </ExternalLink>
                    <ExternalLink url="https://www.linkedin.com/in/raymond-shiner/">
                        <LinkedInLogo style={heroIconStyles} />
                    </ExternalLink>
                </IconWrapper>
            </FlexBoxColumn>
        </HeroWrapper>
    );
};

export default Hero;

const HeroWrapper = styled.div`
    padding: 30px;
    position: relative;
    height: 100vh;
    width: 100%;
    min-height: 700px;
`;

const StyledParticles = styled(Particles)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
    height: 100%;
    width: 100%;
    transition: all 0.5s ease;
`;

const FlexBoxColumn = styled.div`
    position: relative;
    height: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: ease 0.25s;
    @media (max-height: 730px) {
        margin-top: 30px;
    }

    @media (max-width: 400px) {
        margin-top: 0px;
    }
`;

const MainText = styled.h1`
    background-color: black;
    font-size: clamp(3.3rem, 10vw, 6.5rem);
    width: fit-content;
    min-width: 300px;
    padding: 20px;
    border: ${(props) => `5px solid ${props.theme.primary}`};
    margin-top: 10px;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    max-width: 400px;
    padding: 20px 5px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.dark};
`;

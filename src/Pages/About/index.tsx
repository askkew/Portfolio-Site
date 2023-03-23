import { AboutDiv, ToolsetIcons, DetailsBox, LanguageIcons, BallContainer, DetailTitle, DetailDescription, DetailSubTitle } from "./AboutStyles";
import { StyledScrollButton, ToolIcons } from './icons'
import { RiBracesFill } from 'react-icons/ri'
import { ColumnDiv } from "../../utils/content";
import { DirectionalLight } from "three";
import { Text } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
import { technologies } from "../../utils/Constants";
import BallCanvas from "../../components/Ball/Ball";

const About = () => {

  return (
    <section id="about">
      <AboutDiv>
        <DetailsBox>
          <DetailTitle>About.</DetailTitle>
          <DetailSubTitle>My tech stack.</DetailSubTitle>
          <DetailDescription>I have been coding for almost 6 years but recently focused on web development near the end of my education at UTSA, where I graduated with a Bachelor of Science in Computer Science</DetailDescription>
        </DetailsBox>
        <ToolsetIcons>
          {technologies.map((technology) => (
            <BallContainer key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </BallContainer>
          ))}
        </ToolsetIcons>
      </AboutDiv>
    </section>
  );
};

export default About
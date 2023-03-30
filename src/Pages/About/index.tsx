import { AboutDiv, ToolsetIcons, DetailsBox, BallContainer, DetailTitle, DetailDescription, DetailSubTitle, DetailCard, CardContainer, CardWrapper, MouseTracker, AboutTitle, AboutDescription, IconContainer } from "./AboutStyles";
import { technologies, aboutDetails } from "../../utils/Constants";
import BallCanvas from "../../components/Ball/Ball";
import './about.css';

const About = () => {

  return (
    <section id="about">
      <AboutDiv>
        <DetailsBox>
          <AboutTitle>About.</AboutTitle>
          <AboutDescription>I have been coding for almost 6 years but recently focused on web development near the end of my education at UTSA, where I graduated with a Bachelor of Science in Computer Science</AboutDescription>
            <CardContainer>
              {aboutDetails.map((aboutDetail) => (
                <CardWrapper className="tilting-card-wrapper">
                  <MouseTracker className="mouse-position-tracker"/>
                  <MouseTracker className="mouse-position-tracker"/>
                  <MouseTracker className="mouse-position-tracker"/>
                  <MouseTracker className="mouse-position-tracker"/>
                  <MouseTracker className="mouse-position-tracker"/>
                  <MouseTracker className="mouse-position-tracker"/>
                  <MouseTracker className="mouse-position-tracker"/>
                  <MouseTracker className="mouse-position-tracker"/>
                  <MouseTracker className="mouse-position-tracker"/>
                  <DetailCard className="tilting-card-body">
                    <IconContainer>{aboutDetail.icon}</IconContainer>
                    <DetailTitle>{aboutDetail.title}</DetailTitle>
                    <DetailDescription>{aboutDetail.description}</DetailDescription>
                  </DetailCard>
                </CardWrapper>
              ))}
            </CardContainer>
        </DetailsBox>
        <DetailSubTitle>My tech stack.</DetailSubTitle>
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
import { RowDiv } from "../../utils/content";
import { ExperienceDiv, ExperienceTitleTypograph, ExperienceTypograph, ExperienceCard, SecondExperienceDiv, ExperienceCardContent, MedPLUS, TDSC, Description } from "./ExperienceStyles";
import { Parallax, useParallax } from "react-scroll-parallax";

const Experience = () => {
  return (
    <section id="experience">
      <ExperienceDiv>
        <ExperienceTitleTypograph>Experience</ExperienceTitleTypograph>
      </ExperienceDiv>
    </section> 
  );
};

export default Experience;
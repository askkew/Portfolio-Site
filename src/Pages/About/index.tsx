import React from "react";
import { styled } from "@mui/system";
import { AboutDiv, SkillsDiv, SkillsTypograph, SkillsRowDiv, AboutTitleTypograph } from "./AboutStyles";
import { RowDiv, ColumnDiv } from "../../utils/content";

const About = () => {
  return (
    <section id="about">
      <AboutDiv>
        <AboutTitleTypograph>About</AboutTitleTypograph>
        <SkillsRowDiv>
          <SkillsDiv>
            <SkillsTypograph>Software Development</SkillsTypograph>
          </SkillsDiv>
          <SkillsDiv>
            <SkillsTypograph>Frontend</SkillsTypograph>
          </SkillsDiv>
          <SkillsDiv>
            <SkillsTypograph>Backend</SkillsTypograph>
          </SkillsDiv>
        </SkillsRowDiv>
      </AboutDiv>
    </section> 
  );
};

export default About
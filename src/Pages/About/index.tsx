import React from "react";
import { styled } from "@mui/system";
import { AboutDiv, SkillsDiv, SkillsTypograph, SkillsRowDiv, AboutTitleTypograph } from "./AboutStyles";
import { RowDiv, ColumnDiv } from "../../utils/content";

const About = () => {
  return (
    <section id="about" style={{  background: 'radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%)'}}>
      <div style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
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
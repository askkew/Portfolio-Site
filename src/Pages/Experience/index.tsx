import React from "react";
import { styled } from "@mui/system";
import { LeftRowDiv, RightRowDiv, ExperienveDiv } from "./ExperienceStyles";

const Experience = () => {
  return (
    <section id="experience" style={{  background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
      <div style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <ExperienveDiv>
        <LeftRowDiv>
          <h2>Experience</h2>
        </LeftRowDiv>
        <RightRowDiv>
          <h2>Experience</h2>
        </RightRowDiv>
      </ExperienveDiv>
    </section> 
  );
};

export default Experience;
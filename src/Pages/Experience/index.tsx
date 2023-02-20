import React from "react";
import { styled } from "@mui/system";
import { LeftRowDiv, RightRowDiv, ExperienceDiv, TemporarySquare, TemporarySquareRight, ExperienceTitleTypograph, ExperienceTypograph } from "./ExperienceStyles";
import { ColumnDiv, RowDiv } from "../../utils/content";
import { Parallax } from "react-scroll-parallax";

const Experience = () => {
  return (
    <section id="experience" style={{  background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
      {/* <div style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div> */}
      <ExperienceDiv>
        <RightRowDiv>
          <RowDiv>
            <TemporarySquare>
              <img src="/tempimage.png" alt="tempimage" width="357" height="300"/>
            </TemporarySquare>
            <ColumnDiv>
              <ExperienceTitleTypograph>MedPLUS</ExperienceTitleTypograph>
              <ExperienceTypograph>Experience Paragraph</ExperienceTypograph>
            </ColumnDiv>
          </RowDiv>
        </RightRowDiv>
        <LeftRowDiv>
          <RowDiv>
            <TemporarySquareRight>
              <img src="/tempimage.png" alt="tempimage" width="357" height="300"/>
            </TemporarySquareRight>
            <ColumnDiv>
              <ExperienceTitleTypograph>TDSC</ExperienceTitleTypograph>
              <ExperienceTypograph>Experience Paragraph</ExperienceTypograph>
            </ColumnDiv>
          </RowDiv>
        </LeftRowDiv>
      </ExperienceDiv>
    </section> 
  );
};

export default Experience;
import React from "react";
import { styled } from "@mui/system";
import { LeftRowDiv, PictureDiv, ProjectDiv, ProjectTitleTypograph } from "./ProjectStyles";

//background-image: linear-gradient(to right, #090a0f, #0f1117, #14161d, #161b24, #19202b, #19202b, #19202b, #19202b, #161b24, #14161d, #0f1117, #090a0f);

const Projects = () => {
  return (
    <section id="projects" style={{  background: 'radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%)'}}>
      {/* <div style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>  */}
      <ProjectDiv>
        <LeftRowDiv>
          <ProjectTitleTypograph>Projects</ProjectTitleTypograph>
          <PictureDiv>
            <img src='/iphone.png' alt='iphone' width='245' height='480'/>
          </PictureDiv>
        </LeftRowDiv>
      </ProjectDiv>
    </section> 
  );
};

export default Projects
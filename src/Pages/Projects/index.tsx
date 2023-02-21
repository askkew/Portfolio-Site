import React from "react";
import { styled } from "@mui/system";
import { ProjectDiv, ProjectTitleTypograph } from "./ProjectStyles";

//background-image: linear-gradient(to right, #090a0f, #0f1117, #14161d, #161b24, #19202b, #19202b, #19202b, #19202b, #161b24, #14161d, #0f1117, #090a0f);

const Projects = () => {
  return (
    <section id="projects" style={{  background: 'radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%)'}}>
      <ProjectDiv>
        <ProjectTitleTypograph>Projects</ProjectTitleTypograph>
      </ProjectDiv>
    </section> 
  );
};

export default Projects
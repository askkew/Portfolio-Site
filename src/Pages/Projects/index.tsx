import React from "react";
import { styled } from "@mui/system";
import { ProjectDiv } from "./ProjectStyles";

const Projects = () => {
  return (
    <section id="projects" style={{  background: 'radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%)'}}>
      <div style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <ProjectDiv>
        <h2>Projects</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum, nulla repellat molestias reiciendis error rem mollitia similique quo nesciunt non sed doloremque ipsa commodi quidem omnis voluptatum, earum alias?</p>
      </ProjectDiv>
    </section> 
  );
};

export default Projects
import React from "react";
import { styled } from "@mui/system";
import { ProjectDiv, ProjectTitleTypograph, ProjectTypograph } from "./ProjectStyles";
import { Card } from "@mui/material";
import { RowDiv } from "../../utils/content";

//background-image: linear-gradient(to right, #090a0f, #0f1117, #14161d, #161b24, #19202b, #19202b, #19202b, #19202b, #161b24, #14161d, #0f1117, #090a0f);

const Projects = () => {
  return (
    <section id="projects" style={{  background: 'radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%)'}}>
      <ProjectDiv>
        <RowDiv id="projectcard">
          <Card style={{background: 'hsl(213, 24%, 46%)', margin: 10, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '610px', height: '550px'}}>
            <div id="projecttext" style={{width: '600px', padding: '30px'}}>
              <ProjectTitleTypograph>Weather App</ProjectTitleTypograph>
              <RowDiv>
                <ProjectTypograph>A responsive weather app that gives the user current weather and the forecast for the next 6 days in any City or Town in the world</ProjectTypograph>
                <img src='/TDSCiphone14pro.png' alt='tempimage' height='400px' id='projectpicture'/>
              </RowDiv>
            </div>
          </Card>
          {/* <Card style={{background: 'hsl(213, 24%, 46%)', margin: 10, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '610px', height: '550px'}}>
            <div id="projecttext" style={{width: '600px', padding: '30px'}}>
              <ProjectTitleTypograph>Weather App</ProjectTitleTypograph>
              <RowDiv>
                <ProjectTypograph>A responsive weather app that gives the user current weather and the forecast for the next 6 days in any City or Town in the world</ProjectTypograph>
                <img src='/temporaryimage.png' alt='tempimage' height='310px' id='projectpicture'/>
              </RowDiv>
            </div>
          </Card> */}
        </RowDiv>
      </ProjectDiv>
    </section> 
  );
};

export default Projects
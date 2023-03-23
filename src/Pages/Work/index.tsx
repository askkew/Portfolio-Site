import React from "react";
import { styled } from "@mui/system";
import { ProjectDiv, ProjectTitleTypograph, ProjectTypograph, ProjectCard, WorkTitle, WorkTitleDescription, WorkIntroDiv, ProjectTagOne, ProjectTagTwo, ProjectTagThree, TagsDiv, ProjectDescription, GithubIconButton, LinkIconButton, LinkButtonsContainer } from "./WorkStyles";
import { Card, IconButton, Link } from "@mui/material";
import { RowDiv } from "../../utils/content";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

//background-image: linear-gradient(to right, #090a0f, #0f1117, #14161d, #161b24, #19202b, #19202b, #19202b, #19202b, #161b24, #14161d, #0f1117, #090a0f);

const projectData = [
  {
    title: "MedPLUS",
    description: "MedPLUS specializes in providing innovative and comprehensive medical professional liability insurance products through financially secure, A.M. Best Rated insurance carriers.",
    githublink: "https://github.com/snyperifle/medPlus",
    link: "https://github.com/snyperifle/medPlus",
    image: "medplusprimary.png",
  },
  {
    title: "TDSC",
    description: "TDSC is a shooting club operated out of Houston Texas that brings together gun enthusiasts for self defense classes and range days.",
    githublink: "https://github.com/snyperifle/TDSC",
    link: "https://github.com/snyperifle/TDSC",
    image: "TDSCprimary.png",
  },
  {
    title: "Job Tracker",
    description: "This is a basic MERN stack application that allows users to track their job applications.",
    githublink: "https://github.com/askkew/Job-Tracker",
    link: "https://github.com/askkew/Job-Tracker",
    image: "jobtracker.png",
  },
  {
    title: "Techlite",
    description: "Techlite is an E-commerce website built on the LAMP stack and designed by a team of students as a term project. It included an entire admin back end for managing orders, users, contact tickets, and products.",
    githublink: "https://github.com/Scrub-Sauce/Scared2Compile",
    link: "https://github.com/Scrub-Sauce/Scared2Compile",
    image: "techliteprimary.png",
  },
  {
    title: "Weather app",
    description: "This is a basic MERN stack application that allows users to get the current weather details as well as the following 6 day forecast for any city.",
    githublink: "https://github.com/askkew/WeatherApp",
    link: "https://github.com/askkew/WeatherApp",
    image: "weatherapp.png",
  },
]

const Projects = () => {
  return (
    <section id="work">
      {/* <WorkIntroDiv>
        <WorkTitle>My work and experience</WorkTitle>
        <WorkTitleDescription>Here are some of my projects and work experience</WorkTitleDescription>
      </WorkIntroDiv>
      <ProjectDiv>
        {projectData.map((project) => (
          <ProjectCard>
            <LinkButtonsContainer>
              <GithubIconButton>
                <Link href={project.githublink} target="_blank" style={{color: 'inherit'}}>
                  <AiFillGithub size={20} />
                </Link>
              </GithubIconButton>
              <LinkIconButton>
                <Link href={project.link} target="_blank" style={{color: 'inherit'}}>
                  <BiLinkExternal size={20} />
                </Link>
              </LinkIconButton>
            </LinkButtonsContainer>
            <img src={project.image} alt='tempimage' height='180px' id='projectpicture'/>
            <ProjectTitleTypograph>{project.title}</ProjectTitleTypograph>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TagsDiv>
              <ProjectTagOne>#react</ProjectTagOne>
              <ProjectTagTwo>#typescript</ProjectTagTwo>
              <ProjectTagThree>#node</ProjectTagThree>
            </TagsDiv>
          </ProjectCard>
        ))}
      </ProjectDiv> */}
    </section> 
  );
};

export default Projects
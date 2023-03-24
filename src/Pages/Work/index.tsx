import React from "react";
import { styled } from "@mui/system";
import { ProjectDiv, ProjectTitleTypograph, ProjectTypograph, ProjectCard, WorkTitle, WorkTitleDescription, WorkIntroDiv, ProjectTagOne, ProjectTagTwo, ProjectTagThree, TagsDiv, ProjectDescription, GithubIconButton, LinkIconButton, LinkButtonsContainer, ProjectImage } from "./WorkStyles";
import { Card, IconButton, Link } from "@mui/material";
import { fadeIn, RowDiv } from "../../utils/content";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

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
    description: "This is a basic MERN stack application that allows users to track their job applications. Using a mongoDB backend to store job applications",
    githublink: "https://github.com/askkew/Job-Tracker",
    link: "https://github.com/askkew/Job-Tracker",
    image: "jobtrackerprimary.png",
  },
  {
    title: "Techlite",
    description: "Techlite is an E-commerce website built on the LAMP stack and designed by a team of students as a term project.",
    githublink: "https://github.com/Scrub-Sauce/Scared2Compile",
    link: "https://github.com/Scrub-Sauce/Scared2Compile",
    image: "techlitesecondary.png",
  },
  {
    title: "Weather app",
    description: "This is a basic MERN stack application that allows users to get the current weather details as well as the following 6 day forecast for any city.",
    githublink: "https://github.com/askkew/WeatherApp",
    link: "https://github.com/askkew/WeatherApp",
    image: "weatherappprimary.png",
  },
  {
    title: "Job Tracker",
    description: "This is a basic MERN stack application that allows users to track their job applications. Using a mongoDB backend to store job applications",
    githublink: "https://github.com/askkew/Job-Tracker",
    link: "https://github.com/askkew/Job-Tracker",
    image: "jobtrackerprimary.png",
  },
]

const Projects = () => {
  return (
    <section id="work">
      <WorkIntroDiv>
        <WorkTitle>My work and experience</WorkTitle>
        <WorkTitleDescription>Here are some of my projects and work experience</WorkTitleDescription>
      </WorkIntroDiv>
      <div>
        <ProjectDiv>
          {projectData.map((project, index) => (
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              <ProjectCard>
                {/* <LinkButtonsContainer>
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
                </LinkButtonsContainer> */}
                <ProjectImage src={project.image} alt='tempimage' height='100px' id='projectpicture'/>
                <ProjectTitleTypograph>{project.title}</ProjectTitleTypograph>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagsDiv>
                  <ProjectTagOne>#react</ProjectTagOne>
                  <ProjectTagTwo>#typescript</ProjectTagTwo>
                  <ProjectTagThree>#node</ProjectTagThree>
                </TagsDiv>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectDiv>
      </div>
    </section> 
  );
};

export default Projects
import React from "react";
import { styled } from "@mui/system";
import { ProjectDiv, ProjectTitleTypograph, ProjectTypograph, ProjectCard, WorkTitle, WorkTitleDescription, WorkIntroDiv, ProjectTagOne, ProjectTagTwo, ProjectTagThree, TagsDiv, ProjectDescription, GithubIconButton, LinkIconButton } from "./WorkStyles";
import { Card, IconButton } from "@mui/material";
import { RowDiv } from "../../utils/content";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

//background-image: linear-gradient(to right, #090a0f, #0f1117, #14161d, #161b24, #19202b, #19202b, #19202b, #19202b, #161b24, #14161d, #0f1117, #090a0f);

const Projects = () => {
  return (
    <section id="work">
      <WorkIntroDiv>
        <WorkTitle>My work and experience</WorkTitle>
        <WorkTitleDescription>Here are some of my projects and work experience</WorkTitleDescription>
      </WorkIntroDiv>
      <ProjectDiv>
        <ProjectCard>
          <RowDiv>
            <GithubIconButton>
              <AiFillGithub size={30} />
            </GithubIconButton>
            <LinkIconButton>
              <BiLinkExternal size={30} />
            </LinkIconButton>
          </RowDiv>
          <img src='/medplusprimary.png' alt='tempimage' height='230px' id='projectpicture'/>
          <ProjectTitleTypograph>MedPLUS</ProjectTitleTypograph>
          <ProjectDescription>MedPLUS specializes in providing innovative and comprehensive medical professional liability insurance products through financially secure, A.M. Best Rated insurance carriers.</ProjectDescription>
          <TagsDiv>
            <ProjectTagOne>#react</ProjectTagOne>
            <ProjectTagTwo>#typescript</ProjectTagTwo>
            <ProjectTagThree>#node</ProjectTagThree>
          </TagsDiv>
        </ProjectCard>
        <ProjectCard>
          <RowDiv>
            <GithubIconButton>
              <AiFillGithub size={30} />
            </GithubIconButton>
            <LinkIconButton>
              <BiLinkExternal size={30} />
            </LinkIconButton>
          </RowDiv>
          <img src='/TDSCprimary.png' alt='tempimage' height='230px' id='projectpicture'/>
          <ProjectTitleTypograph>TDSC</ProjectTitleTypograph>
          <ProjectDescription>TDSC is a shooting club operated out of Houston Texas that brings together gun enthusiasts for self defense classes and range days.</ProjectDescription>
          <TagsDiv>
            <ProjectTagOne>#react</ProjectTagOne>
            <ProjectTagTwo>#typescript</ProjectTagTwo>
            <ProjectTagThree>#node</ProjectTagThree>
          </TagsDiv>
        </ProjectCard>
        <ProjectCard>
          <RowDiv>
            <GithubIconButton>
              <AiFillGithub size={30} />
            </GithubIconButton>
            <LinkIconButton>
              <BiLinkExternal size={30} />
            </LinkIconButton>
          </RowDiv>
          <img src='/jobtracker.png' alt='tempimage' height='230px' id='projectpicture'/>
          <ProjectTitleTypograph>Job Tracker</ProjectTitleTypograph>
          <ProjectDescription>This is a basic MERN stack application utilizing a mongoDB database to store the jobs that I am applying for.</ProjectDescription>
          <TagsDiv>
            <ProjectTagOne>#react</ProjectTagOne>
            <ProjectTagTwo>#typescript</ProjectTagTwo>
            <ProjectTagThree>#node</ProjectTagThree>
          </TagsDiv>
        </ProjectCard>
        <ProjectCard>
          <RowDiv>
            <GithubIconButton>
              <AiFillGithub size={30} />
            </GithubIconButton>
            <LinkIconButton>
              <BiLinkExternal size={30} />
            </LinkIconButton>
          </RowDiv>
          <img src='/techliteprimary.png' alt='tempimage' height='230px' id='projectpicture'/>
          <ProjectTitleTypograph>Techlite</ProjectTitleTypograph>
          <ProjectDescription>Techlite is an E-commerce website designed by a team of students as a term project. We utilized HTML, CSS, JS, PHP, Bootstrap, and a SQL database to create it. It included an entire admin back end for managing orders, users, contact tickets, and products.</ProjectDescription>
          <TagsDiv>
            <ProjectTagOne>#react</ProjectTagOne>
            <ProjectTagTwo>#typescript</ProjectTagTwo>
            <ProjectTagThree>#node</ProjectTagThree>
          </TagsDiv>
        </ProjectCard>
        <ProjectCard>
          <RowDiv>
            <GithubIconButton>
              <AiFillGithub size={30} />
            </GithubIconButton>
            <LinkIconButton>
              <BiLinkExternal size={30} />
            </LinkIconButton>
          </RowDiv>
          <img src='/weatherapp.png' alt='tempimage' height='230px' id='projectpicture'/>
          <ProjectTitleTypograph>Weather app</ProjectTitleTypograph>
          <ProjectDescription>This is a basic MERN stack application that allows users to get the current weather details as well as the following 6 day forecast for any city.</ProjectDescription>
          <TagsDiv>
            <ProjectTagOne>#react</ProjectTagOne>
            <ProjectTagTwo>#typescript</ProjectTagTwo>
            <ProjectTagThree>#node</ProjectTagThree>
          </TagsDiv>
        </ProjectCard>
      </ProjectDiv>
    </section> 
  );
};

export default Projects
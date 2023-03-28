import { ProjectDiv,
  ProjectTitleTypograph,
  ProjectCard,
  WorkTitle,
  WorkTitleDescription,
  WorkIntroDiv,
  ProjectTagOne,
  ProjectTagTwo,
  ProjectTagThree,
  TagsDiv,
  ProjectDescription,
  GithubIconButton,
  LinkIconButton,
  LinkButtonsContainer,
  ProjectImage, 
  LinkGithub,
  LinkLink} from "./WorkStyles";
import { Link } from "@mui/material";
import { fadeIn, RowDiv } from "../../utils/content";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { projectData } from "../../utils/Constants";
import './work.css';

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
            <ProjectCard>
              <LinkButtonsContainer>
                <LinkGithub href={project.githublink} className="icon2 icon--github2">
                  <i className="ri-github-line"></i>
                </LinkGithub>
                <LinkLink href={project.link} className="icon2 icon--links">
                  <i className="ri-links-line"></i>
                </LinkLink>
              </LinkButtonsContainer>
              <ProjectImage src={project.image} alt='tempimage' height='100px' id='projectpicture'/>
              <ProjectTitleTypograph>{project.title}</ProjectTitleTypograph>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TagsDiv>
                <ProjectTagOne>#react</ProjectTagOne>
                <ProjectTagTwo>#typescript</ProjectTagTwo>
                <ProjectTagThree>#node</ProjectTagThree>
              </TagsDiv>
            </ProjectCard>
          ))}
        </ProjectDiv>
      </div>
    </section> 
  );
};

export default Projects
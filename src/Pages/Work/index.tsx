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
  ProjectImage } from "./WorkStyles";
import { Link } from "@mui/material";
import { fadeIn, RowDiv } from "../../utils/content";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { projectData } from "../../utils/Constants";

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
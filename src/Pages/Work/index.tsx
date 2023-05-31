import { ProjectDiv,
  WorkTitle,
  WorkTitleDescription,
  WorkIntroDiv,
  TagsDiv,
  LinkGithub,
  LinkLink,
  TagP,
  ProjectCard} from "./WorkStyles";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { projectData } from "../../utils/Constants";
import './work.css';
import { Card, CardMedia, Typography, CardContent, CardActions, Button } from "@mui/material";

const Projects = () => {
  return (
    <section id="work">
      <WorkIntroDiv>
        <WorkTitle>freelance work</WorkTitle>
      </WorkIntroDiv>
      <ProjectDiv>
        {projectData.map((project, index) => (
          <ProjectCard>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <img src={project.image} height={project.imagesize} style={{borderRadius: '15px'}}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '10px'}}>
              <LinkLink href={project.link} className="icon2 icon--links">
                <i className="ri-links-line"></i>
              </LinkLink>
              <Typography gutterBottom variant="h5" component="div" sx={{color: 'gainsboro'}}>
                {project.title}
              </Typography>
              <LinkGithub href={project.githublink} className="icon2 icon--github2">
                <i className="ri-github-line"></i>
              </LinkGithub>
            </div>
            <div>
              <TagsDiv>
              {project.tags.map((tag) => (
                <TagP
                  key={`${project.title}-${tag.name}`}
                  style={{ color: `${tag.color}` }}
                >
                  #{tag.name}
                </TagP>
              ))}
              </TagsDiv>
            </div>
            <div>
              <Typography variant="body2" sx={{color: 'gainsboro', textAlign: 'center'}}>
                {project.description}
              </Typography>
            </div>
          </ProjectCard>
        ))}
      </ProjectDiv>
      <WorkIntroDiv>
        <WorkTitle>personal projects</WorkTitle>
      </WorkIntroDiv>
      <ProjectDiv>
        {projectData.map((project, index) => (
          <ProjectCard>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <img src={project.image} height={project.imagesize} style={{borderRadius: '15px'}}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '10px'}}>
              <LinkLink href={project.link} className="icon2 icon--links">
                <i className="ri-links-line"></i>
              </LinkLink>
              <Typography gutterBottom variant="h5" component="div" sx={{color: 'gainsboro'}}>
                {project.title}
              </Typography>
              <LinkGithub href={project.githublink} className="icon2 icon--github2">
                <i className="ri-github-line"></i>
              </LinkGithub>
            </div>
            <div>
              <TagsDiv>
              {project.tags.map((tag) => (
                <TagP
                  key={`${project.title}-${tag.name}`}
                  style={{ color: `${tag.color}` }}
                >
                  #{tag.name}
                </TagP>
              ))}
              </TagsDiv>
            </div>
            <div>
              <Typography variant="body2" sx={{color: 'gainsboro', textAlign: 'center'}}>
                {project.description}
              </Typography>
            </div>
          </ProjectCard>
        ))}
      </ProjectDiv>
    </section> 
  );
};

export default Projects

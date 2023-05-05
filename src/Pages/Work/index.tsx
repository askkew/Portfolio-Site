import { ProjectDiv,
  WorkTitle,
  WorkTitleDescription,
  WorkIntroDiv,
  TagsDiv,
  LinkGithub,
  LinkLink,
  TagP} from "./WorkStyles";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { projectData } from "../../utils/Constants";
import './work.css';
import { Card, CardMedia, Typography, CardContent, CardActions, Button } from "@mui/material";

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
            <Card sx={{ maxWidth: 545, backgroundColor: 'rgb(24,24,27)', padding: '25px' }}>
              <CardActions>
                <LinkGithub href={project.githublink} className="icon2 icon--github2">
                  <i className="ri-github-line"></i>
                </LinkGithub>
                <LinkLink href={project.link} className="icon2 icon--links">
                  <i className="ri-links-line"></i>
                </LinkLink>
              </CardActions>
              <CardMedia
                sx={{ height: 300 }}
                image={project.image}
                title="project image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{color: 'gainsboro'}}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{color: 'gainsboro'}}>
                  {project.description}
                </Typography>
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
              </CardContent>
            </Card>
          ))}
        </ProjectDiv>
      </div>
    </section> 
  );
};

export default Projects
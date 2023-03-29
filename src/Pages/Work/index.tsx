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
  LinkLink,
  TagP} from "./WorkStyles";
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
                {project.tags.map((tag) => (
                <TagP
                  key={`${project.title}-${tag.name}`}
                  style={{ color: `${tag.color}` }}
                >
                  #{tag.name}
                </TagP>
                ))}
              </TagsDiv>
            </ProjectCard>
          ))}
        </ProjectDiv>
      </div>
    </section> 
  );
};

export default Projects
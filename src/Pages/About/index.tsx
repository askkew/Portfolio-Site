import React, { useEffect } from "react";
import { AboutDiv, AboutCard, SkillsDiv, SkillsTypograph, AboutTitleTypograph, SkillsTypograph2, ToolsetIcons, ToolSetCard, SkillsBox, SecondSkillsBox } from "./AboutStyles";
import { StyledScrollButton, ToolIconLabel, ToolIcons } from './icons'
import { RiBracesFill } from 'react-icons/ri'

const About = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth > 1390) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about" style={{  background: 'radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%)'}}>
      <AboutDiv>
        <SkillsBox>
          <ToolSetCard>
            <AboutTitleTypograph>Toolset</AboutTitleTypograph>
            <ToolsetIcons>
              {
                ToolIcons.map((icon, index) => {
                  return (
                    <StyledScrollButton disableRipple key={index}>
                      {icon}
                      {
                        ToolIconLabel[index] && <span>{ToolIconLabel[index]}</span>
                      }
                    </StyledScrollButton>
                  )
                })
              }
            </ToolsetIcons>
          </ToolSetCard>
          <SecondSkillsBox>
            <AboutCard>
              <AboutTitleTypograph>Software Development</AboutTitleTypograph>
              <RiBracesFill style={{ fontSize: 60, color: '#fff', marginRight: 10 }} />
              <SkillsTypograph2>Data Structures, OOD, OOP, Algorithms, Critical Thinking, Problem Solving, GIT, RESTful APIs, Heroku, Netlify, AWS</SkillsTypograph2>
            </AboutCard>
            <AboutCard>
              <AboutTitleTypograph>Computer experience</AboutTitleTypograph>
            </AboutCard>
          </SecondSkillsBox>
        </SkillsBox>
      </AboutDiv>
    </section>
  );
};

export default About


{/* <SkillsDiv>
  <RowDiv>
    <StorageIcon style={{ fontSize: 60, color: primaryColor, marginRight: 10 }} />
    <SkillsTypograph>Software Development</SkillsTypograph>
  </RowDiv>
  <SkillsTypograph2>Data Structures, OOD, OOP, Algorithms, Critical Thinking, Problem Solving</SkillsTypograph2>
</SkillsDiv>
<SkillsDiv>
  <RowDiv>
    <ComputerIcon style={{ fontSize: 60, color: primaryColor, marginRight: 10 }} />
    <SkillsTypograph>Full-stack</SkillsTypograph>
  </RowDiv>
  <SkillsTypograph2>HTML, CSS, JavaScript, React, Redux, TypeScript, Material UI, Bootstrap, SASS, Styled Components</SkillsTypograph2>
</SkillsDiv>
<SkillsDiv>
  <RowDiv>
    <DataObjectIcon style={{ fontSize: 60, color: primaryColor, marginRight: 10 }} />
    <SkillsTypograph>Computer experience</SkillsTypograph>
  </RowDiv>
  <SkillsTypograph2>GIT, Node.js, Express.js, MongoDB, MySQL, Sequelize, RESTful APIs, GraphQL, Apollo, Mongoose, JWT, Bcrypt, Nodemailer, Heroku, AWS, Docker, Postman</SkillsTypograph2>
</SkillsDiv> */}
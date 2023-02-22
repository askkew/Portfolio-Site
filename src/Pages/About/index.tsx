import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { AboutDiv, AboutCard, SkillsDiv, SkillsTypograph, SkillsRowDiv, AboutTitleTypograph, SkillsTypograph2, LanguagesCard, SoftwareDevelopmentCard, ToolsetIcons } from "./AboutStyles";
import { RowDiv, ColumnDiv, primaryColor } from "../../utils/content";
import StorageIcon from '@mui/icons-material/Storage';
import ComputerIcon from '@mui/icons-material/Computer';
import DataObjectIcon from '@mui/icons-material/DataObject';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import { DiMongodb } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { StyledScrollButton, ToolIcons } from './icons'

const About = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  // const icons = [<SiJavascript style={{}}/>, 'SiTypescript', 'FaReact', 'FaHtml5', 'FaCss3Alt', 'DiNodejs', 'DiMongodb', 'DiMysql', 'DiCss3', 'SiRedux', 'FaNodeJs']

  useEffect(() => {
    if (window.innerWidth > 769) {
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
        <SkillsRowDiv>
          <AboutCard>
            <AboutTitleTypograph>Toolset</AboutTitleTypograph>
            <ToolsetIcons>
              {
                ToolIcons.map((icon, index) => {
                  return (
                    <StyledScrollButton disableRipple key={index}>
                      {icon}
                    </StyledScrollButton>
                  )
                })
              }
            </ToolsetIcons>
            {/* <SkillsTypograph2>HTML, CSS, JavaScript, React, Redux, TypeScript, Material UI, Bootstrap, Node.js, Express.js, MongoDB, MySQL, Mongoose, JWT</SkillsTypograph2> */}
          </AboutCard>
          <AboutCard>
            <AboutTitleTypograph>Software Development</AboutTitleTypograph>
            <SkillsTypograph2>Data Structures, OOD, OOP, Algorithms, Critical Thinking, Problem Solving, GIT, RESTful APIs, Heroku, Netlify, AWS</SkillsTypograph2>
          </AboutCard>
          <AboutCard>
            <AboutTitleTypograph>Computer experience</AboutTitleTypograph>
          </AboutCard>
        </SkillsRowDiv>
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
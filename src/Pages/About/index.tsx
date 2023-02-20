import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { AboutDiv, SkillsDiv, SkillsTypograph, SkillsRowDiv, AboutTitleTypograph, SkillsTypograph2 } from "./AboutStyles";
import { RowDiv, ColumnDiv, primaryColor } from "../../utils/content";
import StorageIcon from '@mui/icons-material/Storage';
import ComputerIcon from '@mui/icons-material/Computer';
import DataObjectIcon from '@mui/icons-material/DataObject';
import Typography from "@mui/material/Typography";

const About = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderAboutContent = () => (
    <section id="about" style={{  background: 'radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%)'}}>
      <AboutDiv>
        {/* <AboutTitleTypograph>About</AboutTitleTypograph> */}
        <SkillsRowDiv>
          <SkillsDiv>
            <RowDiv>
              <StorageIcon style={{ fontSize: 60, color: primaryColor, marginRight: 10 }} />
              <SkillsTypograph>Software Development</SkillsTypograph>
            </RowDiv>
            <SkillsTypograph2>Data Structures, OOD, OOP, Algorithms, Critical Thinking, Problem Solving</SkillsTypograph2>
          </SkillsDiv>
          <SkillsDiv>
            <RowDiv>
              <ComputerIcon style={{ fontSize: 60, color: primaryColor, marginRight: 10 }} />
              <SkillsTypograph>Frontend</SkillsTypograph>
            </RowDiv>
            <SkillsTypograph2>HTML, CSS, JavaScript, React, Redux, TypeScript, Material UI, Bootstrap, SASS, Styled Components</SkillsTypograph2>
          </SkillsDiv>
          <SkillsDiv>
            <RowDiv>
              <DataObjectIcon style={{ fontSize: 60, color: primaryColor, marginRight: 10 }} />
              <SkillsTypograph>Backend</SkillsTypograph>
            </RowDiv>
            <SkillsTypograph2>GIT, Node.js, Express.js, MongoDB, MySQL, Sequelize, RESTful APIs, GraphQL, Apollo, Mongoose, JWT, Bcrypt, Nodemailer, Heroku, AWS, Docker, Postman</SkillsTypograph2>
          </SkillsDiv>
        </SkillsRowDiv>
      </AboutDiv>
    </section> 
  )


  return (
    <div>
      {/* <div 
        id="stars" 
        style={{transform: `translateY(${offsetY * 0.2}px`}}
      />
      <div 
        id="stars2" 
        style={{transform: `translateY(${offsetY * 0.5}px`}}
      />
      <div 
        id="stars3" 
        style={{transform: `translateY(${offsetY * 0.7}px`}}
      /> */}
      <div>{renderAboutContent()}</div>
    </div>
  );
};

export default About
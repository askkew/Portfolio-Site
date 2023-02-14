import React from "react";
import { styled } from "@mui/system";
import { ContactCard, SocialButtons, NameTypograph, SubtitleTypograph, SubtitleTypograph2 } from "./ContactStyles";
import { RowDiv } from "../../utils/content";
import { IconButton, Button, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const ContactSection = styled('div')({

})

const Contact = () => {
  return (
    <section id="contact">
      <ContactCard>
        <NameTypograph>Before you go!</NameTypograph>
        <SubtitleTypograph>Thanks for checking out my page, I am currently looking to utilize my skills with a new team of creative designers and developers.</SubtitleTypograph>
        <SubtitleTypograph2>Connect with my socials!</SubtitleTypograph2>
        <SocialButtons>
          <IconButton color="primary" component="label">
            <Link href="https://github.com/askkew" target="_blank" >
              <GitHubIcon style={{transform: 'scale(2.6)', margin: 15}}/>
            </Link>
          </IconButton>
          <IconButton color="primary" component="label">
            <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
              <LinkedInIcon style={{transform: 'scale(2.6)', margin: 15}}/>
            </Link>
          </IconButton>
          <IconButton color="primary" component="label" onClick={() => window.open('mailto:lucasaoverbey@gmail.com')}>
            <EmailIcon style={{transform: 'scale(2.6)', margin: 15}}/>
          </IconButton>
        </SocialButtons>
      </ContactCard>
    </section> 
  );
};

export default Contact
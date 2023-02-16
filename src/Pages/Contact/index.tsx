import { StyledGithubIcon, StyledLinkedInIcon, StyledEmailIcon, ContactCard, SocialButtons, NameTypograph, SubtitleTypograph, SubtitleTypograph2 } from "./ContactStyles";
import { IconButton, Button, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <section id="contact" style={{  background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
      <ContactCard>
        <NameTypograph>Before you go!</NameTypograph>
        <SubtitleTypograph>Thanks for checking out my page, I am currently looking to utilize my skills with a new team of creative designers and developers.</SubtitleTypograph>
        <SubtitleTypograph2>Connect with my socials!</SubtitleTypograph2>
        <SocialButtons>
          <IconButton color="primary" component="label">
            <Link href="https://github.com/askkew" target="_blank" >
              <StyledGithubIcon />
            </Link>
          </IconButton>
          <IconButton color="primary" component="label">
            <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
              <StyledLinkedInIcon />
            </Link>
          </IconButton>
          <IconButton color="primary" component="label" onClick={() => window.open('mailto:lucasaoverbey@gmail.com')}>
            <StyledEmailIcon />
          </IconButton>
        </SocialButtons>
      </ContactCard>
    </section> 
  );
};

export default Contact